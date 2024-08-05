import React, { useState } from 'react'
import style from './index.module.less'
import { Flex, Select } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import icon from '@/assets/icon/dark/logIcon.svg'
import eyeOpen from '@/assets/icon/dark/icon-eye-line-open.svg'
import eyeClose from '@/assets/icon/dark/icon-eye-line-close.svg'
import { useRef } from 'react'
import { login } from '@/service'
import { showError, showSuccess, showWarning } from '@/common/message'
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
    value: 853,
    label: (
      <>
        <CheckCircleFilled />
        +852
      </>
    )
  },
  {
    value: 812,
    label: (
      <>
        <CheckCircleFilled />
        +812
      </>
    )
  },
  {
    value: 86,
    label: (
      <>
        <CheckCircleFilled />
        +86
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

  // 区号
  const area = useRef()

  const navigate = useNavigate()
  // 设置token
  const { setToken } = useTokenStore()
  // 设置用户信息
  const { setUserInfo } = useUserStore()

  // 登录邮箱号
  const loginEmailHandler = async () => {
    const req = {
      account_type: 'email',
      account: emailInputRef.current.value,
      password: emailPasswordRef.current.value
    }

    if (!req.account || !req.password) {
      return showWarning('邮箱号或者密码不能为空。')
    }

    try {
      const { data } = await login(req)
      setToken(data.token)
      setUserInfo(data)
      showSuccess('登录成功')
      navigate('/index')
    } catch (err) {
      return showError('邮箱号或密码错误')
    }
  }
  // 手机号登录
  const loginPhoneHandler = async () => {
    const req = {
      account_type: 'phone',
      account: phoneInputRef.current.value,
      password: phonePasswordRef.current.value
    }
    try {
      await login(req)
      setToken(res.data.token)
      setUserInfo(res.data)
      showSuccess('登录成功')
      navigate('/index')
    } catch (err) {
      return showError('手机号或密码错误')
    }
  }
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
      {/* 邮箱登录 */}
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
        <button onClick={loginEmailHandler}>下一步</button>
      </div>

      {/* 手机号注册 */}
      <div
        className={style.telForm}
        style={{ display: checkTab === 2 ? 'block' : 'none' }}
      >
        <Flex>
          <Select options={options} defaultValue={86} ref={area} />
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
        <button onClick={loginPhoneHandler}>下一步</button>
      </div>
      <div className={style.fun}>
        <span>验证码登录</span>|<span>新用户注册</span>
      </div>
    </div>
  )
}
