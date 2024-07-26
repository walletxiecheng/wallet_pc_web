import { Flex, Space } from 'antd'
import React from 'react'
import logo from '@/assets/icon/dark/logo_light.svg'
import downloadNavIcon from '@/assets/icon/dark/icon-download-line.svg'
import languageNavIcon from '@/assets/icon/dark/icon-language-line.svg'
import modeNavIcon from '@/assets/icon/dark/icon-lightMod-line.svg'
import style from './index.module.less'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from '@/stores'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  // 更改主题
  const { toggleTheme } = useThemeStore()
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <nav className={style.navContainer}>
      <Flex justify="space-between">
        <Flex>
          <img src={logo} width={108} />
          <Space className={style.linkList}>
            <div>{t('nav.link1')}</div>
            <div>{t('nav.link3')}</div>
            <div>{t('nav.link4')}</div>
          </Space>
        </Flex>

        <Flex justify="space-around" className={style.aidedNavList}>
          <Space>
            <button
              className={style.loginButton}
              onClick={() => {
                navigate('login')
              }}
            >
              {t('nav.login')}
            </button>
            <button
              className={style.registerButton}
              onClick={() => {
                navigate('login')
              }}
            >
              {t('nav.register')}
            </button>
          </Space>
          <img src={downloadNavIcon} />
          <img src={languageNavIcon} />
          <img src={modeNavIcon} onClick={toggleTheme} />
        </Flex>
      </Flex>
    </nav>
  )
}
