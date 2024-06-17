import React from 'react'
import { Form, Input, Space, Button } from 'antd'
import { sendLoginVerificationCode } from '@/service/login'
import { showError, showSuccess, showWarning } from '@/components/TKMessage'
export default function BindTelForm(props) {
  const { form } = props
  const sendCode = async () => {
    const req = form.getFieldsValue()
    req.verify_type = 3

    const res = await sendLoginVerificationCode(req)
    if (res.code === 420) {
      showWarning('该手机号未绑定，请检查后重新输入。')
      return Promise.reject()
    }
    if (res.code !== 0) {
      showError('发送验证码失败，请稍后重试。')
      return Promise.reject()
    }
    // 发送成功
    return showSuccess('发送成功，请在手机查收。')
  }
  return (
    <Form form={form}>
      <Form.Item name="phone_number" label="手机号">
        <Input placeholder="请输入手机号"></Input>
      </Form.Item>
      <Space>
        <Form.Item
          rules={[
            {
              required: true,
              message: '请输入验证码'
            }
          ]}
          name="verify_code"
          label="验证码"
        >
          <Input placeholder="请输入验证码"></Input>
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
