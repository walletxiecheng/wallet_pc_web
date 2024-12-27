import React from 'react'
import logo from '@/assets/icon/dark/logo_light.svg'
import style from './index.module.less'
import { URLS } from '@/routes/urls'
import { useTranslation } from 'react-i18next'

const dataSource = [
  {
    id: 0,
    title: 'About',
    value: []
  },

  {
    id: 1,
    title: 'product',
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
        label: 'Digital Currency Calculator',
        link: URLS.calculator
      }
    ]
  },
  {
    id: 2,
    title: 'service',
    value: [
      {
        label: 'API',
        link: 'https://token17.gitbook.io/token17/support'
      }
    ]
  },
  {
    id: 3,
    title: 'Buy coins',
    value: []
  },

  {
    id: 5,
    title: 'transaction',
    value: []
  }
]

export default function Footer() {
  const { t } = useTranslation()
  return (
    <div className={style.footerContainer}>
      <div className={style.title}>
        <img src={logo} width={200} />
      </div>
      <div className={style.list}>
        {dataSource.map((item, index) => (
          <div className={style.listColumn} key={item.id}>
            <header> {t('footer.' + item.title)}</header>
            {item.value.map((item, index) => (
              <div
                className={style.itemList}
                key={index}
                onClick={() => {
                  window.open(item.link, '_blank')
                }}
              >
                {t('footer.' + item.label)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
