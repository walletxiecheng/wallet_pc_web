import React from 'react'
import style from './index.module.less'
import { Flex } from 'antd'
import { getPortfolio, getStatistics } from '@/service'
import { useRequest } from 'ahooks'
import { useTranslation } from 'react-i18next'
const style1 = {
  '--time': '40s'
}
const style2 = {
  '--time': '60s'
}
export default function Portfolio() {
  const { t } = useTranslation()
  // 获取投资组合
  const { data } = useRequest(async () => {
    try {
      const { data } = await getPortfolio()
      return data
    } catch (err) {}
  })

  // 打开投资组合链接
  const navigateTo = (url) => {
    window.open(url, '_blank')
  }

  // 获取用户量/24小时成交量/优质资产数量
  const { data: staticData } = useRequest(async () => {
    try {
      const { data } = await getStatistics()
      return data
    } catch (err) {}
  })

  return (
    <div className={style.portfolioContainer}>
      <h1>{t('portfolio.title')}</h1>
      <div className={style.barrageBox} style={style1}>
        <div>
          {data?.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                navigateTo(item.link)
              }}
            >
              <img src={item.icon} />
              {item.name}
            </span>
          ))}
        </div>
        <div className={style.next}>
          {data?.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                navigateTo(item.link)
              }}
            >
              <img src={item.icon} />
              {item.name}
            </span>
          ))}
        </div>
      </div>

      <div className={style.barrageBox} style={style2}>
        <div>
          {data?.map((item, index) => (
            <span key={index}>
              <img src={item.icon} />
              {item.name}
            </span>
          ))}
        </div>
        <div className={style.next}>
          {data?.map((item, index) => (
            <span key={index}>
              <img src={item.icon} />
              {item.name}
            </span>
          ))}
        </div>
      </div>

      <div className={style.barrageBox} style={style1}>
        <div>
          {data?.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                navigateTo(item.link)
              }}
            >
              <img src={item.icon} />
              {item.name}
            </span>
          ))}
        </div>
        <div className={style.next}>
          {data?.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                navigateTo(item.link)
              }}
            >
              <img src={item.icon} />
              {item.name}
            </span>
          ))}
        </div>
      </div>

      <div className={style.barrageBox} style={style2}>
        <div>
          {data?.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                navigateTo(item.link)
              }}
            >
              <img src={item.icon} />
              {item.name}
            </span>
          ))}
        </div>
        <div className={style.next}>
          {data?.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                navigateTo(item.link)
              }}
            >
              <img src={item.icon} />
              {item.name}
            </span>
          ))}
        </div>
      </div>

      <Flex className={style.portfolioDataBox}>
        <div>
          <header>{staticData?.user_amount}+</header>
          <span>{t('portfolio.content1')}</span>
        </div>
        <div>
          <header>{staticData?.trading_volume_24h}</header>
          <span>{t('portfolio.content2')}</span>
        </div>
        <div>
          <header>{staticData?.assets_amount}+</header>
          <span>{t('portfolio.content3')}</span>
        </div>
      </Flex>
    </div>
  )
}
