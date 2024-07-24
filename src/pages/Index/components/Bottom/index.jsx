import React from 'react'
import DownLoadGroup from '@/components/DownloadGroup'
import style from './index.module.less'
import pcImg from '@/assets/image/pc.png'

export default function Bottom() {
  return (
    <div className={style.bottomContainer}>
      <h1>随时随地开启安全交易</h1>
      <span>全面支持Web、iOS、Android，即刻下载开启交易新时代</span>
      <DownLoadGroup />
      <div>
        <img src={pcImg} width={1440} />
      </div>
    </div>
  )
}
