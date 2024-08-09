import React, { useState, useRef } from 'react'
import style from './index.module.less'
import { Flex, Select } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import { showError, showSuccess } from '@/common/message'
import { sendVerifyCode } from '@/service'
import EmailVerify from './EmailVerify'

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
export default function Reset() {
  const [checkTab, setCheckTab] = useState(1)
  const [showEmail, setShowEmail] = useState(false)
  const [showPhone, setShowPhone] = useState(false)

  const emailRef = useRef()
  const phoneRef = useRef()

  // 发送邮箱验证码
  const sendEmailCodeHandler = async () => {
    const req = {
      account_type: 'email',
      verify_type: 'ResetPassword',
      account: emailRef.current?.value
    }
    try {
      await sendVerifyCode(req)
      setShowEmail(true)
      return showSuccess('发送验证码成功')
    } catch (err) {
      return showError('邮箱格式错误，请重新输入')
    }
  }

  // 发送手机号验证码
  const sendPhoneCodeHandler = async () => {
    // const req = {
    //   account_type: 'phone',
    //   verify_type: 'ResetPassword',
    //   account: phoneRef.current?.value
    // }
    if (!phoneRef?.current?.value) {
      return showWarning('请输入手机号')
    }
    setShowPhone(true)
  }

  return (
    <div className={style.resetContainer}>
      <EmailVerify
        showVerify={showEmail}
        setShowEmail={setShowEmail}
        email={emailRef?.current?.value || ''}
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
            <Select options={options} />
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
