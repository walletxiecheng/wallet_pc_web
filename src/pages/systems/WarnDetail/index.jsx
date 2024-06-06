import React from 'react'
import { Table, Form, Input, Space } from 'antd'
import { columns } from './config'
export default function WarnDetail() {
  const data = []
  return (
    <div>
      <Form>
        <Space size="large">
          <Form.Item label="编号">
            <Input defaultValue="01"></Input>
          </Form.Item>

          <Form.Item label="报警类型">
            <Input defaultValue="崩溃"></Input>
          </Form.Item>
          <Form.Item label="触发规则">
            <Input defaultValue="单个版本"></Input>
          </Form.Item>
          <Form.Item label="触发指标">
            <Input defaultValue="4408"></Input>
          </Form.Item>
        </Space>

        <Space size="large">
          <Form.Item label="报警时间">
            <Input defaultValue="2024" type="date"></Input>
          </Form.Item>
          <Form.Item label="系统类型">
            <Input defaultValue="IOS"></Input>
          </Form.Item>
          <Form.Item label="摘要">
            <Input defaultValue="报错文本"></Input>
          </Form.Item>
        </Space>
      </Form>
      <Table columns={columns()} dataSource={data} />
    </div>
  )
}
