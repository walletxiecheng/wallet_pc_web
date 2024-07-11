import { TimePicker, Form, Input, Space, Select } from 'antd'
import React from 'react'

export default function RuleForm({ form }) {
  return (
    <div>
      <Form layout="vertical" form={form}>
        <Space>
          <Form.Item label="笔数" name="stroke_amount">
            <Input />
          </Form.Item>
          <Form.Item label="单笔金额" name="single_amount">
            <Input />
          </Form.Item>
          <Form.Item label="累计金额" name="total_amount">
            <Input />
          </Form.Item>
        </Space>
        <Space>
          <Form.Item label="重置间隔" name="reset_interval">
            <Input />
          </Form.Item>
          <Form.Item label="结算时间" name="settlement_time">
            <TimePicker />
          </Form.Item>
        </Space>
      </Form>
    </div>
  )
}
