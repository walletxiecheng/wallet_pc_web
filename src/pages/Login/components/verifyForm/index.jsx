import React from 'react'
import { Form, Input, Space, Button } from 'antd'
import { sendLoginVerificationCode } from '@/service/login'
import { showError } from '@/components/TKMessage'
export default function VerifyForm(props) {
  const { form, values } = props

  const sendCode = async () => {
    console.log('发送验证码')
    //     {
    //   "account_number": 0,
    //   "phone_number": "string",
    //   "verify_type": 0
    // }
    const req = {
      account_number: Number(values.account_number),
      phone_number: values.phone_number,
      verify_type: 1 //登录验证
    }
    const res = await sendLoginVerificationCode(req)
    console.log(res)
    if (res.code !== 0) {
      showError('发送失败请重试')
      return Promise.reject()
    }
    // 发送成功
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
