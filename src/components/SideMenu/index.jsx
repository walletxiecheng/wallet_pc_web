import React from 'react'
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Menu } from 'antd'
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1)
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1
        return {
          key: subKey,
          label: `option${subKey}`
        }
      })
    }
  }
)

const item = [
  {
    key: 'sub1',
    icon: React.createElement(UserOutlined),
    label: '系统管理',
    children: [
      {
        key: 1,
        label: '短信管理',
        path: '/index'
      },
      {
        key: 2,
        label: '报警管理'
      },
      {
        key: 3,
        label: '报警设置'
      },
      {
        key: 4,
        label: '管理员设置'
      },
      {
        key: 5,
        label: '操作日志设置'
      },
      {
        key: 6,
        label: '登陆日志管理'
      }
    ]
  },
  {
    key: 'sub2',
    icon: React.createElement(UserOutlined),
    label: '商户管理',
    children: [
      {
        key: 7,
        label: '账户管理'
      },
      {
        key: 8,
        label: '实名管理'
      },
      {
        key: 9,
        label: '余额管理'
      }
    ]
  }
]
export default function SideMenu() {
  const changeMenuItem = (e) => {
    console.log(e)
  }
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{
        height: '100%',
        borderRight: 0
      }}
      items={item}
    />
  )
}
