import React, { useRef, useState } from 'react'
import NavBar from '@/components/NavBar'
import './index.less'
import { Radio, Table } from 'antd'
import { getAccountAssets } from '@/service'
import { usePagination } from 'ahooks'
import { pageParams } from '@/common/config'
import { showError, showWarning } from '@/common/message'
import { assetsColumns } from './config'
import { useNavigate } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import Collection from './components/Collection'
import { useTranslation } from 'react-i18next'
const test = [
  {
    id: 1,
    coin: '1'
  }
]
export default function WalletAccount() {
  const [assetsData, setAssetsData] = useState()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [showTotal, setShowTotal] = useState(false)
  // 是否隐藏资产
  const [showAssets, setShowAssets] = useState(false)
  // 获取搜索框中的值
  const searchRef = useRef()
  // 获取加密交易列表
  const getTransactionHandler = async (params) => {
    try {
      const { data } = await getAccountAssets(params)
      return { total: data?.total || 0, list: data?.records || [] }
    } catch (err) {
      return showError(err?.msg)
    }
  }
  const { data, run, pagination } = usePagination(getTransactionHandler, {
    defaultParams: [pageParams]
  })

  //
  const search = () => {
    const value = searchRef.current.value
    if (!value) {
      return showWarning('搜索条件不能为空')
    }
    run({ ...pageParams, symbol: value })
    searchRef.current.value = ''
  }
  return (
    <>
      <NavBar />
      {showTotal && <Collection setShowTotal={setShowTotal} />}
      <div className="walletContainer">
        <div className="walletCard">
          <header>{t('account.title')}</header>
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
              {t('account.Withdrawal')}
            </button>
            <button
              className="history"
              onClick={() => {
                navigate('/walletRecord')
              }}
            >
              {t('account.History')}
            </button>
          </div>
        </div>

        <div className="tableCard">
          <header className="tableHeader">
            <div className="search">
              <input type="text" placeholder="搜索" ref={searchRef} />
              <SearchOutlined width={16} onClick={search} />
            </div>
            <div className="hidden">
              <Radio
                checked={showAssets}
                onClick={() => {
                  setShowAssets(!showAssets)
                }}
              >
                {t('account.hide')}
              </Radio>
            </div>
          </header>

          <div className="tableBox" style={{ opacity: showAssets ? '0' : '1' }}>
            <div className="tableTitle">加密货币</div>
            <Table
              columns={assetsColumns(setShowTotal)}
              dataSource={data?.list}
              // dataSource={test}
              rowKey={(record) => record.id}
              loading={!data}
              pagination={{
                hideOnSinglePage: true,
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
