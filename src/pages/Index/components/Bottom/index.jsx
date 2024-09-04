import React from 'react'
import DownLoadGroup from '@/components/DownloadGroup'
import style from './index.module.less'
import pcImg from '@/assets/image/pc.svg'
import { useTranslation } from 'react-i18next'

export default function Bottom() {
  const { t } = useTranslation()

  return (
    <div className={style.bottomContainer}>
      <h1>{t('bottom.title')}</h1>
      <span>{t('bottom.description')}</span>
      <DownLoadGroup />
      <div>
        <img src={pcImg} width={1440} />
      </div>
    </div>
  )
}
