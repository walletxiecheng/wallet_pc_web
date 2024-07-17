import { Layout } from 'antd'
import { Content, Header, Footer } from 'antd/es/layout/layout'
import React from 'react'
import style from './index.module.less'
import NavBar from '@/components/NavBar'
export default function BaseLayout() {
  return (
    <Layout className={style.layoutContainer}>
      <Header className={style.layoutHeader}>
        {/* 顶部导航 */}
        <NavBar />
      </Header>
      <Content className={style.layoutContent}>{/* 主体部分 */}2</Content>
      <Footer className={style.layoutFooter}>3</Footer>
    </Layout>
  )
}
