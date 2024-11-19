import React, { useState, useRef } from 'react'
import style from './index.module.less'
import { Flex, Select } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import { showError, showSuccess, showWarning } from '@/common/message'
import { sendVerifyCode } from '@/service'
import EmailVerify from './EmailVerify'
import PhoneVerify from './PhoneVerify'
import { validateEmail, validatePhone } from '@/common/regex'

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
    value: 86,
    label: (
      <>
        <CheckCircleFilled />
        +86
      </>
    )
  },
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
  }
]
export default function Reset() {
  const [checkTab, setCheckTab] = useState(1)
  const [showEmail, setShowEmail] = useState(false)
  const [showPhone, setShowPhone] = useState(false)

  const [area, setArea] = useState(86)
  const emailRef = useRef()
  const phoneRef = useRef()

  const toggleShowTel = (status) => {
    setShowPhone(status)
  }
  // 发送邮箱验证码
  const sendEmailCodeHandler = async () => {
    const req = {
      account_type: 'email',
      verify_type: 'ResetPassword',
      account: emailRef.current?.value
    }

    if (!validateEmail(req.account)) {
      return showWarning('Please enter a valid email')
    }
    try {
      await sendVerifyCode(req)
      setShowEmail(true)
      return showSuccess('发送验证码成功')
    } catch (err) {
      return showError(err?.msg)
    }
  }

  // 发送手机号验证码
  const sendPhoneCodeHandler = async () => {
    if (!validatePhone(phoneRef?.current?.value)) {
      return showWarning('Please enter a valid phone number')
    }

    const req = {
      account_type: 'phone',
      verify_type: 'ResetPassword',
      account: area + '-' + phoneRef.current?.value
    }
    try {
      await sendVerifyCode(req)
      showSuccess('发送验证码成功')
    } catch (err) {
      showError(err?.msg)
    }
  }

  return (
    <div className={style.resetContainer}>
      <EmailVerify
        showVerify={showEmail}
        setShowEmail={setShowEmail}
        email={emailRef?.current?.value}
      />
      <PhoneVerify
        showPhone={showPhone}
        toggleShowTel={toggleShowTel}
        phone={area + '-' + phoneRef.current?.value}
      />
      <div className={style.resetBox}>
        <header>
          <h3>重置登录密码</h3>
          <div className={style.tag}>
            重置登录密码后，24小时内禁止提币和OTC划转
          </div>
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
          <button onClick={sendEmailCodeHandler}>提交</button>
        </div>
        {/* 手机号注册 */}
        <div
          className={style.telForm}
          style={{ display: checkTab === 2 ? 'block' : 'none' }}
        >
          <Flex>
            <Select
              options={options}
              defaultValue={86}
              onChange={(val) => {
                setArea(val)
              }}
            />
            <input
              placeholder="手机号"
              ref={phoneRef}
              style={{ width: '264px' }}
            />
          </Flex>
          <button onClick={sendPhoneCodeHandler}>提交</button>
        </div>
      </div>
    </div>
  )
}
