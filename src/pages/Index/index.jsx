import React from 'react'
import style from './index.module.less'
import Banner from './components/Banner'
import Brand from './components/Brand'
import FunDescribe from './components/FunDescribe'
import DataTable from './components/DataTable'
import Billboards from './components/Billboards'

export default function Index() {
  return (
    <div className={style.homeContainer}>
      {/* 大标题 */}
      <Banner />
      {/* 品牌 */}
      <Brand />
      {/* 功能介绍 */}
      <FunDescribe />
      {/* 数据表格 */}
      <DataTable />
      {/* 广告版 */}
      <Billboards />
    </div>
  )
}
