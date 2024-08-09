import React from 'react'
import style from './index.module.less'
import LoginForm from './components/LoginForm'

export default function Login() {
  return (
    <div className={style.loginContainer}>
      {/* 登录框 */}
      <LoginForm />
    </div>
  )
}
