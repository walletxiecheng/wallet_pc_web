import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { convertJsonToFormData } from '@/utils/handleData'
import { openModal } from '../SmsManager/components/Modal'
import BindTelForm from './components/Form'
import { login, preLogin, bindPhoneNumber } from '@/service/login'
import { successMsg } from '@/components/TKMessage'
import style from './index.module.less'
import logo from '@/assets/icon/largeLogoIcon.svg'
// 登录组件
export default function Login() {
  const [loginForm] = Form.useForm()
  const [bindForm] = Form.useForm()
  const bindTelNumber = (formData) => {
    // TODO首次登录绑定手机号
    return openModal({
      title: '绑定手机号',
      content: <BindTelForm form={bindForm} />,
      handleOk: async () => {
        const result = await bindForm.validateFields()
        try {
          // TODO:绑定手机号
          result.account_number = Number(formData.account_number)
          console.log(result)
          const res = await bindPhoneNumber(result)
          console.log(res)
          return Promise.reject()
        } catch (err) {
          return Promise.reject()
        }
      }
    })
  }
  const onLoginHandler = async () => {
    const res = await login()
    console.log(res)
  }
  // 登录时调用
  const onFinish = async (values) => {
    // TODO判断是否首次登录
    const loginData = await loginForm.validateFields()
    const req = { account_number: values.account_number }
    const { data } = await preLogin(req)
    const resData = data.data
    const status = resData.account_status

    console.log(values)
    // 根据不同的状态码做不同的操作
    if (status === 0) {
      successMsg('账号不存在', 'error')
    } else if (status === 1) {
      // 直接登录
      onLoginHandler(values)
    } else if (status === 2) {
      bindTelNumber(loginData)
    } else if (status === 3) {
      successMsg('账号已禁用', 'warn')
    }
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
          form={loginForm}
          name="normal_login"
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
