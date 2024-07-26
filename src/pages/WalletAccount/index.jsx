import React from 'react'
import NavBar from '@/components/NavBar'
import style from './index.module.less'
import { Table } from 'antd'

export default function WalletAccount() {
  return (
    <>
      <NavBar />
      <div className={style.walletContainer}>
        <div className={style.walletCard}>
          <header>账户</header>
          <div className={style.balance}>
            0.00000000 BTC
            <span className={style.computed}>≈ 0.00 USD</span>
          </div>
          <div className={style.desc}>
            今日收益: <span>0.00 USD(0.00%)</span>
          </div>
          <div className={style.walletButtonGroup}>
            <button>提币</button>
            <button>划转</button>
            <button className={style.history}>钱包历史记录</button>
          </div>
        </div>

        <div className={style.tableCard}>
          <header className={style.tableHeader}>
            <div className={style.search}>1</div>
            <div className={style.hidden}>2</div>
          </header>

          <div className={style.tableContent}>
            <Table></Table>
          </div>
        </div>
      </div>
    </>
  )
}
