import React from 'react'
import style from './index.module.less'
import { Header } from 'antd/es/layout/layout'
// 顶部header
export default function MyHeader() {
  return <Header className={style.headerContainer}>Header</Header>
}
