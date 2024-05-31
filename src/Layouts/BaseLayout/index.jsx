import React from 'react'
import style from './index.module.less'
import MyHeader from '@/components/MyHeader'
import SiderMenu from '@/components/SideMenu'
import MainLayout from '@/Layouts/MainLayout'
import { Layout, theme } from 'antd'
const { Sider } = Layout

const BaseLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()
  return (
    <Layout className={style.layoutContainer}>
      <MyHeader></MyHeader>
      <Layout>
        <Sider
          width={208}
          style={{
            background: colorBgContainer,
            height: '968px'
          }}
        >
          <SiderMenu />
        </Sider>
        <MainLayout></MainLayout>
      </Layout>
    </Layout>
  )
}
export default BaseLayout
