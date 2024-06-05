import React from 'react'
import { Form, Input, Space } from 'antd'
export default function BindTelForm({ form }) {
  return (
    <Form form={form}>
      <Form.Item name="phone_number" label="手机号">
        <Input placeholder="请输入手机号"></Input>
      </Form.Item>
      <Space>
        <Form.Item name="verification_code" label="验证码">
          <Input placeholder="请输入验证码"></Input>
        </Form.Item>
        <Form.Item>
          <Button>发送验证码</Button>
        </Form.Item>
      </Space>
    </Form>
  )
}
