import React from 'react'
import style from './index.module.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'

export default function BindBaseTips({ showBindTips, toggleTipsStatus }) {
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
      <div>绑定邮箱即可完成基础认证</div>
      <div className={style.buttonGroup}>
        <button className={style.bind} onClick={() => {}}>
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
