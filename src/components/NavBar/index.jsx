import { Flex, Space, Dropdown } from 'antd'
import React, { useState } from 'react'
import logo from '@/assets/icon/dark/logo_light.svg'
import downloadNavIcon from '@/assets/icon/dark/icon-download-line.svg'
import languageNavIcon from '@/assets/icon/dark/icon-language-line.svg'
import modeNavIcon from '@/assets/icon/dark/icon-lightMod-line.svg'
import style from './index.module.less'
import { useTranslation } from 'react-i18next'
import { useThemeStore, useTokenStore, useUserStore } from '@/stores'
import { useNavigate } from 'react-router-dom'
import avatar from '@/assets/image/avatar.svg'
import iconArrowTopFill from '@/assets/icon/light/icon-arrow-top-fill.png'
import iconArrowBottomFill from '@/assets/icon/light/icon-arrow-down-fill.png'
import iconSpotLine from '@/assets/icon/light/icon-spot-line.svg'
import iconHistoryLine from '@/assets/icon/light/icon-history-line.svg'
import { URLS } from '@/routes/urls'
import { useLocation } from 'react-router-dom'
import { loginOut } from '@/service'
import { showSuccess, showWarning } from '@/common/message'

const navLink = [
  {
    id: 1,
    label: 'link1',
    url: URLS.index
  },
  {
    id: 2,
    label: 'link2',
    url: URLS.personal
  },
  {
    id: 2,
    label: 'link3',
    url: URLS.privacy
  },
  {
    id: 2,
    label: 'link4',
    url: URLS.agreement
  }
]

export default function NavBar() {
  const { i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)
  console.log(currentLanguage)
  const location = useLocation()
  // 当前路由
  const pathname = location.pathname
  // 更改主题
  const { toggleTheme } = useThemeStore()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [icon, setIcon] = useState(iconArrowBottomFill)
  // 判断是否有token
  const { token, setToken } = useTokenStore()
  const { setUserInfo } = useUserStore()

  const change = () => {
    i18n.changeLanguage(currentLanguage === 'zh' ? 'en' : 'zh')
    setCurrentLanguage(i18n.language)
  }

  const linkTo = (url) => {
    if (!token && url !== '/index') {
      return showWarning('暂未登录')
    }
    navigate(url)
  }
  // 退出登录
  const loginOutHandler = async () => {
    navigate('/index')
    setToken(null)
    setUserInfo(null)
    await loginOut()
  }

  // 钱包下拉菜单
  const walletDropdownItems = [
    {
      key: 'account',
      label: (
        <div
          onClick={() => {
            linkTo(URLS.walletAccount)
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
            linkTo(URLS.walletRecord)
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
            linkTo(URLS.personal)
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
            linkTo(URLS.keyManager)
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
        <div onClick={loginOutHandler}>
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
            {navLink.map((item) => (
              <div
                className={item.url === pathname ? style.navActive : ''}
                key={item.id}
                onClick={() => {
                  linkTo(item.url)
                }}
              >
                {t(`nav.${item.label}`)}
              </div>
            ))}
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

          <Flex
            justify="center"
            align="center"
            style={{ display: token ? 'flex' : 'none' }}
          >
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
          <img src={languageNavIcon} onClick={change} />
          <img src={modeNavIcon} />
        </Flex>
      </Flex>
    </nav>
  )
}
