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

import { useTranslation } from 'react-i18next'

const funDotList = [
  {
    id: 1,
    title: 'important.subTitle1',
    content: 'important.subDescription1',
    icon: icon1
  },
  {
    id: 2,
    title: 'important.subTitle2',
    content: 'important.subDescription2',
    icon: icon2
  },
  {
    id: 3,
    title: 'important.subTitle3',
    content: 'important.subDescription3',
    icon: icon3
  },
  {
    id: 4,
    title: 'important.subTitle4',
    content: 'important.subDescription4',
    icon: icon4
  }
]
export default function Important() {
  const { t } = useTranslation()
  return (
    <div className={style.imContainer}>
      <Flex className={style.imFloor}>
        <div className={style.imBlock}>
          <h1>{t('important.title1')}</h1>
          <span>{t('important.description1')}</span>
        </div>
        <div className={style.imBlock}>
          <img src={im1} width={600} />
        </div>
      </Flex>

      <Flex className={style.imFloor}>
        <div className={style.imBlock}>
          <h3>{t('important.title2')}</h3>
          <span>{t('important.description2')}</span>
          <img src={im2} width={600} />
        </div>

        <div className={style.imBlock}>
          <h3>{t('important.title3')}</h3>
          <span>{t('important.description3')}</span>
          <img src={im3} width={600} />
        </div>
      </Flex>
      {/* 描述词 */}
      <Flex justify="space-between">
        {funDotList.map((item) => (
          <div className={style.funDot} key={item.id}>
            <Flex>
              <img src={item.icon} width={18} />
              <h4>{t(item.title)}</h4>
            </Flex>
            <div>{t(item.content)}</div>
          </div>
        ))}
      </Flex>
    </div>
  )
}
