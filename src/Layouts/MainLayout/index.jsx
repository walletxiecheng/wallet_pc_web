import React from 'react'
import { Breadcrumb, Layout } from 'antd'
import TkTable from '@/components/TkTable'
const { Content } = Layout

export default function MainLayout() {
  return (
    <Layout
      style={{
        padding: '0 24px 24px'
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0'
        }}
      >
        <Breadcrumb.Item>系统管理</Breadcrumb.Item>
        <Breadcrumb.Item>短信管理</Breadcrumb.Item>
      </Breadcrumb>
      {/* 短信管理 */}
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: '#ffffff',
          borderRadius: '8px'
        }}
      >
        <TkTable></TkTable>
      </Content>
    </Layout>
  )
}
