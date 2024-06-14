import React from 'react'
import style from './index.module.less'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import logo from '@/assets/icon/largeLogoIcon.svg'
import { Form, Space, Input, Checkbox, Button } from 'antd'
import { forgetPassword, verifyLogin, bindTelNumber } from './utils'
import { preLogin } from '@/service/login'
import { showError, showWarning } from '@/components/TKMessage'

export default function Login() {
  const [form] = Form.useForm()
  verifyLogin()
  // 登录
  const onFinish = async (values) => {
    // TODO 预登录
    const res = await preLogin(values)
    if (res.code !== 0) {
      return showError('系统错误请稍后再试')
    }
    const status = res.data.account_status
    // TODO 根据返回的不同状态码做不同操作
    console.log(status)
    if (status === 0) {
      return showError('账号不存在，请检查。')
    } else if (status === 1) {
      //  带着用户名和密码进入验证码弹窗
      verifyLogin(values)
    } else if (status === 2) {
      // 进入绑定手机号弹窗
      bindTelNumber(values)
    } else if (status === 3) {
      return showError('账号已被禁用，请联系管理员。')
    } else if (status === 4) {
      return showWarning('密码错误')
    }
  }

  return (
    <div className={style.loginContainer}>
      {/* 标题部分 */}
      <div className={style.loginBox}>
        <header className={style.loginTitle}>
          <Space>
            <img src={logo} />
            <span>Token 13 管理后台</span>
          </Space>
          <p className={style.loginDescription}>欢迎使用 Token 13后台管理!</p>
        </header>
        {/* 表单部分 */}
        <div className={style.formBox}>
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              name="account_number"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!'
                }
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
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
                prefix={<LockOutlined />}
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>

            <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Form.Item>
                <Checkbox defaultChecked> </Checkbox>
                <span>记住我</span>
              </Form.Item>

              <Form.Item>
                <Button onClick={forgetPassword} type="link">
                  忘记密码？
                </Button>
              </Form.Item>
            </Space>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
