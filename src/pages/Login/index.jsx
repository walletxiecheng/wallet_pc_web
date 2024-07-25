import React from 'react'
import style from './index.module.less'
import LoginForm from './components/LoginForm'
import ResetPswForm from './components/ResetPswForm'

export default function Login() {
  return (
    <div className={style.loginContainer}>
      {/* 注册框 */}
      <LoginForm />
      <ResetPswForm />
    </div>
  )
}
