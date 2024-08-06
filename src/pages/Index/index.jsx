import React from 'react'
import style from './index.module.less'
import Banner from './components/Banner'
import Brand from './components/Brand'
import FunDescribe from './components/FunDescribe'
// import DataTable from './components/DataTable'
import Billboards from './components/Billboards'
import Important from './components/Important'
import Portfolio from './components/Portfolio'
import Evaluation from './components/Evaluation'
import Bottom from './components/Bottom'
import DataBoard from '@/assets/image/dataBoard.png'
import NavBar from '@/components/NavBar'

export default function Index() {
  return (
    <>
      <NavBar />
      <div className={style.homeContainer}>
        {/* 大标题 */}
        <Banner />
        {/* 品牌 */}
        <Brand />
        {/* 功能介绍 */}
        <FunDescribe />
        {/* 数据表格 */}
        {/* <DataTable /> */}
        <img src={DataBoard} width={1200} style={{ marginTop: '40px' }} />
        {/* 广告版 */}
        {/* <Billboards /> */}
        {/* 重点介绍 */}
        <Important />
        {/* 投资组合 */}
        <Portfolio />
        {/* 用户评价组件 */}
        <Evaluation />
        {/* 底部 */}
        <Bottom />
      </div>
    </>
  )
}
