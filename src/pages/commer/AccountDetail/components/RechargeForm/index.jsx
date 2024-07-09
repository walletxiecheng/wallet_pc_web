import { Form, Input } from 'antd'
import React from 'react'

// 充币
export default function RechargeForm({ form }) {
  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item label="币种" name="coin_type">
          <Input disabled />
        </Form.Item>
        <Form.Item label="充值地址" name="address">
          <Input disabled />
        </Form.Item>
        <Form.Item label="充值数量" name="amount">
          <Input placeholder="请输入" />
        </Form.Item>
      </Form>
    </div>
  )
}
