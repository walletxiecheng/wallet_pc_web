import React from 'react'
import style from './index.module.less'
import Banner from './components/Banner'
import Brand from './components/Brand'
import FunDescribe from './components/FunDescribe'
import DataTable from './components/DataTable'
import Billboards from './components/Billboards'
import Important from './components/Important'
import Portfolio from './components/Portfolio'
import Evaluation from './components/Evaluation'
import Bottom from './components/Bottom'

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
      {/* 重点介绍 */}
      <Important />
      {/* 投资组合 */}
      <Portfolio />
      {/* 用户评价组件 */}
      <Evaluation />
      {/* 底部 */}
      <Bottom />
    </div>
  )
}
