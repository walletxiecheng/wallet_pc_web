import React from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { menuItems, menuKeys } from './config'
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
        defaultOpenKeys={[menuKeys.systems]}
        defaultSelectedKeys={[menuKeys.smsManager]}
        style={{ height: '100%', borderRight: 0 }}
      />
    </Layout.Sider>
  )
}
