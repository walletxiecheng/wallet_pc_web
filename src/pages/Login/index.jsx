import React, { useState } from 'react'
import style from './index.module.less'
import LoginForm from './components/LoginForm'
import ResetPswForm from './components/ResetPswForm'
import Verify from './components/Verify'
import Password from './components/Password'

export default function Login() {
  const [showLogin, setShowLogin] = useState(true)
  const [status, setStatus] = useState(1)

  // 登录组件显示或者隐藏
  const toggleShowLogin = () => {
    setShowLogin(!showLogin)
  }
  // 更改状态
  const toggleStatus = (status) => {
    setStatus(status)
  }

  return (
    <div className={style.loginContainer}>
      {/* 登录框 */}
      {showLogin && (
        <LoginForm
          toggleShowLogin={toggleShowLogin}
          toggleStatus={toggleStatus}
        />
      )}
      {!showLogin && status === 1 && (
        <ResetPswForm
          toggleShowLogin={toggleShowLogin}
          toggleStatus={toggleStatus}
        />
      )}
      {!showLogin && status === 2 && <Verify toggleStatus={toggleStatus} />}
    </div>
  )
}
