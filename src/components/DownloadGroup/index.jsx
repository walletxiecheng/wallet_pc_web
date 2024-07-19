import React, { useState } from 'react'
import apple from '@/assets/icon/icon-apple-fill.svg'
import android from '@/assets/icon/icon-android-fill.svg'
import appleLight from '@/assets/icon/light/icon-apple-fill.svg'
import androidLight from '@/assets/icon/light/icon-android-fill.svg'
import { Flex, Space, Image } from 'antd'
import style from './index.module.less'
export default function DownLoadGroup() {
  const [appleImg, setAppleImg] = useState(appleLight)
  const [androidImg, setAndroidImg] = useState(androidLight)

  return (
    <div className={style.groupContainer}>
      {/* 苹果 */}
      <Flex
        className={style.downLoadBtn}
        onMouseOver={() => {
          setAppleImg(apple)
        }}
        onMouseOut={() => {
          setAppleImg(appleLight)
        }}
      >
        <Space>
          <Image width={36} src={appleImg} />
          <div>
            <div>Download on the</div>
            <div className={style.strongText}>Apple Store</div>
          </div>
        </Space>
      </Flex>
      <Flex
        className={style.downLoadBtn}
        onMouseOver={() => {
          setAndroidImg(android)
        }}
        onMouseOut={() => {
          setAndroidImg(androidLight)
        }}
      >
        <Space>
          <Image width={36} src={androidImg} />
          <div>
            <div>Download APK</div>
            <div className={style.strongText}>Android</div>
          </div>
        </Space>
      </Flex>
    </div>
  )
}
