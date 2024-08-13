import React from 'react'
import style from './index.module.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { useUserStore } from '@/stores'

export default function BindBaseTips({
  showBindTips,
  toggleTipsStatus,
  toggleEmail,
  togglePhone
}) {
  const { userInfo } = useUserStore()
  const email = userInfo?.email
  const check = () => {
    if (email) {
      togglePhone(true)
    } else {
      toggleEmail(true)
    }
    toggleTipsStatus(false)
  }

  return (
    <div
      className={style.toastContainer}
      style={{ display: showBindTips ? 'flex' : 'none' }}
    >
      <div className={style.header}>
        <div>提醒</div>
        <img
          src={closeIcon}
          width={20}
          onClick={() => {
            toggleTipsStatus(false)
          }}
        />
      </div>
      <div>绑定邮箱和手机号即可完成基础认证</div>
      <div className={style.buttonGroup}>
        <button className={style.bind} onClick={check}>
          绑定
        </button>
        <button
          className={style.cancel}
          onClick={() => {
            toggleTipsStatus(false)
          }}
        >
          取消
        </button>
      </div>
    </div>
  )
}
