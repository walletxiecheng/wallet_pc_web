import React, { useState, useRef } from 'react'
import { Flex, Select } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import EmailVerify from '../EmailVerify'
import './select.less'
// import icon from '@/assets/icon/light/logo_light.svg'
import style from './index.module.less'
import icon from '@/assets/icon/dark/logIcon.svg'
import { sendVerifyCode } from '@/service'
import { showSuccess, showError } from '@/common/message'
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
    value: 1,
    label: (
      <>
        <CheckCircleFilled />
        +852
      </>
    )
  },
  {
    value: 2,
    label: (
      <>
        <CheckCircleFilled />
        +812
      </>
    )
  }
]

export default function RegisterForm() {
  // 当前table
  const [checkTab, setCheckTab] = useState(1)
  const [showVerify, setShowVerify] = useState(false)
  // 邮箱号
  const emailRef = useRef()
  // 区号
  const areaCodeRef = useRef()
  // 手机号
  const phoneRef = useRef()

  const toggleShowVerify = (status) => {
    setShowVerify(status)
  }

  // 发送邮箱验证码
  const sendVerifyCodeHandler = async () => {
    const req = {
      account_type: 'email',
      verify_type: 'Register',
      account: emailRef.current.value
    }
    try {
      await sendVerifyCode(req)
      showSuccess('发送验证码成功')
      toggleShowVerify(true)
    } catch (err) {
      return showError('邮箱格式错误，请重新输入')
    }
  }
  return (
    <>
      <EmailVerify
        showVerify={showVerify}
        toggleShowVerify={toggleShowVerify}
        email={emailRef?.current?.value}
      />
      {/* <Password toggleCurrentStatus={toggleCurrentStatus} /> */}
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
            <Select options={options} defaultValue={1} ref={areaCodeRef} />
            <input
              placeholder="手机号"
              style={{ width: '264px' }}
              ref={phoneRef}
            />
          </Flex>
          <button>下一步</button>
        </div>
        {/* 登录 */}
        <div className={style.login}>
          已有账号？
          <span>登录</span>
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
