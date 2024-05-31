import React from 'react'
import style from './index.module.less'
import TkHeader from '@/components/TkHeader'
import TkMenu from '@/components/TkMenu'
import TkContent from '@/components/TkContent'
import { Layout } from 'antd'

const BaseLayout = () => {
  return (
    <Layout className={style.layoutContainer}>
      <TkHeader />
      <Layout>
        <TkMenu />
        <TkContent />
      </Layout>
    </Layout>
  )
}
export default BaseLayout
