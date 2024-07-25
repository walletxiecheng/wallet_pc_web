import React from 'react'
import style from './index.module.less'
import iconArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'

export default function Verify() {
  return (
    <div className={style.verifyContainer}>
      <div className={back}>
        <img src={iconArrowLine} width={16} />
        <span>返回</span>
      </div>
    </div>
  )
}
