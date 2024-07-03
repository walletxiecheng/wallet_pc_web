import React, { useState } from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { menuItems, menuKeys } from './config'
import style from './index.module.less'
import { Layout } from 'antd'

export default function TkMenu() {
  const [openKeys, setOpenKeys] = useState([menuKeys.systems])
  const [selectKey, setSelectKey] = useState([menuKeys.smsManager])

  const navigate = useNavigate()
  const handleClick = (props) => {
    const { item } = props
    setOpenKeys()
    const path = item?.props?.path || '' //waring: 可能性bug
    if (!path) {
      return
    }

    navigate(path)
  }

  return (
    <Layout.Sider width="208px" theme="light">
      <Menu
        mode="inline"
        items={menuItems}
        onClick={handleClick}
        className={style.menu}
        defaultOpenKeys={openKeys}
        defaultSelectedKeys={selectKey}
      />
    </Layout.Sider>
  )
}
