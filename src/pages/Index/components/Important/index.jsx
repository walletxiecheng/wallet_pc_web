import React from 'react'
import style from './index.module.less'
import { Flex } from 'antd'
import im1 from '@/assets/image/im-1.png'
import im2 from '@/assets/image/im-2.png'
import im3 from '@/assets/image/im-3.png'

import icon1 from '@/assets/icon/light/icon-safe-fill.svg'
import icon2 from '@/assets/icon/light/icon-ecology-fill.svg'
import icon3 from '@/assets/icon/light/icon-privacy-fill.svg'
import icon4 from '@/assets/icon/light/icon-chart-fill.svg'

const funDotList = [
  {
    id: 1,
    title: '安全便捷',
    content: '轻松掌管多链资产',
    icon: icon1
  },
  {
    id: 2,
    title: '丰富生态',
    content: '支持NFTs，DeFi，DApp，数据行情，行业资讯',
    icon: icon2
  },
  {
    id: 3,
    title: '注重隐私',
    content: '采用安全的加密协议，并只存在设备之上，保护数据安全。',
    icon: icon3
  },
  {
    id: 4,
    title: '行情数据',
    content: '查看各种加密货币的价格、市值排名、24小时交易量',
    icon: icon4
  }
]
export default function Important() {
  return (
    <div className={style.imContainer}>
      <Flex className={style.imFloor}>
        <div className={style.imBlock}>
          <h1>
            提供银行等级 <br />
            安全保障 多重验证
          </h1>
          <span>
            Token
            17是一款移动应用程序，提供银行级安全保障和多重验证功能，帮助您管理和保护数字资产。无论是加密货币、数字藏品还是其他数字资产，Token
            17都能满足您的需求，让您安心管理财务资产。
          </span>
        </div>
        <div className={style.imBlock}>
          <img src={im1} width={600} />
        </div>
      </Flex>

      <Flex className={style.imFloor}>
        <div className={style.imBlock}>
          <h3>轻松管理数字资产始终尽在掌握</h3>
          <span>
            Token
            17是连接区块链应用程序最简单、安全的方式，让您在与去中心化网络交互时始终掌控局面。它轻松管理数字资产，确保安全，并保持完全控制。
          </span>
          <img src={im2} width={600} />
        </div>

        <div className={style.imBlock}>
          <h3>只在您的设备上生成密码和密钥</h3>
          <span>
            Token
            17是连接区块链应用程序最简单、安全的方式，让您在与去中心化网络交互时始终掌控局面。它让您轻松、安全地管理数字资产，始终保持控制。
          </span>
          <img src={im3} width={600} />
        </div>
      </Flex>
      {/* 描述词 */}
      <Flex justify="space-between">
        {funDotList.map((item) => (
          <div className={style.funDot} key={item.id}>
            <Flex>
              <img src={item.icon} width={18} />
              <h4>{item.title}</h4>
            </Flex>
            <div>{item.content}</div>
          </div>
        ))}
      </Flex>
    </div>
  )
}
