import React from 'react'
import style from './index.module.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { Flex, Space } from 'antd'
export default function Collection() {
  return (
    <div className={style.colContainer}>
      <Flex justify="space-between">
        <header>归集</header>
        <img src={closeIcon} alt="" />
      </Flex>
      <Flex justify="space-between">
        <div className={style.totalBox}>
          <header>总金额</header>
          <div>14542.22</div>
        </div>
        <div className={style.collectBox}>
          <header>归集金额</header>
          <Space s t y>
            <div>14542.22</div>
            <button>测算</button>
          </Space>
        </div>
      </Flex>
    </div>
  )
}
