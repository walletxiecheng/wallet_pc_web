import React from 'react'
import { Layout, Menu } from 'antd'
const { Sider } = Layout
// 侧边导航栏
export default function SideMenu() {
  return (
    <div>
      <Sider
        width={200}
        style={{
          background: colorBgContainer
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0
          }}
          items={items2}
        />
      </Sider>
    </div>
  )
}
