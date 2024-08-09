import React, { useRef, useState } from 'react'
import style from './index.module.less'
import iconArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'
import { Flex } from 'antd'
import { showError, showWarning } from '@/common/message'
import Password from '../Password'
import { toggleFocus } from '@/common/method'

export default function EmailVerify({
  showVerify,
  toggleShowVerify,
  email,
  sendVerifyCodeHandler
}) {
  const inputRefs = useRef([])
  const [showPassword, setShowPassword] = useState(false)

  //
  const toggleShowPassword = (status) => {
    const code = getEmailVerifyCode()
    if (code.length < 6) {
      return showWarning('验证码长度不足')
    }
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
                    onKeyUp={(event) => toggleFocus(inputRefs, event, index)}
                  />
                ))}
            </Flex>
            <div className={style.send} onClick={sendVerifyCodeHandler}>
              重新发送
            </div>
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
