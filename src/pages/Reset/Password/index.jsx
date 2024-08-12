import React, { useState, useRef } from 'react'
import style from './index.module.less'
import iconArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'
import eyeOpen from '@/assets/icon/dark/icon-eye-line-open.svg'
import eyeClose from '@/assets/icon/dark/icon-eye-line-close.svg'
import { useNavigate } from 'react-router-dom'
import { showError, showSuccess, showWarning } from '@/common/message'
import { resetPassword } from '@/service'

export default function Password({
  account,
  verifyCode,
  showPassword,
  toggleShowPassword,
  type
}) {
  const [passwordStatus, setPasswordStatus] = useState(0)
  const [newPasswordStatus, setNewPasswordStatus] = useState(0)
  const passwordInputRef = useRef()
  const newPasswordInputRef = useRef()

  const navigate = useNavigate()

  const togglePassword = () => {
    setPasswordStatus(passwordStatus === 0 ? 1 : 0)
  }

  const toggleNewPassword = () => {
    setNewPasswordStatus(newPasswordStatus === 0 ? 1 : 0)
  }

  const resetHandler = async () => {
    console.log(account, verifyCode, showPassword)
    if (passwordInputRef.current.value !== newPasswordInputRef.current.value) {
      showWarning('两次输入密码不一致')
    }
    const req = {
      account_type: type || 'email',
      account: account,
      verify_code: verifyCode,
      password: passwordInputRef.current?.value
    }
    try {
      await resetPassword(req)
      showSuccess('修改密码成功')
      navigate('/login')
    } catch (err) {
      return showError(err?.msg)
    }
  }
  return (
    <div
      className={style.passwordContainer}
      style={{ display: showPassword ? 'block' : 'none' }}
    >
      <div
        className={style.back}
        onClick={() => {
          toggleShowPassword(false)
        }}
      >
        <img src={iconArrowLine} width={16} />
        <span>返回</span>
      </div>

      <header>
        <h3>设置密码</h3>
        <span>请为您的账户设置登录密码</span>
      </header>

      <div className={style.passwordBox}>
        <input
          ref={passwordInputRef}
          type={passwordStatus ? 'type' : 'password'}
          placeholder="请输入登录密码"
        />
        <span>
          <img
            src={passwordStatus ? eyeClose : eyeOpen}
            onClick={togglePassword}
            width={16}
          />
        </span>
      </div>
      <div className={style.passwordBox}>
        <input
          ref={newPasswordInputRef}
          type={newPasswordStatus ? 'type' : 'password'}
          placeholder="请重复输入密码"
        />
        <span>
          <img
            src={newPasswordStatus ? eyeClose : eyeOpen}
            onClick={toggleNewPassword}
            width={16}
          />
        </span>
      </div>
      <div>
        <button onClick={resetHandler}>完成</button>
      </div>
    </div>
  )
}
