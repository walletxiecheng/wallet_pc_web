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
import { columns } from './config'

const data = [
  {
    key: 1,
    id: 1,
    name: '读取名称'
  }
]

export default function OperateLog() {
  const [form] = Form.useForm()

  const onFinish = (e) => {
    console.log(e.time[0])
  }
  return (
    <div>
      <header>操作日志管理</header>
      <Divider />
      {/* 操作表单 */}
      <div>
        <Form form={form} onFinish={onFinish}>
          <Space>
            <Form.Item label="日期" name={'date'}>
              <DatePicker />
            </Form.Item>
            <Form.Item label="时间" name={'time'}>
              <TimePicker.RangePicker />
            </Form.Item>
            <Form.Item label="搜索">
              <Input placeholder="操作账号，城市或IP，表名称，操作ID" />
            </Form.Item>
          </Space>
          <br></br>
          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Space>
              <Form.Item label="操作类型">
                <Select placeholder="请选择"></Select>
              </Form.Item>
              <Form.Item label="操作结果">
                <Select placeholder="请选择"></Select>
              </Form.Item>
            </Space>

            <Space>
              <Form.Item>
                <Button htmlType="reset">重置</Button>
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit">查询</Button>
              </Form.Item>
            </Space>
          </Space>
          <Space></Space>
        </Form>
      </div>

      {/* 操作日志表格 */}
      <Table dataSource={data} columns={columns()}></Table>
    </div>
  )
}
