import React from 'react'
import style from './index.module.less'

export default function Card({ avatar, title, content }) {
  return (
    <div className={style.cardContainer}>
      <header>
        <img src={avatar} width={24} />
        {title}
      </header>
      <div className={style.content}>{content}</div>
    </div>
  )
}
