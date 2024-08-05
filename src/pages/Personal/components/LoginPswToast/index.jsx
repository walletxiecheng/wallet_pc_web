import React, { useState, useRef } from 'react'
import style from './index.module.less'
import iconArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'
import eyeOpen from '@/assets/icon/dark/icon-eye-line-open.svg'
import eyeClose from '@/assets/icon/dark/icon-eye-line-close.svg'
import BindGoogleToast from '../BindGoogleToast'
import { Flex } from 'antd'

export default function LoginPswToast({ status, setStatus }) {
  const [googleStatus, setGoogleStatus] = useState(false)
  // 密码状态
  const [passwordStatus, setPasswordStatus] = useState(false)
  const passwordInputRef = useRef()

  const togglePassword = () => {
    setPasswordStatus(!passwordStatus)
  }

  return (
    <div
      className={style.passwordContainer}
      style={{ display: status ? 'block' : 'none' }}
    >
      <BindGoogleToast
        googleStatus={googleStatus}
        setGoogleStatus={setGoogleStatus}
      />
      <Flex>
        <img src={iconArrowLine} width={16} />
        <span>关闭</span>
      </Flex>

      <header>
        <h3>身份认证</h3>
        <span>请输入账户登录密码</span>
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

      <div>
        <button
          onClick={() => {
            setGoogleStatus(true)
          }}
        >
          确认
        </button>
      </div>
    </div>
  )
}
