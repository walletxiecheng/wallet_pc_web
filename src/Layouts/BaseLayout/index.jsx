import { Layout } from 'antd'
import { Content, Header, Footer } from 'antd/es/layout/layout'
import React from 'react'

export default function BaseLayout() {
  return (
    <div>
      <Layout>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </div>
  )
}
