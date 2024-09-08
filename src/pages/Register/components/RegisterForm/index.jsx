import React, { useState, useRef } from 'react'
import { Button, Flex, Input, Select } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import EmailVerify from '../EmailVerify'
import PhoneVerify from '../PhoneVerify'
import { useNavigate } from 'react-router-dom'
import './select.less'
import { useTranslation } from 'react-i18next'
// import icon from '@/assets/icon/light/logo_light.svg'
import style from './index.module.less'
import icon from '@/assets/icon/dark/logIcon.svg'
import { sendVerifyCode } from '@/service'
import { showSuccess, showError, showWarning } from '@/common/message'
import { validateEmail, validatePhone } from '@/common/regex'
// 当前组件状态 1登录表单，2
// const [currentStatus, setCurrentStatus] = useState(1)
// 注册方式-默认邮箱注册

const tabList = [
  {
    id: 1,
    label: 'login.email'
  },
  {
    id: 2,
    label: 'login.phone'
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
  const { t } = useTranslation()
  // 邮箱号
  const emailRef = useRef()
  // 国家代号
  const [areaCode, setAreaCode] = useState(86)
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
    // 邮箱号校验
    const checkRes = validateEmail(req.account)
    if (!checkRes) {
      return showWarning('Please enter a valid email')
    }
    try {
      await sendVerifyCode(req)
      showSuccess('send verifyCode success')
      toggleShowVerify(true)
    } catch (err) {
      return showError(err.msg)
    }
  }

  // 发送手机号验证码
  const sendPhoneCodeHandler = async () => {
    // 校验手机号
    const resStatus = validatePhone(phoneRef?.current?.value)
    if (!resStatus) {
      return showWarning('Please enter a valid phone number')
    }

    const req = {
      account_type: 'phone',
      verify_type: 'Register',
      account: areaCode + '-' + phoneRef.current?.value
    }

    try {
      await sendVerifyCode(req)
      showSuccess('send verifyCode success')
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
        phone={areaCode + '-' + phoneRef.current?.value}
      />
      <div className={style.registerBox}>
        <header>
          <img src={icon} />
          {t('login.registerHeader')}
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
              {t(item.label)}
            </span>
          ))}
        </div>
        {/* 邮箱注册 */}
        <div
          className={style.emailForm}
          style={{ display: checkTab === 1 ? 'block' : 'none' }}
        >
          <input placeholder={t('login.emailToast')} ref={emailRef} />
          <button
            onClick={() => {
              sendVerifyCodeHandler()
            }}
          >
            {t('login.next')}
          </button>
        </div>
        {/* 手机号注册 */}
        <div
          className={style.telForm}
          style={{ display: checkTab === 2 ? 'block' : 'none' }}
        >
          <Flex>
            <Select
              options={options}
              defaultValue={areaCode}
              onChange={(val) => {
                setAreaCode(val)
              }}
            />
            <input
              placeholder={t('login.phoneToast')}
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
            {t('login.next')}
          </button>
        </div>
        {/* 登录 */}
        <div className={style.login}>
          {t('login.loginTip')}
          <span
            onClick={() => {
              navigate('/login')
            }}
          >
            {t('login.login')}
          </span>
        </div>
        {/* 分割线 */}
        <div className={style.line} />
        {/* 协议链接 */}
        <div className={style.protocol}>
          {t('login.readAndAgree')}
          <span> {t('login.agreement')} </span>
          {t('login.and')}
          <span> {t('login.policy')} </span>
        </div>
      </div>
    </>
  )
}
