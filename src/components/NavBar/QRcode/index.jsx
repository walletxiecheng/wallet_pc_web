import React from 'react'
import style from './index.module.less'
import downLoadQRcode from '@/assets/image/downLoadQrcode.png'
import { useTranslation } from 'react-i18next'

export default function QRcord({ setShowQRcode }) {
  const { t } = useTranslation()
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
      <div className={style.title}>{t('nav.Download Token 17 App')}</div>
    </div>
  )
}
