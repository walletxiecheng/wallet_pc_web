import React, { useState } from 'react'
import style from './index.module.less'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import logo from '@/assets/icon/largeLogoIcon.svg'
import { Form, Space, Input, Checkbox, Button } from 'antd'
import { preLogin, bindPhoneNumber } from '@/service/login'
import { resetSystemUserPassword } from '@/service/system'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import { showError, showSuccess, showWarning } from '@/components/TKMessage'
import VerifyForm from './components/VerifyForm'
import ForgetForm from './components/ForgetForm'
import EditForm from './components/EditForm'
import BindTelForm from './components/BindTelForm'
import { login } from '@/service/login'
import { useUserStore, useTokenStore } from '@/stores'
import { useNavigate } from 'react-router-dom'
import { URLS } from '@/routes/urls'

export default function Login() {
  // 登录表单
  const [form] = Form.useForm()
  // 控制密码显示隐藏
  const [passwordVisible, setPasswordVisible] = useState(false)
  // 弹窗通用表单
  const [modalForm] = Form.useForm()
  // 使用状态管理 设置用户信息
  const { setUserInfo } = useUserStore()
  const { setToken } = useTokenStore()
  const navigate = useNavigate()
  // 登录
  const onFinish = async (values) => {
    // TODO 预登录
    const res = await preLogin(values)
    if (res.code !== 0) {
      return
    }
    const data = res.data
    const status = data.account_status
    const formValue = { ...data, ...values }
    // TODO 根据返回的不同状态码做不同操作
    if (status === 0) {
      return showError('账号不存在，请检查。')
    } else if (status === 1) {
      //  带着用户名和密码和手机号进入验证码弹窗
      verifyLogin(formValue)
    } else if (status === 2) {
      // 进入绑定手机号弹窗
      bindTelNumber(formValue)
    } else if (status === 3) {
      return showError('账号已被禁用，请联系管理员。')
    } else if (status === 4) {
      return showWarning('密码错误')
    }
  }
  // 忘记密码
  const forgetPassword = () => {
    console.log('忘记密码')
    openModal({
      title: '忘记密码',
      content: <ForgetForm form={modalForm} />,
      handleOk: async () => {
        const result = await modalForm.validateFields()
        editPassWord(result)
      }
    })
  }

  // 绑定手机号
  const bindTelNumber = (values) => {
    console.log('绑定手机号')
    openModal({
      title: '绑定手机号',
      content: <BindTelForm form={modalForm} values={values} />,
      handleOk: async () => {
        console.log('绑定手机号')
        const result = await modalForm.validateFields()
        result.account_number = Number(values.account_number)

        try {
          const res = await bindPhoneNumber(result)
          if (res.code !== 0) {
            return Promise.reject()
          }
          showSuccess('绑定手机号成功,请登录')
          return navigate(URLS.login)
        } catch (err) {
          showError(err)
          return Promise.reject()
        }
      }
    })
  }

  // 验证登录
  const verifyLogin = (values) => {
    openModal({
      title: '验证登录',
      okText: '登录',
      content: <VerifyForm form={modalForm} values={values} />,
      handleOk: async () => {
        const result = await modalForm.validateFields()
        try {
          const header = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          const req = { ...values, ...result }
          // 调用登录接口
          const res = await login(req, header)
          setUserInfo(res.data)
          setToken(res.data.token)
          showSuccess('登录成功')
          navigate(URLS.index)
        } catch (err) {
          showError(err)
          return Promise.reject()
        }
      }
    })
  }

  // 修改密码
  const editPassWord = (editForm) => {
    openModal({
      title: '修改密码',
      content: <EditForm form={modalForm} />,
      handleOk: async () => {
        const result = await modalForm.validateFields()
        try {
          const req = { ...result, ...editForm }
          const res = await resetSystemUserPassword(req)
          if (res.code !== 0) {
            return Promise.reject()
          }
          return showSuccess('修改成功，请登录。')
        } catch (error) {
          showError(error)
          return Promise.reject()
        }
      }
    })
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
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="请输入密码"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible
                }}
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
