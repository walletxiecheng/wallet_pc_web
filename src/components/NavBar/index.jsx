import { Flex, Space, Dropdown, Button } from 'antd'
import React, { useState } from 'react'
import logo from '@/assets/icon/dark/logo_light.svg'
import downloadNavIcon from '@/assets/icon/dark/icon-download-line.svg'
import languageNavIcon from '@/assets/icon/dark/icon-language-line.svg'
import modeNavIcon from '@/assets/icon/dark/icon-lightMod-line.svg'
import style from './index.module.less'
import { useTranslation } from 'react-i18next'
import { useThemeStore, useTokenStore } from '@/stores'
import { useNavigate } from 'react-router-dom'
import avatar from '@/assets/image/avatar.png'
import iconArrowTopFill from '@/assets/icon/light/icon-arrow-top-fill.png'
import iconArrowBottomFill from '@/assets/icon/light/icon-arrow-down-fill.png'
import iconSpotLine from '@/assets/icon/light/icon-spot-line.svg'
import iconHistoryLine from '@/assets/icon/light/icon-history-line.svg'

import { URLS } from '@/routes/urls'

export default function NavBar() {
  // 更改主题
  const { toggleTheme } = useThemeStore()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [icon, setIcon] = useState(iconArrowBottomFill)
  // 判断是否有token
  const { token } = useTokenStore()

  // 钱包下拉菜单
  const walletDropdownItems = [
    {
      key: 'account',
      label: (
        <div
          onClick={() => {
            navigate(URLS.walletAccount)
          }}
        >
          <img src={iconSpotLine} />
          账户
        </div>
      )
    },
    {
      key: 'walletHistory',
      label: (
        <div
          onClick={() => {
            navigate(URLS.walletRecord)
          }}
        >
          <img src={iconHistoryLine} />
          钱包历史记录
        </div>
      )
    }
  ]

  // 钱包下拉菜单
  const userCenterDropDownItems = [
    {
      key: 'account',
      label: (
        <div
          onClick={() => {
            navigate(URLS.personal)
          }}
        >
          <img src={iconSpotLine} />
          账户管理
        </div>
      )
    },
    {
      key: 'api',
      label: (
        <div
          onClick={() => {
            navigate(URLS.keyManager)
          }}
        >
          <img src={iconHistoryLine} />
          API管理
        </div>
      )
    },
    {
      key: 'logOut',
      label: (
        <div
          onClick={() => {
            // 退出登录
          }}
        >
          <img src={iconHistoryLine} />
          退出登录
        </div>
      )
    }
  ]

  return (
    <nav className={style.navContainer}>
      <Flex justify="space-between">
        <Flex>
          <img src={logo} width={108} />
          <Space className={style.linkList}>
            <div
              onClick={() => {
                navigate('/index')
              }}
            >
              {t('nav.link1')}
            </div>
            {/* <div>{t('nav.link3')}</div> */}
            <div
              onClick={() => {
                navigate('/personal')
              }}
            >
              账户
            </div>
          </Space>
        </Flex>

        <Flex justify="space-around" className={style.aidedNavList}>
          <Space style={{ display: token ? 'none' : 'flex' }}>
            <button
              className={style.loginButton}
              onClick={() => {
                navigate('/login')
              }}
            >
              {t('nav.login')}
            </button>
            <button
              className={style.registerButton}
              onClick={() => {
                navigate('/register')
              }}
            >
              {t('nav.register')}
            </button>
          </Space>

          <Flex justify="center" align="center">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Dropdown
                menu={{
                  items: walletDropdownItems
                }}
                placement="bottom"
                overlayClassName={style.dropdownBox}
                onOpenChange={(open) => {
                  if (open) {
                    setIcon(iconArrowTopFill)
                  } else {
                    setIcon(iconArrowBottomFill)
                  }
                }}
              >
                <Flex align="center">
                  <div>钱包</div>
                  <img src={icon} width={18} />
                </Flex>
              </Dropdown>
            </div>
            <Dropdown
              menu={{ items: userCenterDropDownItems }}
              placement="bottom"
            >
              <Flex style={{ height: '80px' }} align="center">
                <img src={avatar} width={32} style={{ marginLeft: 10 }} />
              </Flex>
            </Dropdown>
          </Flex>

          <img src={downloadNavIcon} />
          <img src={languageNavIcon} />
          <img src={modeNavIcon} />
          {/* onClick={toggleTheme}  */}
        </Flex>
      </Flex>
    </nav>
  )
}
