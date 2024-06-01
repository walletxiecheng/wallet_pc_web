import React from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { menuItems, menuKeys } from './config'
import style from './index.module.less'
import { Layout } from 'antd'

export default function TkMenu() {
  const navigate = useNavigate()
  const handleClick = ({ item }) => {
    const path = item?.props?.path || ''
    if (!path) {
      return
    }

    navigate(path)
  }

  return (
    <Layout.Sider width="208px">
      <Menu
        mode="inline"
        items={menuItems}
        onClick={handleClick}
        className={style.menu}
        defaultOpenKeys={[menuKeys.systems]}
        defaultSelectedKeys={[menuKeys.smsManager]}
      />
    </Layout.Sider>
  )
}
