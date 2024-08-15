import React from 'react'
import style from './index.module.less'
import waitIcon from '@/assets/icon/dark/icon-history-waiting-line.svg'

export default function StatusTag() {
  return (
    <div className={style.statusWait}>
      <img src={waitIcon} />
      待审核
      {/* 已通过 */}
    </div>
  )
}
