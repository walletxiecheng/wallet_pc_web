import React from 'react'
import { Breadcrumb, Layout } from 'antd'
import { getBreadcrumbItemsByPathName } from '../TkMenu/utils'
import { Outlet } from 'react-router-dom'
import style from './index.module.less'
import { useLocation, Link } from 'react-router-dom'

export default function MainLayout() {
  const location = useLocation()
  const pathName = location.pathname

  const breadcrumbItems = getBreadcrumbItemsByPathName(pathName).map((item) => {
    return {
      key: item.key,
      path: item.path,
      title: item.label
    }
  })
  const itemRender = (currentRoute) => {
    const { path, title } = currentRoute
    if (path) {
      return <Link to={path}>{title}</Link>
    } else {
      return <span>{title}</span>
    }
  }

  return (
    <Layout className={style.layoutContentContainer}>
      <Breadcrumb
        className={style.layoutBreadcrumb}
        items={breadcrumbItems}
        itemRender={itemRender}
      />
      {/* 短信管理 */}
      <Layout.Content className={style.layoutContent}>
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}
