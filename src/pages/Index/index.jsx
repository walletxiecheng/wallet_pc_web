import React from 'react'
import style from './index.module.less'
import Banner from './components/Banner'
import Brand from './components/Brand'
import FunDescribe from './components/FunDescribe'

export default function Index() {
  return (
    <div className={style.homeContainer}>
      {/* 大标题 */}
      <Banner />
      {/* 品牌 */}
      <Brand />
      {/* 功能介绍 */}
      <FunDescribe />
    </div>
  )
}
