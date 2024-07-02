import React from 'react'
import { Form, Input, Space, Button } from 'antd'
import { sendLoginVerificationCode } from '@/service/login'
import { showError } from '@/components/TKMessage'
export default function VForm(props) {
  const { form, values } = props

  const sendCode = async () => {
    const req = {
      account_number: Number(values.account_number),
      phone_number: values.phone_number,
      verify_type: 1 //登录验证
    }
    try {
      const res = await sendLoginVerificationCode(req)
    } catch (err) {
      showError('发送失败请重试')
      return Promise.reject()
    }
  }

  return (
    <div>
      <Form form={form} initialValues={values} layout="vertical">
        <Form.Item label="手机号" name="phone_number">
          <Input></Input>
        </Form.Item>
        <Form.Item
          label="验证码"
          name="verification_code"
          rules={[
            {
              required: true,
              message: '请输入验证码'
            }
          ]}
        >
          <Space>
            <Input style={{ width: 260 }} placeholder="请输入验证码"></Input>
            <Button type="link" onClick={sendCode}>
              发送验证码
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}
