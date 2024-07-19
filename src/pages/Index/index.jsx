import React from 'react'
import style from './index.module.less'
import Banner from '@/components/Banner'
import Brand from '@/components/Brand'
import { Image } from 'antd'

export default function Index() {
  return (
    <div className={style.homeContainer}>
      <Banner />
      <Brand />
    </div>
  )
}
