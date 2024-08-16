// 身份验证组件
import React, { useState, useRef } from 'react'
import { Flex, Select } from 'antd'
import EmailVerify from '../../EmailVerify'
import PhoneVerify from '../../PhoneVerify'
import { CheckCircleFilled } from '@ant-design/icons'
import style from './index.module.less'
import { sendVerifyCode } from '@/service'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { showSuccess, showError, showWarning } from '@/common/message'
import '@/assets/css/public.css'
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

export default function Identity({ toggleShowIdentity, showIdentity }) {
  // 当前table
  const [checkTab, setCheckTab] = useState(1)
  const [showVerify, setShowVerify] = useState(false)
  const [showTel, setShowTel] = useState(false)

  //
  const [phoneActive, setPhoneActive] = useState(false)
  const [emailActive, setEmailActive] = useState(false)

  // 邮箱号
  const emailRef = useRef()
  // 国家代号
  const [area, setArea] = useState(86)
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
      verify_type: 'SetFundPassword',
      account: emailRef.current?.value
    }

    if (!validateEmail(req.account)) {
      return showWarning('Please enter a valid email')
    }
    try {
      await sendVerifyCode(req)
      showSuccess('success')
      toggleShowVerify(true)
    } catch (err) {
      showError(err?.msg)
    }
  }

  // 发送手机号验证码
  const sendPhoneCodeHandler = async () => {
    if (!validatePhone(phoneRef?.current?.value)) {
      return showWarning('Please enter a valid phone number')
    }
    const req = {
      account_type: 'phone',
      verify_type: 'SetFundPassword',
      account: area + '-' + phoneRef?.current?.value
    }

    try {
      await sendVerifyCode(req)
      showSuccess('success')
      toggleShowTel(true)
    } catch (err) {
      showError(err?.msg)
    }
  }

  return (
    <>
      <EmailVerify
        showVerify={showVerify}
        toggleShowVerify={toggleShowVerify}
        email={emailRef?.current?.value}
        sendVerifyCodeHandler={sendVerifyCodeHandler}
      />

      <PhoneVerify
        showTel={showTel}
        toggleShowTel={toggleShowTel}
        phone={area + '-' + phoneRef.current?.value}
      />

      <div
        className={style.registerBox}
        style={{ display: showIdentity ? 'block' : 'none' }}
      >
        <Flex
          onClick={() => {
            toggleShowIdentity(false)
          }}
        >
          <img src={closeIcon} width={16} />
          <span>关闭</span>
        </Flex>
        <div className={style.title}>
          <header>身份验证</header>
          <div className={style.desc}>请验证您所绑定的邮箱或手机号</div>
        </div>
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
          <input
            placeholder="请输入邮箱"
            ref={emailRef}
            onKeyUp={(e) => {
              if (e.target.value) {
                setEmailActive(true)
              } else {
                setEmailActive(false)
              }
            }}
          />
          <button
            className={emailActive ? 'activeBtn' : 'unActiveBtn'}
            onClick={() => {
              sendVerifyCodeHandler()
            }}
          >
            获取验证码
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
              onChange={(val) => {
                setArea(val)
              }}
              defaultValue={86}
            />
            <input
              placeholder="手机号"
              style={{ width: '264px' }}
              ref={phoneRef}
              onKeyUp={(e) => {
                if (e.target.value) {
                  setPhoneActive(true)
                } else {
                  setPhoneActive(false)
                }
              }}
            />
          </Flex>
          <button
            // className={style.verifyBtn}
            className={phoneActive ? 'activeBtn' : 'unActiveBtn'}
            onClick={() => {
              // 发送手机验证码
              sendPhoneCodeHandler()
            }}
          >
            获取验证码
          </button>
        </div>
      </div>
    </>
  )
}
