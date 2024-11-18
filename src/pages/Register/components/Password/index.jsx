import React, { useState, useRef } from 'react'
import style from './index.module.less'
import iconArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'
import eyeOpen from '@/assets/icon/dark/icon-eye-line-open.svg'
import eyeClose from '@/assets/icon/dark/icon-eye-line-close.svg'
import { useNavigate } from 'react-router-dom'
import { showError, showSuccess, showWarning } from '@/common/message'
import { register } from '@/service'
import { validatePassword } from '@/common/regex'
import { useTranslation } from 'react-i18next'
export default function Password({
  account,
  verifyCode,
  showPassword,
  toggleShowPassword,
  type
}) {
  const [passwordStatus, setPasswordStatus] = useState(0)
  const [newPasswordStatus, setNewPasswordStatus] = useState(0)
  const passwordInputRef = useRef()
  const newPasswordInputRef = useRef()

  const navigate = useNavigate()
  const { t } = useTranslation()
  const togglePassword = () => {
    setPasswordStatus(passwordStatus === 0 ? 1 : 0)
  }

  const toggleNewPassword = () => {
    setNewPasswordStatus(newPasswordStatus === 0 ? 1 : 0)
  }

  const registerHandler = async () => {
    if (passwordInputRef.current.value !== newPasswordInputRef.current.value) {
      return showWarning('两次输入密码不一致')
    }
    const req = {
      account_type: type || 'email',
      account: account,
      verify_code: verifyCode,
      password: passwordInputRef.current?.value
    }
    // 校验登录密码
    const checkRes = validatePassword(req.password)
    console.log(checkRes)
    if (!checkRes) {
      return showWarning(
        '密码长度为8-16位，由大小写字母，数字，下划线和特殊字符组成。'
      )
    }

    try {
      await register(req)
      showSuccess('注册成功，去登录。')
      navigate('/login')
    } catch (err) {
      return showError(err?.msg)
    }
  }
  return (
    <div
      className={style.passwordContainer}
      style={{ display: showPassword ? 'block' : 'none' }}
    >
      <div
        className={style.back}
        onClick={() => {
          toggleShowPassword(false)
        }}
      >
        <img src={iconArrowLine} width={16} />
        <span> {t('toast.back')}</span>
      </div>

      <header>
        <h3> {t('toast.password.title')}</h3>
        <span>{t('toast.password.desc')}</span>
      </header>

      <div className={style.passwordBox}>
        <input
          className={style.input}
          ref={passwordInputRef}
          type={passwordStatus ? 'type' : 'password'}
          placeholder={t('toast.password.input1')}
        />
        <span>
          <img
            src={passwordStatus ? eyeClose : eyeOpen}
            onClick={togglePassword}
            width={16}
          />
        </span>
      </div>
      <div className={style.passwordBox}>
        <input
          className={style.input}
          ref={newPasswordInputRef}
          type={newPasswordStatus ? 'type' : 'password'}
          placeholder={t('toast.password.input2')}
        />
        <span>
          <img
            src={newPasswordStatus ? eyeClose : eyeOpen}
            onClick={toggleNewPassword}
            width={16}
          />
        </span>
      </div>
      <div>
        <button className={style.btn} onClick={registerHandler}>
          {t('toast.confirm')}
        </button>
      </div>
    </div>
  )
}
