import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import backIcon from '@/assets/icon/light/icon-arrow-left-line.png'
import { Flex, Table } from 'antd'
import { withdrawColumns, receiveColumns } from './config'
import { useRequest, usePagination } from 'ahooks'
import { useUserStore } from '@/stores'
import { getWithdrawRecord, getReceiveRecord } from '@/service'
import './index.less'
import { useNavigate } from 'react-router-dom'
import { pageParams } from '@/common/config'

const tabList = [
  {
    id: 1,
    label: '提币记录'
  },
  {
    id: 2,
    label: '收款记录'
  }
]

const data = [
  {
    time: '12.01',
    coin_type: 'BTC',
    type: 1,
    address: '0Xxxxxx'
  },
  {
    time: '12.01',
    coinType: 'BTC',
    type: 1,
    address: '0Xxxxxx'
  }
]

export default function Record() {
  // 用户信息
  const { userInfo } = useUserStore()
  const navigate = useNavigate()
  // 当前选中tab
  const [checkTab, setCheckTab] = useState(1)

  // 提币列表
  const getWithdrawRecordHandler = async (req) => {
    req.coin_id = 0
    const { data } = await getWithdrawRecord(userInfo.commercial_id, req)
    return { total: data.total, list: data.list }
  }
  const { data: withdrawList } = usePagination(getWithdrawRecordHandler, {
    defaultParams: [pageParams]
  })

  // 收款列表
  const getReceiveRecordHandler = async (req) => {
    req.coin_id = 0

    const { data } = await getReceiveRecord(userInfo.commercial_id, req)
    return { total: data.total, list: data.list }
  }
  const { data: receiveList } = usePagination(getReceiveRecordHandler)

  return (
    <>
      <NavBar />
      <div className="recordContainer">
        <Flex
          onClick={() => {
            navigate('-1')
          }}
          align="center"
        >
          <img src={backIcon} width={16} />
          返回
        </Flex>

        <div className="tabs">
          {tabList.map((item) => (
            <span
              key={item.id}
              className={checkTab === item.id ? 'active' : ''}
              onClick={() => {
                setCheckTab(item.id)
              }}
            >
              {item.label}
            </span>
          ))}
        </div>

        <div className="tableHeader">
          <div className="table-title">
            {checkTab === 1 ? '提币记录' : '收款记录'}
          </div>
          <div className="filter">
            <select name="" id="">
              <option value="">全部币种</option>
              <option value="">BTC</option>
            </select>
          </div>
        </div>

        <div className="tableBox">
          {checkTab === 1 && (
            <Table
              columns={withdrawColumns()}
              dataSource={withdrawList?.list}
            />
          )}

          {checkTab === 2 && (
            <Table columns={receiveColumns()} dataSource={receiveList?.data} />
          )}
        </div>
      </div>
    </>
  )
}
