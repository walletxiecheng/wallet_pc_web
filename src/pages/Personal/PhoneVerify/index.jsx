import React, { useRef, useState } from 'react'
import style from './index.module.less'
import iconArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'
import { Flex } from 'antd'
import Password from '../Password'
import '@/assets/css/public.css'

export default function PhoneVerify({ showTel, toggleShowTel, phone }) {
  const phoneInputRef = useRef()
  const [active, setActive] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  //是否显示密码
  const toggleShowPassword = (status) => {
    setShowPassword(status)
  }

  // 邮箱验证码

  return (
    <>
      <Password
        account={phone}
        showPassword={showPassword}
        toggleShowPassword={toggleShowPassword}
        verifyCode={phoneInputRef?.current?.value}
        type="phone"
      />
      <div
        className={style.verifyContainer}
        style={{ display: showTel ? 'block' : 'none' }}
      >
        <div
          className={style.back}
          onClick={() => {
            toggleShowTel(false)
          }}
        >
          <img src={iconArrowLine} width={16} />
          <span>返回</span>
        </div>
        <div className={style.phone}>
          <header>
            <h3>请输入验证码</h3>
            <span>
              请输入发送至 +{phone} 的验证码
              <br />
            </span>
          </header>
          <div>
            <Flex>
              <input
                placeholder="请输入"
                ref={phoneInputRef}
                onKeyUp={(e) => {
                  if (e.target.value) {
                    setActive(true)
                  } else {
                    setActive(false)
                  }
                }}
              />
            </Flex>
            <div className={style.send}>重新发送</div>
            <button
              className={active ? 'activeBtn' : 'unActiveBtn'}
              onClick={() => {
                toggleShowPassword(true)
              }}
            >
              下一步
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
