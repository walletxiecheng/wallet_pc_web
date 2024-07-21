import React, { useState } from 'react'
import banner01 from '@/assets/image/banner01.png'
import banner02 from '@/assets/image/banner02.png'
import banner03 from '@/assets/image/banner03.png'
import banner04 from '@/assets/image/banner04.png'
import banner05 from '@/assets/image/banner05.png'
import banner06 from '@/assets/image/banner06.png'
import banner07 from '@/assets/image/banner07.png'
import style from './index.module.less'
import { useRef } from 'react'
import { Carousel, Flex, Image } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
const page1 = [banner01, banner02, banner03, banner04]
const page2 = [banner04, banner05, banner06, banner07]

const imageList = [
  banner01,
  banner02,
  banner03,
  banner04,
  banner05,
  banner06,
  banner07
]
export default function Billboards() {
  const [page, setPage] = useState(1)
  const carouselRef = useRef(null)
  const onPrev = () => {
    carouselRef.current.prev()
    if (page === 1) {
      return setPage(1)
    }
    setPage(page - 1)
  }
  const onNext = () => {
    carouselRef.current.next()
    if (page === 2) {
      return setPage(2)
    }
    setPage(page + 1)
  }
  return (
    <div className={style.billContainer}>
      <div className={style.moveBut} onClick={onPrev}>
        <LeftOutlined style={{ color: page === 1 ? '#626364' : '' }} />
      </div>
      <Carousel
        infinite={false}
        dots={false}
        className={style.carousel}
        ref={carouselRef}
      >
        <div style={{ width: '1200px' }}>
          <Flex>
            {page1.map((item, index) => (
              <Image
                src={item}
                preview={false}
                key={index}
                className={style.image}
              />
            ))}
          </Flex>
        </div>
        <div>
          <Flex>
            {page2.map((item, index) => (
              <Image
                src={item}
                preview={false}
                key={index}
                className={style.image}
              />
            ))}
          </Flex>
        </div>
      </Carousel>
      <div className={style.moveBut} onClick={onNext}>
        <RightOutlined style={{ color: page === 2 ? '#626364' : '' }} />
      </div>
    </div>
  )
}
