import React, { useState } from 'react'
import './index.less'
import NavBar from '@/components/NavBar'
import { getRate } from '@/service'
import { useRequest } from 'ahooks'
import { Select } from 'antd'
import iconChangeLine from '@/assets/icon/light/icon-change-line.svg'
import iconAlertWarnLine from '@/assets/icon/light/icon-alert-line-warn.svg'

const { Option } = Select
export default function Calculator() {
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
      <div className="calContainer">
        <div className="box">
          <header>数字货币计算器</header>
          <div className="desc">
            本页面显示了数字货币与法币的实时汇率。您可以立即将 100
            多种热门数字货币，如比特币 (BTC)，以太坊 (ETH) 和瑞波 (XRP)
            转换为您所需的法币。
          </div>
        </div>

        <div className="coinBox">
          <div className="left">
            <div>我要卖出</div>
            <input
              type="text"
              className="coinInput"
              value={inputVal}
              onChange={(e) => {
                setInputValue(e.target.value)
              }}
            />
          </div>
          <Select
            placeholder="选择货币"
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
        <div className="changeImg" onClick={change}>
          <img src={iconChangeLine} />
        </div>
        <div className="coinBox">
          <div className="left">
            <div>我将收到</div>
            <div className="outInput">{parseFloat(getOutPutVal())}</div>
          </div>
          <Select
            placeholder="选择法币"
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

        <div className="tips">
          <div>1 USDT ≈ 1 USD</div>
          <div className="tipBox">
            <img src={iconAlertWarnLine} style={{ marginRight: 3 }} />
            提示：由于汇率波动频繁，该结果仅作为参考使用
          </div>
        </div>
      </div>
    </>
  )
}
