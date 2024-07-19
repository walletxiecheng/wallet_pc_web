import React from 'react'
import style from './index.module.less'
import DownLoadGroup from '@/components/DownloadGroup'
import { useTranslation } from 'react-i18next'

export default function Banner() {
  const { t } = useTranslation()
  return (
    <div className={style.bannerContainer}>
      <div className={style.bannerBox}>
        <header>{t('banner.header')}</header>
        <section>{t('banner.description')}</section>
        {/* 下载按钮组 */}
        <DownLoadGroup />
      </div>
    </div>
  )
}
