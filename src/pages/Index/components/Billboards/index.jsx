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
import { useRequest } from 'ahooks'
import { getAdvertisement } from '@/service'
import { groupArr } from '@/common/method'
const page1 = [banner01, banner02, banner03, banner04]
const page2 = [banner04, banner05, banner06, banner07]

export default function Billboards() {
  // 获取数据
  const { data: avdList } = useRequest(async () => {
    try {
      const { data } = await getAdvertisement()
      if (!data) {
        return []
      }
      return groupArr(data, 4)
    } catch (err) {}
  })
  // 当前页
  const [page, setPage] = useState(1)
  const carouselRef = useRef(null)

  // 上一页
  const onPrev = () => {
    carouselRef.current.prev()
    if (page === 1) {
      return setPage(1)
    }
    setPage(page - 1)
  }

  // 下一页
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
        {avdList?.map((item, idx1) => (
          <div key={idx1}>
            <Flex justify="space-between">
              {item.map((item2, idx2) => (
                <Image
                  src={item2.image_url}
                  width={282}
                  preview={false}
                  key={idx2}
                  onClick={() => {
                    window.open(item2.advertisement_url, '_blank')
                  }}
                  className={style.image}
                />
              ))}
            </Flex>
          </div>
        ))}
      </Carousel>
      <div className={style.moveBut} onClick={onNext}>
        <RightOutlined style={{ color: page === 2 ? '#626364' : '' }} />
      </div>
    </div>
  )
}
