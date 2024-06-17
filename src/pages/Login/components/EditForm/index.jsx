import React, { useState } from 'react'
import { Form, Input } from 'antd'
import { LockOutlined } from '@ant-design/icons'

export default function EditForm(props) {
  const { form } = props
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(false)

  return (
    <div>
      <Form layout="vertical" form={form}>
        <Form.Item
          label="新密码"
          name="new_password"
          rules={[
            {
              required: true,
              message: '请输入你的密码'
            }
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="new_pass_word_confirm"
            placeholder="请输入密码"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible
            }}
          />
        </Form.Item>
        <Form.Item
          label="再次输入密码"
          name="new_pass_word_confirm"
          rules={[
            {
              required: true,
              message: '请再次输入密码'
            }
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="请再次输入密码"
            visibilityToggle={{
              visible: passwordVisibleConfirm,
              onVisibleChange: setPasswordVisibleConfirm
            }}
          />
        </Form.Item>
      </Form>
    </div>
  )
}
