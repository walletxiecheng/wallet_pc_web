import { Flex, Image, Space } from 'antd'
import React from 'react'
import icon from '@/assets/icon/icon-dot-fill.svg'
import style from './index.module.less'
const brandList = [
  'Curve',
  'Instadapp',
  'Frax.finance',
  'Synthetix',
  'Dextools',
  'Beefy.finance',
  'Oceanprotocol',
  'Morpho',
  'Dappradar',
  'Abracadabra',
  'Boardroom',
  'Safe.global',
  'Alchemix'
]
export default function Brand() {
  return (
    <Flex justify="space-between" className={style.brandContainer}>
      {brandList.map((item, index) => (
        <Flex key={index}>
          <Space>
            <div>·</div>
            <div>{item}</div>
          </Space>
        </Flex>
      ))}
    </Flex>
  )
}
