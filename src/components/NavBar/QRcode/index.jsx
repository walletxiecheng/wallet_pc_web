import React from 'react'
import style from './index.module.less'
import downLoadQRcode from '@/assets/image/downLoadQrcode.png'

export default function QRcord({ setShowQRcode }) {
  return (
    <div
      onMouseOver={() => {
        setShowQRcode(true)
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setShowQRcode(false)
        }, 500)
      }}
      className={style.qrCOdeContainer}
    >
      <img width={100} src={downLoadQRcode} alt="" />
      <div className={style.title}>扫码下载 Token 17 App</div>
    </div>
  )
}
