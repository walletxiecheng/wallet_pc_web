import {
  Divider,
  Form,
  Space,
  Button,
  Table,
  DatePicker,
  TimePicker,
  Input,
  Select
} from 'antd'
import React from 'react'
import { columns, resultOption, typeOption } from './config'
import { getOperationRecordList } from '@/service/log'
import { usePagination } from 'ahooks'

export default function OperateLog() {
  const [form] = Form.useForm()
  const { data, run, pagination } = usePagination(
    async (params) => {
      const res = await getOperationRecordList(params)
      if (res.code !== 0) {
        return { total: 0, list: [] }
      }
      const data = res.data
      return { total: data?.total, list: data?.operation_list }
    },
    {
      defaultParams: [
        {
          current: 1,
          pageSize: 10
        }
      ]
    }
  )

  const onFinish = (values) => {
    // console.log(values.date.format('YYYY-MM-DD'))
    values.date = values?.date.format('YYYY-MM-DD') || undefined
    if (values.time) {
      values.start_time = values?.time[0].format('hh:mm:ss') || undefined
      values.end_time = values?.time[1].format('hh:mm:ss') || undefined
    }
    console.log(values)

    run({
      current: 1,
      pageSize: 10,
      ...values
    })
  }

  return (
    <div>
      <header>操作日志管理</header>
      <Divider />
      {/* 操作表单 */}
      <div>
        <Form form={form} onFinish={onFinish}>
          <Space>
            <Form.Item label="日期" name="date">
              <DatePicker />
            </Form.Item>
            <Form.Item label="时间" name="time">
              <TimePicker.RangePicker />
            </Form.Item>
            <Form.Item label="搜索" name="search_key">
              <Input placeholder="操作账号，城市或IP，表名称，操作ID" />
            </Form.Item>
          </Space>
          <br></br>
          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Space>
              <Form.Item label="操作类型" name="operation_type">
                <Select options={typeOption} placeholder="请选择"></Select>
              </Form.Item>
              <Form.Item label="操作结果" name="operation_result">
                <Select options={resultOption} placeholder="请选择"></Select>
              </Form.Item>
            </Space>

            <Space>
              <Form.Item>
                <Button
                  htmlType="reset"
                  type="link"
                  style={{ border: '1px solid #3f78f9' }}
                >
                  重置
                </Button>
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  查询
                </Button>
              </Form.Item>
            </Space>
          </Space>
        </Form>
      </div>

      {/* 操作日志表格 */}
      <Table
        rowKey={(record) => record.operation_id}
        dataSource={data?.list || []}
        columns={columns()}
      ></Table>
    </div>
  )
}
