import React, { useState, useRef } from 'react'
import style from './index.module.less'
import iconArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'
import eyeOpen from '@/assets/icon/dark/icon-eye-line-open.svg'
import eyeClose from '@/assets/icon/dark/icon-eye-line-close.svg'
import BindGoogleToast from '../BindGoogleToast'
import { Flex } from 'antd'
import { verifyAccountInfo } from '@/service'
import { useUserStore } from '@/stores'
import { showWarning } from '@/common/message'
import '@/assets/css/public.css'

export default function LoginPswToast({ status, setStatus }) {
  const { userInfo } = useUserStore()
  // 确认状态
  const [active, setActive] = useState(false)
  const [googleStatus, setGoogleStatus] = useState(false)
  // 密码状态
  const [passwordStatus, setPasswordStatus] = useState(false)
  const passwordInputRef = useRef()

  const togglePassword = () => {
    setPasswordStatus(!passwordStatus)
  }

  // 检查密码
  const checkLoginPassword = async () => {
    const req = {
      password: passwordInputRef.current?.value || '',
      id: userInfo.commercial_id
    }
    try {
      await verifyAccountInfo(req)
      setGoogleStatus(true)
    } catch {
      showWarning('密码输入错误，请重试。')
    }
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
      <Flex
        onClick={() => {
          setStatus(false)
        }}
      >
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
          placeholder="请输入六位登录密码"
          onKeyUp={(e) => {
            setActive(e.target.value ? true : false)
          }}
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
          onClick={checkLoginPassword}
          className={active ? 'activeBtn' : ''}
        >
          确认
        </button>
      </div>
    </div>
  )
}
