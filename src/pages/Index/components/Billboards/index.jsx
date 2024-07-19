import { Carousel, Flex, Image, Space } from 'antd'
import React from 'react'
import banner01 from '@/assets/image/banner01.png'
import banner02 from '@/assets/image/banner02.png'
import banner03 from '@/assets/image/banner03.png'
import banner04 from '@/assets/image/banner04.png'
import banner05 from '@/assets/image/banner05.png'
import banner06 from '@/assets/image/banner06.png'
import banner07 from '@/assets/image/banner07.png'

import style from './index.module.less'

const boardList = [banner01, banner02, banner03, banner04]
export default function Billboards() {
  return (
    <div className={style.boardContainer}>
      <Carousel arrows={true} dots={false} infinite={false}>
        <Flex>
          <Flex justify="space-around" align="center">
            1
            {boardList.map((url, index) => (
              <Image src={url} key={index} width={280} preview={false} />
            ))}
            2
          </Flex>
        </Flex>
      </Carousel>
    </div>
  )
}
