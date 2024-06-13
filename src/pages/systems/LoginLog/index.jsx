import React from 'react'
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
import { columns } from './config'

export default function LoginLog() {
  const [form] = Form.useForm()
  const onFinish = (values) => {
    console.log(values)
  }
  return (
    <div>
      <header>登录日志管理</header>
      <Divider />
      <Form form={form} onFinish={onFinish}>
        <Form.Item label="搜索">
          <Input style={{ width: 200 }} placeholder="登录账号、城市或IP" />
        </Form.Item>
        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Space>
            <Form.Item label="登录结果">
              <Select placeholder="请选择" />
            </Form.Item>
            <Form.Item label="日期">
              <DatePicker placeholder="请选择" />
            </Form.Item>
            <Form.Item label="时间">
              <TimePicker.RangePicker />
            </Form.Item>
          </Space>
          <Space>
            <Form.Item>
              <Button>重置</Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary">查询</Button>
            </Form.Item>
          </Space>
        </Space>
      </Form>

      {/* 登录日志表格 */}
      <Table columns={columns()}></Table>
    </div>
  )
}
