import React from 'react'
import dapp from '@/assets/icon/icon-dapp-sp.svg'
import { Image, Flex } from 'antd'
import style from './index.module.less'
import { useTranslation } from 'react-i18next'

const data = [
  {
    id: 1,
    title: 'funDescribe.title1',
    content: 'funDescribe.content1',
    image: dapp
  },
  {
    id: 2,
    title: 'funDescribe.title2',
    content: 'funDescribe.content2',
    image: ''
  },
  {
    id: 3,
    title: 'funDescribe.title3',
    content: 'funDescribe.content3',
    image: ''
  },
  {
    id: 4,
    title: 'funDescribe.title4',
    content: 'funDescribe.content4',
    image: ''
  }
]
export default function FunDescribe() {
  const { t } = useTranslation()
  return (
    <Flex className={style.funContainer}>
      {data.map((item) => (
        <div key={item.id} className={style.funItem}>
          <Image src={dapp} width={112} />
          <div className={style.content}>
            <p>{t(item.title)}</p>
            <span>{t(item.content)}</span>
          </div>
        </div>
      ))}
    </Flex>
  )
}
