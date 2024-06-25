import { Form, Select, Space, Input, Radio } from 'antd'
import React from 'react'

export default function NodeForm() {
  return (
    <div>
      <Form layout="vertical">
        <Space>
          <Form.Item label="节点选择">
            <Select placeholder="请选择" />
          </Form.Item>
          <Form.Item label="名称">
            <Input placeholder="请选择" />
          </Form.Item>
        </Space>
        <Form.Item label="配置内容">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="描述">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="状态">
          <Radio.Group
            options={[
              { value: 1, label: '启用' },
              { value: 2, label: '禁用' }
            ]}
          ></Radio.Group>
        </Form.Item>
      </Form>
    </div>
  )
}
