import React from 'react'
import { Breadcrumb, Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import style from './index.module.less'

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
      </Layout.Content>
    </Layout>
  )
}
