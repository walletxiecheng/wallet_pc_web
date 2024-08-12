import React, { useState, useRef } from 'react'
import NavBar from '@/components/NavBar'
import backIcon from '@/assets/icon/light/icon-arrow-left-line.png'
import { Flex, Select, Table } from 'antd'
import { withdrawColumns, receiveColumns } from './config'
import { useRequest, usePagination } from 'ahooks'
import { useUserStore } from '@/stores'
import { getWithdrawRecord, getReceiveRecord } from '@/service'
import './index.less'
import { useNavigate } from 'react-router-dom'
import { pageParams } from '@/common/config'
import { getToken } from '@/service'

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

export default function Record() {
  // 用户信息
  const { userInfo } = useUserStore()
  const navigate = useNavigate()
  // 当前选中tab
  const [checkTab, setCheckTab] = useState(1)
  const [coinId, setCoinId] = useState(0)

  const tokenRef = useRef()
  // 获取全部币种
  const { data: tokens, run: runToken } = useRequest(async () => {
    try {
      const { data } = await getToken()
      return data
    } catch (err) {}
  })

  // 提币列表
  const getWithdrawRecordHandler = async (req) => {
    const { data } = await getWithdrawRecord(req)
    return { total: data.total, list: data.records }
  }

  const {
    data: withdrawList,
    run: runWithdraw,
    pagination: withdrawPagination
  } = usePagination(getWithdrawRecordHandler, {
    defaultParams: [{ coin_id: coinId, ...pageParams }]
  })

  // 收款列表
  const getReceiveRecordHandler = async (req) => {
    const { data } = await getReceiveRecord(req)
    return { total: data.total, list: data.records }
  }

  const {
    data: receiveList,
    run: runReceive,
    pagination: receivePagination
  } = usePagination(getReceiveRecordHandler, {
    defaultParams: [{ coin_id: coinId, ...pageParams }]
  })

  // 过滤提币列表
  const filterWithdraw = async (e) => {
    const id = parseInt(e.target.value)
    const req = { ...pageParams, coin_id: id }
    runWithdraw(req)
    runReceive(req)
  }

  // 过滤收币列表
  return (
    <>
      <NavBar />
      <div className="recordContainer">
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
            <select ref={tokenRef} onChange={filterWithdraw}>
              <option value="0">全部币种</option>
              {/* <option value="">BTC</option> */}
              {tokens?.map((item) => (
                <option key={item.coin_id} value={item.coin_id}>
                  {item.symbol}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="tableBox">
          {checkTab === 1 && (
            <Table
              columns={withdrawColumns()}
              dataSource={withdrawList?.list}
              loading={!withdrawList}
              rowKey={(record) => record.order_id}
              pagination={{
                hideOnSinglePage: true,
                total: withdrawList?.total,
                current: withdrawPagination.current,
                pageSize: withdrawPagination.pageSize,
                onChange: withdrawPagination.onChange,
                onShowSizeChange: withdrawPagination.onChange
              }}
            />
          )}
          {checkTab === 2 && (
            <Table
              columns={receiveColumns()}
              dataSource={receiveList?.list}
              rowKey={(record) => record.order_id}
              loading={!receiveList}
              pagination={{
                hideOnSinglePage: true,
                total: receiveList?.total,
                current: receivePagination.current,
                pageSize: receivePagination.pageSize,
                onChange: receivePagination.onChange,
                onShowSizeChange: receivePagination.onChange
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}
