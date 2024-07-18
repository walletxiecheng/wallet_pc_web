import { Flex, Space, Button } from 'antd'
import React from 'react'
import logo from '@/assets/icon/logo_light.svg'
import downloadNavIcon from '@/assets/icon/icon-download-line.svg'
import languageNavIcon from '@/assets/icon/icon-language-line.svg'
import modeNavIcon from '@/assets/icon/icon-lightMod-line.svg'
import style from './index.module.less'

export default function NavBar({ toggleColorMode }) {
  return (
    <nav className={style.navContainer}>
      <Flex justify="space-between">
        <Flex>
          <img src={logo} />
          <Space className={style.linkList}>
            <div>首页</div>
            <div>一键买币</div>
            <div>现货交易</div>
            <div>快速兑换</div>
          </Space>
        </Flex>

        <Flex justify="space-around" className={style.aidedNavList}>
          <Space>
            <Button>登陆</Button>
            <Button>注册</Button>
          </Space>
          <img src={downloadNavIcon} />
          <img src={languageNavIcon} />
          <img src={modeNavIcon} onClick={() => {}} />
        </Flex>
      </Flex>
    </nav>
  )
}
