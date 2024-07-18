import React from 'react'
import style from './index.module.less'
import NavBar from '@/components/NavBar'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

const { Header, Content, Footer } = Layout

export default function BaseLayout() {
  return (
    <div className={style.layoutContainer}>
      <Layout className={style.layoutBox}>
        <Header className={style.layoutHeader}>
          <NavBar />
        </Header>
        <Content className={style.layoutContent}>
          <Outlet />
        </Content>
        <Footer className={style.layoutFooter}>33</Footer>
      </Layout>
    </div>
  )
}
