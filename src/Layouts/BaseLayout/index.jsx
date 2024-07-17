import { Layout } from 'antd'
import { Content, Header, Footer } from 'antd/es/layout/layout'
import React from 'react'
import style from './index.module.less'

export default function BaseLayout() {
  return (
    <Layout className={style.layoutContainer}>
      <Header className={style.layoutHeader}>{/* nav */}1</Header>
      <Content className={style.layoutContent}>{/* 主体部分 */}2</Content>
      <Footer className={style.layoutFooter}>3</Footer>
    </Layout>
  )
}
