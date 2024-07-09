import React from 'react'
import { Form, Input, Select } from 'antd'
import { transactionTypeOptions } from '../../config'

// 锁仓
export default function LockForm({ form }) {
  return (
    <div>
      <Form layout="vertical" form={form}>
        <Form.Item label="币种" name="token_type">
          <Input disabled />
        </Form.Item>
        <Form.Item label="选择活动" name="transaction_type">
          <Select options={transactionTypeOptions} />
        </Form.Item>
        <Form.Item label="锁仓数量" name="amount">
          <Input placeholder="请输入" />
        </Form.Item>
      </Form>
    </div>
  )
}
