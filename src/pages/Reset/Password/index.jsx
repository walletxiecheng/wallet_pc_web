import React, { useState } from 'react'
import style from './index.module.less'
import iconArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'
import eyeOpen from '@/assets/icon/dark/icon-eye-line-open.svg'
import eyeClose from '@/assets/icon/dark/icon-eye-line-close.svg'
import { useNavigate } from 'react-router-dom'

export default function Password() {
  const [passwordStatus, setPasswordStatus] = useState(0)
  const [newPasswordStatus, setNewPasswordStatus] = useState(0)
  const navigate = useNavigate()

  const togglePassword = () => {
    setPasswordStatus(passwordStatus === 0 ? 1 : 0)
  }

  const toggleNewPassword = () => {
    setNewPasswordStatus(newPasswordStatus === 0 ? 1 : 0)
  }

  const login = () => {
    navigate('/index')
  }
  return (
    <div className={style.passwordContainer}>
      <div
        className={style.back}
        onClick={() => {
          toggleCurrentStatus(1)
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
          type={passwordStatus ? 'type' : 'password'}
          placeholder="请输入登录密码"
          name="password"
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
          type={newPasswordStatus ? 'type' : 'password'}
          placeholder="请重复输入密码"
          name="newPassword"
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
        <button onClick={login}>完成</button>
      </div>
    </div>
  )
}
