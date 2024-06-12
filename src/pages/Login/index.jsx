import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { openModal } from '../systems/SmsManager/components/Modal'
import BindTelForm from './components/Form'
import { useNavigate } from 'react-router-dom'
import { login, preLogin, bindPhoneNumber } from '@/service/login'
import { showMsg } from '@/components/TKMessage'
import style from './index.module.less'
import logo from '@/assets/icon/largeLogoIcon.svg'
// 登录组件
export default function Login() {
  const [loginForm] = Form.useForm()
  const [bindForm] = Form.useForm()
  const navigate = useNavigate()

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
          const { data } = await bindPhoneNumber(result)
          if (data.code === 0) {
            showMsg('绑定手机号成功', 'success')
          } else {
            showMsg('绑定手机号失败，请检查你的手机号或验证码', 'error')
            return Promise.reject()
          }
        } catch (err) {
          return Promise.reject()
        }
      }
    })
  }

  // 处理登录逻辑
  const onLoginHandler = async (formData) => {
    const header = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const { data } = await login(formData, header)
    // console.log(data)
    if (data.code !== 0) {
      showMsg(data.msg, 'warning')
      return Promise.reject()
    }

    console.log(data.data)
    navigate('/systems/smsManager')
  }
  // 登录时调用
  const onFinish = async (values) => {
    // TODO判断是否首次登录
    const loginData = await loginForm.validateFields()
    const req = { account_number: values.account_number }
    const res = await preLogin(req)
    console.log(res)
    const resData = res.data
    const status = resData.account_status

    // 根据不同的状态码做不同的操作
    if (status === 0) {
      showMsg('账号不存在', 'error')
    } else if (status === 1) {
      // 直接登录
      console.log('直接登录')
      onLoginHandler(values)
    } else if (status === 2) {
      bindTelNumber(loginData)
    } else if (status === 3) {
      showMsg('账号已禁用', 'warn')
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

          <Space>
            <Form.Item name="verification_code">
              <Input placeholder="请输入验证码" />
            </Form.Item>
            <Form.Item>
              <Button>发送验证码</Button>
            </Form.Item>
          </Space>
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
