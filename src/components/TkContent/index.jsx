import React from 'react'
import { Breadcrumb, Layout } from 'antd'
import TkTable from '@/components/TkTable'
import { Outlet } from 'react-router-dom'
import style from './index.module.less'

const { Content } = Layout

export default function MainLayout() {
  return (
    <Layout className={style.layoutContentContainer}>
      <Breadcrumb className={style.layoutBreadcrum}>
        <Breadcrumb.Item>系统管理</Breadcrumb.Item>
        <Breadcrumb.Item>短信管理</Breadcrumb.Item>
      </Breadcrumb>
      {/* 短信管理 */}
      <Layout.Content className={style.layoutContent}>
        <Outlet />
        <TkTable></TkTable>
      </Layout.Content>
    </Layout>
  )
}
