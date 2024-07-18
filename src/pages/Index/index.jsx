import React from 'react'
import style from './index.module.less'
import Banner from '@/components/Banner'

export default function Index() {
  return (
    <div className={style.homeContainer}>
      <Banner />
    </div>
  )
}
