import React from 'react'
import style from './index.module.less'
import icon from '@/assets/icon/dark/icon-fill-dot.svg'
import { Flex } from 'antd'
import { getPortfolio } from '@/service'
import { useRequest } from 'ahooks'

const style1 = {
  '--time': '20s'
}
const style2 = {
  '--time': '50s'
}
export default function Portfolio() {
  // 获取投资组合
  const { data } = useRequest(async () => {
    const { data } = await getPortfolio()
    return data
  })

  // 打开投资组合链接
  const navigateTo = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className={style.portfolioContainer}>
      <h1>建立你的投资组合</h1>
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
          <header>45+</header>
          <span>百万用户首选</span>
        </div>
        <div>
          <header>4040</header>
          <span>24小时成交量</span>
        </div>
        <div>
          <header>700+</header>
          <span>优质数字资产</span>
        </div>
      </Flex>
    </div>
  )
}
