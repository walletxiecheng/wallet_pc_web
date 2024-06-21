import React from 'react'
import {
  Table,
  Form,
  InputNumber,
  DatePicker,
  Input,
  Select,
  Button,
  Space,
  Divider
} from 'antd'
import { columns, ruleOptions, systemOptions, warnOptions } from './config'
import { usePagination } from 'ahooks'
import { getWarningList } from '@/service/warn'
import { showError } from '@/components/TKMessage'
import { openModal } from '../SmsManager/components/Modal'
const { RangePicker } = DatePicker
const PAGE_SIZE = 10

export default function WarnManager() {
  const [form] = Form.useForm()
  //  数据渲染
  const {
    data: warnList,
    run: warnRun,
    pagination: warnPagination
  } = usePagination(
    async (params) => {
      try {
        const res = await getWarningList(params)
        const { data } = res
        return { total: data.total, list: data.system_warning_list }
      } catch (err) {
        showError('获取数据失败')
        return { total: 0, list: [] }
      }
    },
    {
      defaultParams: [
        {
          current: 1,
          pageSize: PAGE_SIZE
        }
      ]
    }
  )
  // 查询
  const query = (values) => {
    // 日期有值的情况下增加开始日期字段和结束日期字段
    if (values.date) {
      values.date_start = values.date[0].format('YYYY-MM-DD')
      values.date_end = values.date[1].format('YYYY-MM-DD')
    }
    // 重新渲染
    warnRun({
      current: 1,
      pageSize: PAGE_SIZE
    })
  }

  // 编辑弹窗
  const editRule = (ruleInfo) => {
    openModal({
      title: '编辑规则',
      content: <EditForm values={ruleInfo} />,
      handleOK: () => {
        return Promise.reject()
      }
    })
  }

  return (
    <div>
      <header>
        <h2>报警管理</h2>
      </header>
      <Divider></Divider>
      <Form layout="horizontal" form={form} onFinish={query}>
        <Space size="large">
          <Form.Item name="trigger_indicator_min" label="触发指标">
            <InputNumber changeOnWheel placeholder="最小值" />
          </Form.Item>
          <Form.Item name="trigger_indicator_max">
            <InputNumber changeOnWheel placeholder="最大值" />
          </Form.Item>
          <Form.Item name="date" label="日期">
            <RangePicker />
          </Form.Item>
          <Form.Item name="abstract" label="摘要">
            <Input placeholder="报错内容"></Input>
          </Form.Item>
        </Space>
        <br />
        <Space
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Space size="large">
            <Form.Item name="system_type" label="系统类型">
              <Select options={systemOptions} placeholder="系统类型" />
            </Form.Item>
            <Form.Item name="warn_type" label="报警类型">
              <Select options={warnOptions} placeholder="报警类型" />
            </Form.Item>
            <Form.Item name="trigger_rule" label="规则类型">
              <Select options={ruleOptions} placeholder="规则类型" />
            </Form.Item>
          </Space>

          <Space>
            <Button type="primary" htmlType="reset">
              重置
            </Button>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </Space>
        </Space>
      </Form>
      <Table
        dataSource={warnList?.list || []}
        rowKey={(record) => record.id}
        pagination={{
          total: warnList?.total,
          current: warnPagination.current,
          pageSize: warnPagination.pageSize,
          onChange: warnPagination.onChange,
          onShowSizeChange: warnPagination.onChange
        }}
        columns={columns(editRule)}
      />
    </div>
  )
}
