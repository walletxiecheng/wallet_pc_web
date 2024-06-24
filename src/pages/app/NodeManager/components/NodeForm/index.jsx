import { Form, Select, Space, Input } from 'antd'
import React from 'react'

export default function NodeForm() {
  return (
    <div>
      <Form layout="vertical">
        <Space>
          <Form.Item label="节点选择">
            <Select placeholder="请选择"></Select>
          </Form.Item>
          <Form.Item label="名称">
            <Input placeholder="请选择"></Input>
          </Form.Item>
        </Space>
      </Form>
    </div>
  )
}
