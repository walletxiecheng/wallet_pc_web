import React, { useState } from 'react'
import style from './index.module.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { showLoading } from '@/common/message'
export default function BindToast({ bindToast, closeBindToast }) {
  // 继续交易
  const next = () => {
    closeBindToast()
    // 判断是否有密码
    //没有密码直接调接口
  }
  return (
    <div
      className={style.bindContainer}
      style={{ display: bindToast ? 'block' : 'none' }}
    >
      <div className={style.bindCard}>
        <header>
          <span>提醒</span>
          <img src={closeIcon} onClick={closeBindToast} />
        </header>
        <div className={style.content}>
          当前账户并未绑定资金密码，为保障您的账户安全请绑定资金密码后在交易！
        </div>
        <div className={style.buttonGroup}>
          <button className={style.setting}>去设置</button>
          <button className={style.continue} onClick={next}>
            了解风险，继续交易
          </button>
        </div>
      </div>
    </div>
  )
}
