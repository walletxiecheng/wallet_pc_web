import React, { useRef, useState } from 'react'
import style from './index.module.less'
import iconArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'
import { Flex } from 'antd'
import { showError } from '@/common/message'
import Password from '../Password'
export default function EmailVerify({ showVerify, toggleShowVerify, email }) {
  const inputRefs = useRef([])
  const [showPassword, setShowPassword] = useState(false)
  // 切换焦点
  const toggleFocus = (e, index) => {
    if (inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus()
    }
  }

  //
  const toggleShowPassword = (status) => {
    setShowPassword(status)
  }

  // 邮箱验证码

  const getEmailVerifyCode = () => {
    const verifyCode = []
    inputRefs.current.map((current, index) => {
      if (current.value === '') {
        return
      }
      verifyCode[index] = current.value
    })
    return verifyCode.join('')
  }
  return (
    <>
      <Password
        account={email}
        showPassword={showPassword}
        toggleShowPassword={toggleShowPassword}
        verifyCode={getEmailVerifyCode()}
      />
      <div
        className={style.verifyContainer}
        style={{ display: showVerify ? 'block' : 'none' }}
      >
        <div
          className={style.back}
          onClick={() => {
            toggleShowVerify(false)
          }}
        >
          <img src={iconArrowLine} width={16} />
          <span>返回</span>
        </div>
        <div className={style.email}>
          <header>
            <h3>请输入验证码</h3>
            <span>
              验证码发送至 {email}
              <br />
              邮箱验证码可能判定为垃圾邮件，请注意查收
            </span>
          </header>
          <div>
            <Flex className={style.EmailInput}>
              {Array(6)
                .fill(null)
                .map((item, index) => (
                  <input
                    type="text"
                    key={index}
                    maxLength={1}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onInput={(event) => toggleFocus(event, index)}
                  />
                ))}
            </Flex>
            <div className={style.send}>重新发送</div>
            <button
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
