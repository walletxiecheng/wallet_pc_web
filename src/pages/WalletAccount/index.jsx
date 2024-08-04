import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import './index.less'
import { Radio, Table } from 'antd'
import { getAccountAssets } from '@/service'
import { usePagination } from 'ahooks'
import { useUserStore } from '@/stores'
import { pageParams } from '@/common/config'
import { showError } from '@/common/message'
import { assetsColumns } from './config'
import { useNavigate } from 'react-router-dom'

export default function WalletAccount() {
  const { userInfo } = useUserStore()
  const commercial_id = userInfo.commercial_id

  const navigate = useNavigate()
  // 是否隐藏资产
  const [showAssets, setShowAssets] = useState(false)

  // 获取加密交易列表
  const getTransactionHandler = async (params) => {
    try {
      const { data } = await getAccountAssets(commercial_id, params)
      return { total: data.total, list: data.records }
    } catch (err) {
      showError(err)
    }
  }
  const { data, run, pagination } = usePagination(getTransactionHandler, {
    defaultParams: [pageParams]
  })

  return (
    <>
      <NavBar />
      <div className="walletContainer">
        <div className="walletCard">
          <header>账户</header>
          <div className="balance">
            0.00000000 BTC
            <span className="computed">≈ 0.00 USD</span>
          </div>
          <div className="desc">
            今日收益: <span>0.00 USD(0.00%)</span>
          </div>
          <div className="walletButtonGroup">
            <button
              onClick={() => {
                navigate('/carryCoin')
              }}
            >
              提币
            </button>
            <button
              className="history"
              onClick={() => {
                navigate('/walletRecord')
              }}
            >
              钱包历史记录
            </button>
          </div>
        </div>

        <div className="tableCard">
          <header className="tableHeader">
            <div className="search">
              <input type="text" placeholder="搜索" />
            </div>
            <div className="hidden">
              <Radio
                checked={showAssets}
                onClick={() => {
                  setShowAssets(!showAssets)
                }}
              >
                隐藏资产
              </Radio>
            </div>
          </header>

          <div className="tableBox" style={{ opacity: showAssets ? '0' : '1' }}>
            <div className="tableTitle">加密货币</div>
            <Table
              columns={assetsColumns()}
              dataSource={data?.list}
              rowKey={(record) => record.address}
              pagination={{
                total: data?.total,
                current: pagination.current,
                pageSize: pagination.pageSize,
                onChange: pagination.onChange,
                onShowSizeChange: pagination.onChange
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
