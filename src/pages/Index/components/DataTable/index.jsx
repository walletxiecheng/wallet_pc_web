import React from 'react'
import style from './index.module.less'
import './table.css'
import { Table, Flex, Tag } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { columns } from './config.jsx'
import icon from '@/assets/icon/dark/icon-jump-line.svg'

const dataSource = [
  {
    key: '1',
    start: '1',
    start: '1',
    start: '1',
    start: '1',
    start: '1',
    start: '1'
  }
]

export default function DataTable() {
  return (
    <div className={style.dataBoardContainer}>
      <Flex justify="space-between">
        <Flex className={style.tabBox}>
          <div>自选</div>
          <div>USDT</div>
          <div>ETC</div>
          <div>BTC</div>
        </Flex>

        <div className={style.searchBox}>
          <input
            type="text"
            className={style.searchInput}
            placeholder="输入币种搜索"
          />
          <SearchOutlined />
        </div>
      </Flex>
      {/* 数据区 */}
      <div style={{ marginTop: 40 }}>
        <Table
          bordered={false}
          columns={columns()}
          key={(record) => record.key}
          dataSource={dataSource}
          pagination={false}
        />
      </div>
      <div className={style.moreButton}>
        <span>查看更多</span>
        <img src={icon} />
      </div>
    </div>
  )
}
