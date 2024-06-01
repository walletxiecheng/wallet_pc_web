import React from 'react'
import style from './index.module.less'
import { Header } from 'antd/es/layout/layout'
import logoIcon from '@/assets/icon/logoIcon.svg'
import avatarIcon from '@/assets/icon/avatarIcon.svg'
import { Layout } from 'antd'

// 顶部header
export default function TkHeader() {
  return (
    <Layout>
      <Header className={style.headerContainer}>
        <div className={style.headerTitle}>
          <img src={logoIcon} />
          <span>Token 13 管理后台</span>
        </div>
        <div className={style.headerInfo}>
          <img src={avatarIcon} className={style.avatar} />
          <span>Serati Ma</span>
        </div>
      </Header>
    </Layout>
  )
}
