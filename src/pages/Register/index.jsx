import RegisterForm from './components/RegisterForm'
import Verify from './components/EmailVerify'
import style from './index.module.less'
import Password from './components/Password'
import { useState } from 'react'

export default function Register() {
  return (
    <div className={style.registerContainer}>
      <RegisterForm />
    </div>
  )
}
