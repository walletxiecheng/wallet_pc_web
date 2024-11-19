import React, { useState } from 'react'
import '@/assets/css/toast.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { useRef } from 'react'
import { sendVerifyCode } from '@/service'
import { showError, showSuccess, showWarning } from '@/common/message'
import EmailVerity from './EmailVerify'
import '@/assets/css/public.css'
import { validateEmail } from '@/common/regex'

export default function BindEmail({ showEmail, toggleEmail, email }) {
  const emailInputRef = useRef()

  const [isSend, setIsSend] = useState(false)
  const [showVerify, setShowVerify] = useState(false)
  const toggleShowVerify = (status) => {
    setShowVerify(status)
  }
  // 获取验证码
  const getVerifyCode = async () => {
    const req = {
      account_type: 'email',
      verify_type: 'BindingEmailOrPhone',
      account: emailInputRef.current.value
    }
    if (!validateEmail(req.account)) {
      return showWarning('Please enter a valid email')
    }
    try {
      await sendVerifyCode(req)
      showSuccess('发送验证码成功')
      toggleEmail(false)
      toggleShowVerify(true)
    } catch (err) {
      return showError(err.msg)
    }
  }
  return (
    <>
      <EmailVerity
        email={emailInputRef?.current?.value || ''}
        showVerify={showVerify}
        toggleShowVerify={toggleShowVerify}
        getVerifyCode={getVerifyCode}
      />
      <div
        className="toast-container"
        style={{ display: showEmail ? 'flex' : 'none' }}
      >
        <header
          className="close-button"
          onClick={() => {
            toggleEmail(false)
          }}
        >
          <img src={closeIcon} width={16} />
          关闭
        </header>
        <div className="top">
          <div className="title">{email ? '换绑邮箱' : '绑定邮箱'}</div>
          <div className="description">
            {email
              ? '更换绑定的邮箱地址'
              : '绑定您的常用邮箱更便于接受资金信息'}
          </div>
        </div>
        <div className="main">
          <input
            type="text"
            placeholder="请输入邮箱"
            ref={emailInputRef}
            defaultValue={email}
            onInput={(e) => {
              setIsSend(e.target.value !== '' ? true : false)
            }}
          />
          <button onClick={getVerifyCode} className={isSend ? 'activeBtn' : ''}>
            获取验证码
          </button>
        </div>
      </div>
    </>
  )
}
