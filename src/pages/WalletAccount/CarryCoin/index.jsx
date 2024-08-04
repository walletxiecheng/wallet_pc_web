import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import style from './index.module.less'
import coinTypeImg from '@/assets/image/image-coin-type.svg'
import arrowDownLineIcon from '@/assets/icon/light/icon-arrow-down-line.png'
import { Flex } from 'antd'
import Divider from '@/components/Divider'
import checkIconOff from '@/assets/icon/dark/icon-checkBox-line-off.svg'
import checkIconOn from '@/assets/icon/light/icon-checkBox-line.svg'
import Tips from './components/Tips'
import GoogleCodeModal from './components/GoogleCodeModal'

import { getCryptoTokens, getChains } from '@/service'
import { useRequest } from 'ahooks'
import { showError } from '@/common/message'
import { useUserStore } from '@/stores'

export default function CarryCoin() {
  const { userInfo } = useUserStore()
  // 是否显示tips
  const [tips, setTips] = useState(false)
  const toggleToast = (status) => setTips(status)

  const [showGoogleModal, setShowPassWordModal] = useState(false)
  const toggleGoogleModal = (status) => {
    setShowPassWordModal(status)
  }
  // 当前链
  const [currentChain, setCurrentChain] = useState('Tron')
  // 币种列表
  const { data: tokenList, run: tokenRun } = useRequest(async (chain) => {
    const req = {
      chain: chain || currentChain
    }
    try {
      const { data } = await getCryptoTokens(req)
      return data
    } catch (err) {
      showError(err.msg)
    }
  })
  // 链列表
  const { data: chainList } = useRequest(async () => {
    try {
      const { data } = await getChains()
      return data.chain
    } catch (err) {
      showError(err.msg)
    }
  })

  // 检查是否有资金密码和邮箱验证
  const check = () => {
    // if (!userInfo.google_verify_status) {
    //   toggleToast(true)
    // }
    toggleGoogleModal(true)
  }

  return (
    <>
      <NavBar />
      <div className={style.carryContainer}>
        <Tips tips={tips} toggleToast={toggleToast} />
        <GoogleCodeModal
          showGoogleModal={showGoogleModal}
          toggleGoogleModal={toggleGoogleModal}
        />
        <div className={style.CoinTypeBox}>
          <header className={style.headline}>选择提币币种</header>
          {/* 币种 */}
          <div className={style.selectCoin}>
            <span>币种</span>
            <div className={style.selectBox}>
              <select>
                {tokenList?.map((item, index) => (
                  <option key={item.coin_symbol} value={item.coin_symbol}>
                    {item.coin_symbol}
                  </option>
                ))}
              </select>
            </div>
            {/* <Flex justify="center" align="center">
                <img src={coinTypeImg} />
                <span>USDT Tether USDT</span>
              </Flex>
              <img src={arrowDownLineIcon} height={16} /> */}
          </div>
          {/* 额度 */}
          <div className={style.quota}>
            <Flex className={style.quotaItem}>
              <span>24H累计提币额度</span>
              <span>5 BTC</span>
            </Flex>
            <Flex className={style.quotaItem}>
              <span>剩余额度</span>
              <span>5 BTC</span>
            </Flex>
            <Flex className={style.quotaItem}>
              <span>合约信息</span>
              <span>***16as51584</span>
            </Flex>
          </div>
          <div className={style.carryCount}>
            <span>可提</span>
            <span>0 USDT</span>
          </div>
          <Divider />
          <div className={style.tips}>
            <span>• Token 17平台地址推荐开启快速提币，享受0手续费。</span>
            <span>• 最小提币数量为：1 USDT (TRC20)。</span>
            <span>
              • 为保障资金安全，当您账户安全策略变更、密码修改、我们会对提币进行人工审核，请耐心等待工作人员电话或邮件联系。
            </span>
            <span> •请务必确认电脑及浏览器安全，防止信息被篡改或泄露。</span>
          </div>
        </div>
        <div className={style.CoinInfoBox}>
          <header className={style.headline}>填写提币信息</header>
          <div className={style.carryAddress}>
            <header>
              <span>提币地址</span>
              <span className={style.link}>提币地址管理</span>
            </header>
            <input
              type="text"
              className={style.addrInput}
              placeholder="填写提币地址到这里"
            />
          </div>
          <header style={{ marginTop: 32 }}>充币网络</header>
          <div className={style.networkList}>
            {chainList?.map((item, index) => (
              <div
                className={style.networkCard}
                key={index}
                style={{
                  background: currentChain === item ? '#0099ff' : ''
                }}
                onClick={() => {
                  setCurrentChain(item)
                  tokenRun(item)
                }}
              >
                <img
                  src={currentChain === item ? checkIconOn : checkIconOff}
                  width={24}
                />
                <div>{item}</div>
                <div>
                  <span>手续费 1USDT</span>
                  <br />
                  <span>≈0.91CNY</span>
                </div>
              </div>
            ))}
          </div>
          <div className={style.carryAmount}>
            <header>提币数量</header>
            <div className={style.inputBox}>
              <input type="number" placeholder="最小输入数量为2" />
              <Flex>
                <span>USDT</span>｜<span className={style.link}>全部</span>
              </Flex>
            </div>
          </div>
          <div>
            <p>
              手续费<span style={{ marginLeft: '32px' }}>0USDT</span>
            </p>
            <p>
              实际到账<span style={{ marginLeft: '32px' }}>0</span>
            </p>
          </div>
          <button className={style.carryButton} onClick={check}>
            提币
          </button>
        </div>
      </div>
    </>
  )
}