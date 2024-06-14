import React from 'react'
import { Form, Input } from 'antd'
export default function VerifyForm(props) {
  const { form } = props
  return (
    <div>
      <Form form={form}>
        <Form.Item label="手机号">
          <Input></Input>
        </Form.Item>
        <Form.Item label="验证码"></Form.Item>
      </Form>
    </div>
  )
}
