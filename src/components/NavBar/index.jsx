import { Flex, Space, Button } from 'antd'
import React from 'react'
import logo from '@/assets/icon/dark/logo_light.svg'
import downloadNavIcon from '@/assets/icon/dark/icon-download-line.svg'
import languageNavIcon from '@/assets/icon/dark/icon-language-line.svg'
import modeNavIcon from '@/assets/icon/dark/icon-lightMod-line.svg'
import style from './index.module.less'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from '@/stores'

export default function NavBar() {
  const { toggleTheme } = useThemeStore()
  const { t } = useTranslation()

  return (
    <nav className={style.navContainer}>
      <Flex justify="space-between">
        <Flex>
          <img src={logo} />
          <Space className={style.linkList}>
            <div>{t('nav.link1')}</div>
            <div>{t('nav.link2')}</div>
            <div>{t('nav.link3')}</div>
            <div>{t('nav.link4')}</div>
          </Space>
        </Flex>

        <Flex justify="space-around" className={style.aidedNavList}>
          <Space>
            <Button>{t('nav.login')}</Button>
            <Button>{t('nav.register')}</Button>
          </Space>
          <img src={downloadNavIcon} />
          <img src={languageNavIcon} />
          <img src={modeNavIcon} onClick={toggleTheme} />
        </Flex>
      </Flex>
    </nav>
  )
}
