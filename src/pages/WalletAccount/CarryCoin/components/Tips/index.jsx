import React from 'react'
import style from './index.module.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { useNavigate } from 'react-router-dom'

export default function Tips({ toggleToast, tips }) {
  // 继续交易
  const next = () => {
    closeBindToast()
    // 判断是否有密码
    //没有密码直接调接口
  }

  const navigate = useNavigate()
  return (
    <div
      className={style.bindContainer}
      style={{ display: tips ? 'block' : 'none' }}
    >
      <div className={style.bindCard}>
        <header>
          <span>提醒</span>
          <img
            src={closeIcon}
            onClick={() => {
              toggleToast(false)
            }}
          />
        </header>
        <div className={style.content}>
          当前账户并未绑定资金密码或谷歌验证码，为保障您的账户安全请同时绑定资金密码和谷歌验证码之后在交易！
        </div>
        <div className={style.buttonGroup}>
          <button
            className={style.setting}
            onClick={() => {
              navigate('/personal')
            }}
          >
            去设置
          </button>
        </div>
      </div>
    </div>
  )
}
