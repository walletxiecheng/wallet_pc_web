import React from 'react'
import style from './index.module.less'
import { Tabs, Flex, Table, Input } from 'antd'
// import { SearchOutlined } from 'ant-design/icons'
import { SearchOutlined } from '@ant-design/icons'
export default function DataTable() {
  return (
    <div className={style.dataBoardContainer}>
      <Flex justify="space-between">
        <div>11</div>
        <div className={style.searchBox}>
          <input
            type="text"
            className={style.searchInput}
            placeholder="输入币种搜索"
          />
          <SearchOutlined />
        </div>
      </Flex>
    </div>
  )
}
