import React, { useRef, useState } from 'react'
import style from './index.module.less'
import iconArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'
import { Flex } from 'antd'
import { showError, showWarning } from '@/common/message'
import Password from '../Password'
import { toggleFocus } from '@/common/method'
import { codeComputed } from '@/common/method'
import { useTranslation } from 'react-i18next'

export default function EmailVerify({
  showVerify,
  toggleShowVerify,
  email,
  sendVerifyCodeHandler
}) {
  const inputRefs = useRef([])
  const [showPassword, setShowPassword] = useState(false)
  const { t } = useTranslation()
  //
  const toggleShowPassword = (status) => {
    const data = codeComputed(inputRefs)
    if (data.length < 6) {
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
          <span>{t('toast.back')}</span>
        </div>
        <div className={style.email}>
          <header>
            <h3>{t('toast.veryCode.title')}</h3>
            <span>
              {t('toast.veryCode.emailDesc')} {email}
              <br />
              {t('toast.veryCode.emailDesc2')}
            </span>
          </header>
          <div>
            <Flex className={style.EmailInput}>
              {Array(6)
                .fill(null)
                .map((item, index) => (
                  <input
                    className={style.input}
                    type="text"
                    key={index}
                    maxLength={1}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onKeyUp={(event) => toggleFocus(inputRefs, event, index)}
                  />
                ))}
            </Flex>
            <div className={style.send} onClick={sendVerifyCodeHandler}>
              {t('toast.veryCode.Resend')}
            </div>
            <button
              className={style.btn}
              onClick={() => {
                toggleShowPassword(true)
              }}
            >
              {t('toast.veryCode.next')}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
