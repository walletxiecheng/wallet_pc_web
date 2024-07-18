import React from 'react'
import style from './index.module.less'

export default function Banner() {
  return (
    <div className={style.bannerContainer}>
      <div className={style.bannerBox}>
        <header>真正的自我监护Web3 钱包</header>
        <section>
          Token 17钱包是在 Algorand
          区块链上存储、购买和交换的最简单、最安全的方式。
          它可以在任何设备上发现并连接去中心化应用程序 (DApp)。
        </section>
        {/* 下载按钮组 */}
      </div>
    </div>
  )
}
