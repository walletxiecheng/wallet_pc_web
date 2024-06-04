import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { convertJsonToFormData } from '@/utils/handleData'
import { login } from '@/service/login'
import { useUserStore } from '@/stores'
import style from './index.module.less'
import logo from '@/assets/icon/largeLogoIcon.svg'
// 测试组件
export default function Login() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const changeInfo = useUserStore((state) => {
    state.changeInfo
  })
  const onFinish = async (values) => {
    const from = convertJsonToFormData(values)
    const { data } = await login(from)
    form.resetFields()
    setTimeout(() => {
      changeInfo(data)
    }, 200)
    navigate('/systems/smsManager')
  }
  return (
    <div className={style.loginContainer}>
      <div className={style.loginBox}>
        <header>
          <div className={style.loginTitle}>
            <Space>
              <img src={logo} />
              <span>Token 13 管理后台</span>
            </Space>
          </div>
          <span className={style.loginDescription}>
            欢迎使用Token13后台管理
          </span>
        </header>
        {/* 登陆表单 */}
        <Form
          name="normal_login"
          form={form}
          className={style.loginForm}
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="account_number"
            rules={[
              {
                required: true,
                message: '请输入用户名!'
              }
            ]}
          >
            <Input
              className={style.input}
              prefix={<UserOutlined />}
              placeholder="请输入用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入你的密码'
              }
            ]}
          >
            <Input
              className={style.input}
              prefix={<LockOutlined />}
              type="password"
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item
            name="verification_code"
            rules={[
              {
                required: true,
                message: '请输入验证码'
              }
            ]}
          >
            <Input
              type="text"
              style={{
                width: 120
              }}
              placeholder="请输入验证码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
