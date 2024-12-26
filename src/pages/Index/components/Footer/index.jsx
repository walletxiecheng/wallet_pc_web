import React from 'react'
import logo from '@/assets/icon/dark/logo_light.svg'
import style from './index.module.less'
import { URLS } from '@/routes/urls'

const dataSource = [
  {
    id: 0,
    title: '关于Token17',
    value: [
      {
        // label: '关于我们',
        link: 'https://www.baidu.com'
      }
    ]
  },

  {
    id: 1,
    title: '产品',
    value: [
      // {
      //   label: '快捷买币',
      //   link: 'https://www.baidu.com'
      // },
      // {
      //   label: '闪兑',
      //   link: 'https://www.baidu.com'
      // },
      {
        label: '数字货币计算器',
        link: URLS.calculator
      }
    ]
  },
  {
    id: 2,
    title: '服务',
    value: [
      {
        label: 'API',
        link: 'https://token17.gitbook.io/token17/support'
      }
    ]
  },
  {
    id: 3,
    title: '买币',
    value: [
      {
        // label: '购买USDC',
        link: 'https://www.baidu.com'
      }
    ]
  },

  {
    id: 5,
    title: '交易',
    value: [
      {
        // label: 'BTC USDC',
        link: 'https://www.baidu.com'
      }
    ]
  }
]

export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.title}>
        <img src={logo} width={200} />
      </div>
      <div className={style.list}>
        {dataSource.map((item, index) => (
          <div className={style.listColumn} key={item.id}>
            <header>{item.title}</header>
            {item.value.map((item, index) => (
              <div
                className={style.itemList}
                key={index}
                onClick={() => {
                  window.open(item.link, '_blank')
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
