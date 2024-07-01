import React from 'react'
import { Form, Input, Space, Button } from 'antd'
import { sendLoginVerificationCode } from '@/service/login'
import { showError, showSuccess } from '@/components/TKMessage'
export default function BindTelForm(props) {
  const { form, values } = props
  const sendCode = async () => {
    const phone_number = form.getFieldValue('phone_number')
    const req = {
      account_number: Number(values.account_number),
      phone_number: phone_number,
      verify_type: 2
    }
    try {
      const res = await sendLoginVerificationCode(req)
      return showSuccess('发送成功，请在手机查收。')
    } catch (err) {
      showError('发送验证码失败，请稍后重试。')
    }
    // 发送成功
  }
  return (
    <Form form={form}>
      <Form.Item name="phone_number" label="手机号">
        <Input placeholder="请输入手机号" />
      </Form.Item>
      <Space>
        <Form.Item
          rules={[
            {
              required: true,
              message: '请输入验证码'
            }
          ]}
          name="verification_code"
          label="验证码"
        >
          <Input placeholder="请输入验证码" />
        </Form.Item>
        <Form.Item>
          <Button type="link" onClick={sendCode}>
            发送验证码
          </Button>
        </Form.Item>
      </Space>
    </Form>
  )
}
