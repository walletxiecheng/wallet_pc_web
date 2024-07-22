import React from 'react'
import style from './index.module.less'
import { Flex } from 'antd'
import im1 from '@/assets/image/im-1.png'
import im2 from '@/assets/image/im-2.png'
import im3 from '@/assets/image/im-3.png'

export default function Important() {
  return (
    <div className={style.imContainer}>
      <Flex className={style.imFloor}>
        <div className={style.imBlock}>
          <header>提供银行等级 安全保障 多重验证</header>
          <span>token15XXXX</span>
        </div>
        <div className={style.imBlock}>
          <img src={im1} width={400} />
        </div>
      </Flex>

      <Flex className={style.imFloor}>
        <div className={style.imBlock}>
          <header>轻松管理数字资产始终竟在掌握</header>
          <span>token15XXXX</span>
          <img src={im2} width={400} />
        </div>

        <div className={style.imBlock}>
          <header>轻松管理数字资产始终竟在掌握</header>
          <span>token15XXXX</span>
          <img src={im3} width={400} />
        </div>
      </Flex>
    </div>
  )
}
