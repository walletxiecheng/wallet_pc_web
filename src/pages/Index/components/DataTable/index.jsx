import React, { useRef, useState } from 'react'
import style from './index.module.less'
import './table.less'
import { Table, Flex, Tag } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { columns } from './config.jsx'
import icon from '@/assets/icon/dark/icon-jump-line.svg'
import { usePagination, useRequest } from 'ahooks'
import { getMarket } from '@/service'
import { showWarning } from '@/common/message'

const columList = ['Custom', 'USDT', 'ETC', 'BTC']
const pageParams = { current: 1, pageSize: 10 }

export default function DataTable() {
  // 当前列
  const [column, setColumn] = useState('Custom')
  // 当前页数
  const [current, setCurrent] = useState(1)

  // 输入框绑定
  const inputTokenRef = useRef()

  const getMarketHandler = async (params) => {
    try {
      const { data } = await getMarket(params)
      return data
    } catch (err) {}
  }
  const {
    data: marketList,
    run: runMarket,
    pagination: marketPagination
  } = usePagination(getMarketHandler, {
    defaultParams: [{ column: 'Custom', ...pageParams }]
  })

  // 列变化
  const toggleColumn = (column) => {
    setColumn(column)
    runMarket({ column: column, ...pageParams })
  }

  // 查看更多
  const onRefreshTale = () => {
    setCurrent(current + 1)
    marketPagination.onChange(current, marketPagination.pageSize)
  }

  // 输入币种搜索
  const search = () => {
    const token = inputTokenRef.current.value
    inputTokenRef.current.value = ''

    if (!token) {
      return showWarning('input token,please!')
    }
    runMarket({ column: column, coinName: token, ...pageParams })
  }
  return (
    <>
      <div className={style.dataBoardContainer}>
        <Flex justify="space-between">
          <Flex className={style.tabBox}>
            {columList.map((item) => (
              <div
                className={item === column ? style.active : ''}
                key={item}
                onClick={() => {
                  toggleColumn(item)
                }}
              >
                {item}
              </div>
            ))}
          </Flex>

          <div className={style.searchBox}>
            <input
              type="text"
              ref={inputTokenRef}
              className={style.searchInput}
              placeholder="输入币种搜索"
              onKeyDown={(e) => {
                if (e?.keyCode === 13) {
                  search()
                }
              }}
            />
            <SearchOutlined onClick={search} />
          </div>
        </Flex>
        {/* 数据区 */}
        <div style={{ marginTop: 40 }} className="tableBox">
          <Table
            bordered={false}
            columns={columns()}
            rowKey={(record) => record.id}
            dataSource={marketList?.info}
            pagination={false}
            loading={!marketList}
          />
        </div>
        <div className={style.moreButton} onClick={onRefreshTale}>
          <span>查看更多</span>
          <img src={icon} />
        </div>
      </div>
    </>
  )
}
