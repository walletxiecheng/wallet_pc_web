import React, { useState } from 'react'
import style from './index.module.less'
import { Flex, Select } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import icon from '@/assets/icon/dark/logIcon.svg'
import eyeOpen from '@/assets/icon/dark/icon-eye-line-open.svg'
import eyeClose from '@/assets/icon/dark/icon-eye-line-close.svg'
import { useRef } from 'react'
import { login } from '@/service'
import { showError, showSuccess } from '@/common/message'
import { useTokenStore, useUserStore } from '@/stores'
import { useNavigate } from 'react-router-dom'

const tabList = [
  {
    id: 1,
    label: '邮箱'
  },
  {
    id: 2,
    label: '手机号'
  }
]

const options = [
  {
    value: 1,
    label: (
      <>
        <CheckCircleFilled />
        +852
      </>
    )
  },
  {
    value: 2,
    label: (
      <>
        <CheckCircleFilled />
        +812
      </>
    )
  }
]

export default function LoginForm() {
  // 当前选中tab
  const [checkTab, setCheckTab] = useState(1)
  // 密码可见状态 0不可见/1可见
  const [passwordStatus, setPasswordStatus] = useState(0)
  // 邮箱
  const emailInputRef = useRef(null)
  const emailPasswordRef = useRef(null)

  // 手机号
  const phoneInputRef = useRef(null)
  const phonePasswordRef = useRef(null)

  const navigate = useNavigate()

  // 设置token
  const { setToken } = useTokenStore()
  // 设置用户信息
  const { setUserInfo } = useUserStore()

  // 登录
  const loginHandler = async (type) => {
    const req = {
      account_type: type,
      account:
        type == 'email'
          ? emailInputRef.current.value
          : phoneInputRef.current.value,
      password:
        type === 'email'
          ? emailPasswordRef.current.value
          : phonePasswordRef.current.value
    }

    if (!req.account || !req.password) {
      return showError('用户名或者密码不能为空。')
    }
    const res = await login(req)
    if (res.code !== 0) {
      return showError('用户名或密码错误')
    }

    setToken(res.data.token)
    setUserInfo(res.data)
    showSuccess('登录成功')
    navigate('/index')
  }
  // 手机号注册

  return (
    <div className={style.loginBox}>
      <header>
        <img src={icon} />
        欢迎登录Token17
      </header>
      <div className={style.tabs}>
        {tabList.map((item) => (
          <span
            key={item.id}
            className={checkTab === item.id ? style.active : ''}
            onClick={() => {
              setCheckTab(item.id)
            }}
          >
            {item.label}
          </span>
        ))}
      </div>
      {/* 邮箱注册 */}
      <div
        className={style.emailForm}
        style={{ display: checkTab === 1 ? 'block' : 'none' }}
      >
        <div className={style.inputBox}>
          <input placeholder="请输入邮箱" ref={emailInputRef} />
        </div>
        <div className={style.inputBox} style={{ marginTop: '10px' }}>
          <input
            type={passwordStatus ? 'type' : 'password'}
            placeholder="请输入密码"
            ref={emailPasswordRef}
          />
          <span>
            <img
              src={passwordStatus ? eyeClose : eyeOpen}
              width={16}
              onClick={() => {
                setPasswordStatus(!passwordStatus)
              }}
            />
          </span>
        </div>
        <div
          className={style.link}
          onClick={() => {
            navigate('/reset')
          }}
        >
          忘记密码？
        </div>
        <button
          onClick={() => {
            loginHandler('email')
          }}
        >
          下一步
        </button>
      </div>
      {/* 手机号注册 */}
      <div
        className={style.telForm}
        style={{ display: checkTab === 2 ? 'block' : 'none' }}
      >
        <Flex>
          <Select options={options} />
          <div className={style.inputBox}>
            <input
              placeholder="手机号"
              style={{ width: '264px' }}
              ref={phoneInputRef}
            />
          </div>
        </Flex>
        <div className={style.inputBox} style={{ marginTop: '10px' }}>
          <input
            type={passwordStatus ? 'type' : 'password'}
            placeholder="请输入密码"
            ref={phonePasswordRef}
          />
          <span>
            <img
              src={passwordStatus ? eyeClose : eyeOpen}
              width={16}
              onClick={() => {
                setPasswordStatus(!passwordStatus)
              }}
            />
          </span>
        </div>
        <button
          onClick={() => {
            loginHandler('phone')
          }}
        >
          下一步
        </button>
      </div>
      <div className={style.fun}>
        <span>验证码登录</span>|<span>新用户注册</span>
      </div>
    </div>
  )
}
