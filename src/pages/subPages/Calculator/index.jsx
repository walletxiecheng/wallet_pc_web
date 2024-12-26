import React, { useState } from 'react'
import style from './index.module.less'
import NavBar from '@/components/NavBar'
import { getRate } from '@/service'
import { useRequest } from 'ahooks'
import { Select } from 'antd'
import iconChangeLine from '@/assets/icon/light/icon-change-line.svg'
import iconAlertWarnLine from '@/assets/icon/light/icon-alert-line-warn.svg'
import arrowLeftIcon from '@/assets/icon/light/icon-arrow-left-line.png'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { URLS } from '@/routes/urls'

const { Option } = Select
export default function Calculator() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { data } = useRequest(async () => {
    try {
      const { data } = await getRate()
      return data
    } catch (err) {}
  })

  const [usdRate, setUsdRate] = useState(1)
  const [usdTRate, setUsdTRate] = useState(1)
  const [inputVal, setInputValue] = useState(0)

  const getOutPutVal = () => {
    return inputVal * usdRate * usdTRate
  }

  const change = () => {
    setInputValue(getOutPutVal())
  }
  return (
    <>
      <NavBar />
      <div className={style.calContainer}>
        <div
          className={style.back}
          onClick={() => {
            navigate(URLS.index)
          }}
        >
          <img src={arrowLeftIcon} width={16} alt="" />
          {t('calculator.back')}
        </div>
        <div className={style.box}>
          <header>{t('calculator.title')}</header>
          <div className={style.desc}>{t('calculator.description')}</div>
        </div>

        <div className={style.coinBox}>
          <div className={style.left}>
            <div>{t('calculator.sell')}</div>
            <input
              type="text"
              className={style.coinInput}
              value={inputVal}
              onChange={(e) => {
                setInputValue(e.target.value)
              }}
            />
          </div>
          <Select
            placeholder={t('calculator.Select currency')}
            onChange={(value) => {
              setUsdTRate(value)
            }}
          >
            {data?.token?.map((item, index) => (
              <Option key={index} value={item.rate_to_usdt}>
                {item.token_name}
              </Option>
            ))}
          </Select>
        </div>
        <div className={style.changeImg} onClick={change}>
          <img src={iconChangeLine} />
        </div>
        <div className={style.coinBox}>
          <div className={style.left}>
            <div>{t('calculator.receive')}</div>
            <div className={style.outInput}>{parseFloat(getOutPutVal())}</div>
          </div>
          <Select
            placeholder={t('calculator.Select fiat currency')}
            onChange={(value) => {
              setUsdRate(value)
            }}
          >
            {data?.tender?.map((item, index) => (
              <Option key={index} value={item.rate_to_usd}>
                {item.tender_name}
              </Option>
            ))}
          </Select>
        </div>

        <div className={style.tips}>
          <div>1 USDT ≈ 1 USD</div>
          <div className={style.tipBox}>
            <img src={iconAlertWarnLine} style={{ marginRight: 3 }} />
            {t('calculator.tip')}
          </div>
        </div>
      </div>
    </>
  )
}
