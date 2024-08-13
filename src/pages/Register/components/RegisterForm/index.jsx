import React, { useState, useRef } from 'react'
import { Flex, Select } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import EmailVerify from '../EmailVerify'
import PhoneVerify from '../PhoneVerify'
import { useNavigate } from 'react-router-dom'
import './select.less'
// import icon from '@/assets/icon/light/logo_light.svg'
import style from './index.module.less'
import icon from '@/assets/icon/dark/logIcon.svg'
import { sendVerifyCode } from '@/service'
import { showSuccess, showError, showWarning } from '@/common/message'
// 当前组件状态 1登录表单，2
// const [currentStatus, setCurrentStatus] = useState(1)
// 注册方式-默认邮箱注册

const tabList = [
  {
    id: 1,
    label: '邮箱'
  },
  {
    id: 2,
    label: '手机号'
  }
]

const options = [
  {
    value: 852,
    label: (
      <>
        <CheckCircleFilled />
        +852
      </>
    )
  },
  {
    value: 812,
    label: (
      <>
        <CheckCircleFilled />
        +812
      </>
    )
  },
  {
    value: 86,
    label: (
      <>
        <CheckCircleFilled />
        +86
      </>
    )
  }
]

export default function RegisterForm() {
  // 当前table
  const [checkTab, setCheckTab] = useState(1)
  const [showVerify, setShowVerify] = useState(false)
  const [showTel, setShowTel] = useState(false)
  const navigate = useNavigate()

  // 邮箱号
  const emailRef = useRef()
  // 国家代号
  const areaCodeRef = useRef()
  // 手机号
  const phoneRef = useRef()

  // 显示/隐藏邮箱
  const toggleShowVerify = (status) => {
    setShowVerify(status)
  }
  // 显示/隐藏手机号
  const toggleShowTel = (status) => {
    setShowTel(status)
  }

  // 发送邮箱验证码
  const sendVerifyCodeHandler = async () => {
    const req = {
      account_type: 'email',
      verify_type: 'Register',
      account: emailRef.current?.value
    }
    try {
      await sendVerifyCode(req)
      showSuccess('send success')
      toggleShowVerify(true)
    } catch (err) {
      return showError(err.msg)
    }
  }

  // 发送手机号验证码
  const sendPhoneCodeHandler = async () => {
    if (!phoneRef?.current?.value) {
      return showWarning('请输入手机号')
    }
    const req = {
      account_type: 'phone',
      verify_type: 'Register',
      account: phoneRef.current?.value
    }
    toggleShowTel(true)

    try {
      await sendVerifyCode(req)
      showSuccess('send success')
      toggleShowTel(true)
    } catch (err) {
      return showError(err.msg)
    }
  }
  return (
    <>
      <EmailVerify
        showVerify={showVerify}
        sendVerifyCodeHandler={sendVerifyCodeHandler}
        toggleShowVerify={toggleShowVerify}
        email={emailRef?.current?.value}
      />

      <PhoneVerify
        showTel={showTel}
        sendPhoneCodeHandler={sendPhoneCodeHandler}
        toggleShowTel={toggleShowTel}
        phone={phoneRef?.current?.value}
      />
      <div className={style.registerBox}>
        <header>
          <img src={icon} />
          欢迎注册Token17
        </header>
        <div className={style.tabs}>
          {tabList.map((item) => (
            <span
              key={item.id}
              className={checkTab === item.id ? style.active : ''}
              onClick={() => {
                setCheckTab(item.id)
              }}
            >
              {item.label}
            </span>
          ))}
        </div>
        {/* 邮箱注册 */}
        <div
          className={style.emailForm}
          style={{ display: checkTab === 1 ? 'block' : 'none' }}
        >
          <input placeholder="请输入邮箱" ref={emailRef} />
          <button
            onClick={() => {
              sendVerifyCodeHandler()
            }}
          >
            下一步
          </button>
        </div>
        {/* 手机号注册 */}
        <div
          className={style.telForm}
          style={{ display: checkTab === 2 ? 'block' : 'none' }}
        >
          <Flex>
            <Select options={options} ref={areaCodeRef} defaultValue={86} />
            <input
              placeholder="手机号"
              style={{ width: '264px' }}
              ref={phoneRef}
            />
          </Flex>
          <button
            onClick={() => {
              // 发送手机验证码
              sendPhoneCodeHandler()
            }}
          >
            下一步
          </button>
        </div>
        {/* 登录 */}
        <div className={style.login}>
          已有账号？
          <span
            onClick={() => {
              navigate('/login')
            }}
          >
            登录
          </span>
        </div>
        {/* 分割线 */}
        <div className={style.line} />
        {/* 协议链接 */}
        <div className={style.protocol}>
          我已阅读并同意<span>《用户协议》</span>和<span>《隐私协议》</span>
        </div>
      </div>
    </>
  )
}
