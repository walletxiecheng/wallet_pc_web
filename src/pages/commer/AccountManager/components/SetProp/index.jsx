import { Form, Input } from 'antd'
import React from 'react'

// 设置邀请人弹窗表单
export default function SetProp({ form }) {
  return (
    <div>
      <Form form={form}>
        <Form.Item label="商户" name="commercial_id">
          <Input disabled />
        </Form.Item>
        <Form.Item label="邀请人ID" name="inviter_account_id">
          <Input placeholder="请输入" />
        </Form.Item>
      </Form>
    </div>
  )
}
