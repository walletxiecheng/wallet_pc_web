import React, { useState } from 'react'
import style from './index.module.less'
import { Flex, Select } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import icon from '@/assets/icon/dark/logIcon.svg'
import eyeOpen from '@/assets/icon/dark/icon-eye-line-open.svg'
import eyeClose from '@/assets/icon/dark/icon-eye-line-close.svg'

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

  const togglePassword = () => {
    setPasswordStatus(passwordStatus === 0 ? 1 : 0)
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
      {/* 邮箱注册 */}
      <div
        className={style.emailForm}
        style={{ display: checkTab === 1 ? 'block' : 'none' }}
      >
        <div className={style.inputBox}>
          <input placeholder="请输入邮箱" name="email" />
        </div>
        <div className={style.inputBox} style={{ marginTop: '10px' }}>
          <input
            type={passwordStatus ? 'type' : 'password'}
            placeholder="请输入密码"
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
        <div className={style.link}>忘记密码？</div>
        <button>下一步</button>
      </div>
      {/* 手机号注册 */}
      <div
        className={style.telForm}
        style={{ display: checkTab === 2 ? 'block' : 'none' }}
      >
        <Flex>
          <Select options={options} />
          <div className={style.inputBox}>
            <input placeholder="手机号" style={{ width: '264px' }} />
          </div>
        </Flex>
        <div className={style.inputBox} style={{ marginTop: '10px' }}>
          <input
            type={passwordStatus ? 'type' : 'password'}
            placeholder="请输入密码"
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
        <button>下一步</button>
      </div>
      <div className={style.fun}>
        <span>验证码登录</span>|<span>新用户注册</span>
      </div>
    </div>
  )
}
