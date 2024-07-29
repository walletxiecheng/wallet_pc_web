import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import style from './index.module.less'
import backIcon from '@/assets/icon/light/icon-arrow-left-line.png'
import { Flex, Table } from 'antd'
import { withdrawColumns, receiveColumns } from './config'
import { useRequest } from 'ahooks'
import { useUserStore } from '@/stores'
import { getWithdrawRecord, getReceiveRecord } from '@/service'
import './index.less'

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
    coinType: 'BTC',
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
  console.log(userInfo.token)
  // 当前选中tab
  const [checkTab, setCheckTab] = useState(1)

  // 提币列表
  const getWithdrawRecordHandler = async () => {
    const req = {
      coin_id: 0
    }
    const { data } = await getWithdrawRecord(userInfo.commercial_id, req)
    return data
  }
  const { data: withdrawList } = useRequest(getWithdrawRecordHandler)

  // 收款列表
  const getReceiveRecordHandler = async () => {
    const req = {
      coin_id: 0
    }
    const { data } = await getReceiveRecord(userInfo.commercial_id, req)
    return data
  }
  const { data: receiveList } = useRequest(getReceiveRecordHandler)

  return (
    <>
      <NavBar />
      <div className={style.recordContainer}>
        <Flex align="center">
          <img src={backIcon} width={16} />
          返回
        </Flex>

        <div className={style.tabs}>
          {tabList.map((item) => (
            <span
              key={item.id}
              className={checkTab === item.id ? style.active : ''}
              onClick={() => {
                setCheckTab(item.id)
              }}
            >
              {item.label}
            </span>
          ))}
        </div>

        <div className={style.tableBox}>
          {checkTab === 1 && (
            <Table
              className={style.table}
              columns={withdrawColumns()}
              dataSource={withdrawList}
            />
          )}

          {checkTab === 2 && (
            <Table
              className={style.table}
              columns={receiveColumns()}
              dataSource={receiveList}
            />
          )}
        </div>
      </div>
    </>
  )
}
