import React, { useState, useRef } from 'react'
import NavBar from '@/components/NavBar'
import style from './index.module.less'
import { Flex } from 'antd'
import Divider from '@/components/Divider'
import checkIconOff from '@/assets/icon/dark/icon-checkBox-line-off.svg'
import checkIconOn from '@/assets/icon/light/icon-checkBox-line.svg'
import Tips from './components/Tips'
import GoogleCodeModal from './components/GoogleCodeModal'
import AddressModal from './components/AddressModal'
import {
  getCryptoTokens,
  getChains,
  getWithDrawBalance,
  verifyAddress
} from '@/service'
import { useRequest } from 'ahooks'
import { showError, showSuccess, showWarning } from '@/common/message'
import { useUserStore } from '@/stores'
import arrowBack from '@/assets/icon/light/icon-arrow-left-line.png'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function CarryCoin() {
  const { t } = useTranslation()
  const { userInfo } = useUserStore()
  const amountRef = useRef()
  const arrivalAddrRef = useRef()
  const navigate = useNavigate()
  const location = useLocation()
  const state = location?.state
  // 是否显示tips
  const [tips, setTips] = useState(false)
  // 是否显示提币列表
  const [showAddressModal, setShowAddressModal] = useState(false)
  // 当前地址
  const [currentAddress, setCurrentAddress] = useState('')
  const toggleToast = (status) => setTips(status)

  const [showGoogleModal, setShowPassWordModal] = useState(false)
  const toggleGoogleModal = (status) => {
    setShowPassWordModal(status)
  }

  // 当前链
  const [currentChain, setCurrentChain] = useState('Tron')
  // 当前token
  // const [currentTokenId, setCurrentTokenId] = useState(1)
  // 当前币种信息
  const [currentToken, setCurrentToken] = useState()
  // 币种列表
  const { data: tokenList, run: tokenRun } = useRequest(async (chain) => {
    const req = {
      chain: chain || currentChain
    }
    try {
      const { data } = await getCryptoTokens(req)
      setCurrentToken(data[0])
      runBalance(data[0].id)

      return data
    } catch (err) {
      return showError(err?.msg)
    }
  })
  // 链列表
  const { data: chainList } = useRequest(async () => {
    try {
      const { data } = await getChains()
      return data.chain
    } catch (err) {
      return showError(err?.msg)
    }
  })

  // 获取地址余额
  const { data: balanceData, run: runBalance } = useRequest(async (id) => {
    const req = {
      coin_id: id || currentToken?.id || 5
    }
    try {
      const { data } = await getWithDrawBalance(req)
      return data
    } catch (err) {
      showError(err?.msg)
    }
  })

  // 获取表单数据
  const getFormData = () => {
    const address = arrivalAddrRef?.current?.value || ''
    const amount = amountRef?.current?.value || ''
    return {
      account_id: userInfo.commercial_id,
      crypto_type: currentToken?.id || 1,
      arrival_address: address,
      withdraw_amount: amount
    }
  }

  // 检查是否有资金密码和邮箱验证
  const check = async () => {
    const address = arrivalAddrRef?.current?.value || ''
    const amount = Number(amountRef?.current?.value) || ''
    const available = Number(balanceData?.available)
    if (!address) {
      return showWarning('提币地址不能为空')
    } else if (!amount) {
      return showWarning('提币数量不能为空')
    }

    // 查看可提额度
    if (available < amount) {
      return showWarning('可提额度不足')
    }

    // 查看是否有资金密码和谷歌验证码
    if (!userInfo.google_verify_status || !userInfo.has_fund_password) {
      return setTips(true)
    }
    // 校验地址
    try {
      const req = {
        chain: currentChain,
        address: address
      }
      await verifyAddress(req)
      toggleGoogleModal(true)
    } catch (err) {
      showError(err.msg)
    }
  }

  // 当前币种变化时出发
  const toggleCurrentToken = (e) => {
    const token = e.target.value
    tokenList.map((item) => {
      if (item.coin_symbol === token) {
        setCurrentToken(item)
      }
    })
  }

  const [sum, setSum] = useState(0)
  return (
    <>
      <NavBar />
      <Tips tips={tips} toggleToast={toggleToast} />
      <GoogleCodeModal
        showGoogleModal={showGoogleModal}
        toggleGoogleModal={toggleGoogleModal}
        data={getFormData()}
      />
      <AddressModal
        showAddressModal={showAddressModal}
        setShowAddressModal={setShowAddressModal}
        setCurrentAddress={setCurrentAddress}
        currentAddress={currentAddress}
        chain={currentChain}
      />
      <div className={style.carryContainer}>
        <Flex
          align="center"
          onClick={() => {
            navigate(-1)
          }}
        >
          <img src={arrowBack} width={16} />
          {t('toast.back')}
        </Flex>
        <main>
          <div className={style.CoinTypeBox}>
            <header className={style.headline}>{t('carryCoin.title1')}</header>
            {/* 币种 */}
            <div className={style.selectCoin}>
              <span>{t('carryCoin.currency')}</span>
              <div className={style.selectBox}>
                <select
                  onChange={(e) => {
                    toggleCurrentToken(e)
                  }}
                  // defaultValue={state?.token}
                >
                  {tokenList?.map((item, index) => (
                    <option key={item.coin_symbol} value={item.coin_symbol}>
                      {item.coin_symbol}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* 额度 */}
            <div className={style.quota}>
              <Flex className={style.quotaItem}>
                <span>{t('carryCoin.info1')}</span>
                <span>
                  {balanceData?.total_24h_withdraw_amount || 0}{' '}
                  {currentToken?.coin_symbol}
                </span>
              </Flex>
              <Flex className={style.quotaItem}>
                <span>
                  <span>{t('carryCoin.info2')}</span>
                </span>
                <span>
                  {balanceData?.remaining_amount || 0}{' '}
                  {currentToken?.coin_symbol}
                </span>
              </Flex>
              <Flex className={style.quotaItem}>
                <span>
                  <span>{t('carryCoin.info3')}</span>
                </span>
                <span>***{currentToken?.contract_address.slice(2, 8)}***</span>
              </Flex>
            </div>
            <div className={style.carryCount}>
              <span>
                <span>{t('carryCoin.mentioned')}</span>
              </span>
              <span>
                {balanceData?.available || 0} {currentToken?.coin_symbol}
              </span>
            </div>
            <Divider />
            <div className={style.tips}>
              <span>•{t('carryCoin.text1')}</span>
              <span>•{t('carryCoin.text2')}</span>
              <span>• {t('carryCoin.text3')}</span>
              <span> •{t('carryCoin.text4')}。</span>
            </div>
          </div>
          <div className={style.CoinInfoBox}>
            <header className={style.headline}>{t('carryCoin.title2')}</header>
            <div className={style.carryAddress}>
              <header>
                <span>{t('carryCoin.address')}</span>
                <span
                  className={style.link}
                  onClick={() => {
                    setShowAddressModal(true)
                  }}
                >
                  {t('carryCoin.management')}
                </span>
              </header>
              <input
                type="text"
                className={style.addrInput}
                placeholder={t('carryCoin.quantityTip')}
                defaultValue={currentAddress}
                ref={arrivalAddrRef}
              />
            </div>
            <header style={{ marginTop: 32 }}>{t('carryCoin.network')}</header>
            <div className={style.networkList}>
              {chainList?.map((item, index) => (
                <div
                  className={style.networkCard}
                  key={index}
                  style={{
                    background: currentChain === item ? '#0099ff' : '',
                    color: currentChain === item ? '#fff' : ''
                  }}
                  onClick={() => {
                    setCurrentChain(item)
                    tokenRun(item)
                  }}
                >
                  <Flex align="center">
                    <img
                      src={currentChain === item ? checkIconOn : checkIconOff}
                      width={24}
                    />
                    {item}
                  </Flex>
                  <div>
                    <span>
                      {t('carryCoin.fee')}{' '}
                      {Number(currentToken?.withdraw_fee) + ' '}
                      USDT
                    </span>
                    <br />
                    <span>≈ 0 CNY</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.carryAmount}>
              <header>{t('carryCoin.quantity')}</header>
              <div className={style.inputBox}>
                <input
                  type="text"
                  placeholder={t('carryCoin.quantityTip')}
                  ref={amountRef}
                  onChange={() => {
                    setSum(
                      amountRef?.current?.value - currentToken.withdraw_fee
                    )
                  }}
                />
                <Flex>
                  <span>{currentToken?.coin_symbol}</span>｜
                  <span
                    className={style.link}
                    onClick={() => {
                      amountRef.current.value = balanceData?.available
                    }}
                  >
                    {t('carryCoin.whole')}
                  </span>
                </Flex>
              </div>
            </div>
            <div>
              <p>
                {t('carryCoin.charge')}
                <span style={{ marginLeft: '32px' }}>
                  {Number(currentToken?.withdraw_fee) + ' '}
                  {currentToken?.coin_symbol}
                </span>
              </p>
              <p>
                {t('carryCoin.actualReceipt')}

                <span style={{ marginLeft: '32px' }}>{sum}</span>
              </p>
            </div>
            <button className={style.carryButton} onClick={check}>
              {t('carryCoin.Withdrawal')}
            </button>
          </div>
        </main>
      </div>
    </>
  )
}
