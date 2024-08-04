import React, { useState, useRef } from 'react'
import style from './index.module.less'
import iconArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'
import eyeOpen from '@/assets/icon/dark/icon-eye-line-open.svg'
import eyeClose from '@/assets/icon/dark/icon-eye-line-close.svg'
import { useNavigate } from 'react-router-dom'
import { showError, showWarning } from '@/common/message'
import { setAssetsPassword } from '@/service'
import { useUserStore } from '@/stores'

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

  const { userInfo } = useUserStore()
  const togglePassword = () => {
    setPasswordStatus(passwordStatus === 0 ? 1 : 0)
  }

  const toggleNewPassword = () => {
    setNewPasswordStatus(newPasswordStatus === 0 ? 1 : 0)
  }

  const setAssetsPasswordHandler = async () => {
    // navigate('/index')
    if (passwordInputRef.current.value !== newPasswordInputRef.current.value) {
      showWarning('两次输入密码不一致')
    }
    const req = {
      account_type: type || 'email',
      account: account,
      code: verifyCode,
      commercial_id: userInfo.commercial_id,
      password: passwordInputRef.current?.value
    }
    console.log(req)
    try {
      await setAssetsPassword(req)
    } catch (err) {
      showError('设置资金密码失败，请重试')
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
          placeholder="请设置6位数资金密码"
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
          placeholder="请重复输入资金密码"
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
        <button onClick={setAssetsPasswordHandler}>完成</button>
      </div>
    </div>
  )
}
