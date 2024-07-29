import React from 'react'
import NavBar from '@/components/NavBar'
import style from './index.module.less'
import avatar from '@/assets/image/avatar.png'
import icon from '@/assets/icon/light/icon-safe-fill.svg'
import { Flex, Tag, Space } from 'antd'

const verifyList = [
  {
    id: 1,
    title: '安全等级：低',
    content: '强烈建立开启2项双重身份验证',
    icon: icon
  },
  {
    id: 2,
    title: '邮箱',
    content: '用于登录、提币、找回密码，修改安全设置、管理API时进行安全验证',
    icon: icon
  },
  {
    id: 3,
    title: '手机',
    content: '用于登录、提币、找回密码，修改安全设置、管理API时进行安全验证',
    icon: icon
  },
  {
    id: 4,
    title: '绑定谷歌验证器',
    content: '用于登录、提币、找回密码，修改安全设置、管理API时进行安全验证',
    icon: icon
  }
]
export default function Personal() {
  return (
    <>
      <NavBar />
      <div className={style.personalContainer}>
        <div className={style.info}>
          <Flex>
            <Flex align="center" justify="center">
              <img src={avatar} width={52} />
            </Flex>
            <div>
              <div>用户昵称</div>
              <div>
                最后登录时间：<span>2024-6.24</span>
                IP:<span>103.153.125.148</span>
              </div>
            </div>
          </Flex>

          <div className={style.card}>
            <header>
              身份认证 <Tag color="red">待审核</Tag>
              <Tag color="green">已通过</Tag>
            </header>
            <Flex>
              <div>基础认证</div>
              <div>法币高级认证</div>
            </Flex>
          </div>
        </div>
        <div className={style.verify}>
          <header>双重身份验证</header>
          <div className={style.verifyList}>
            {verifyList.map((item, index) => (
              <Flex
                justify="space-between"
                key={item.id}
                className={style.verifyItem}
              >
                <Flex>
                  <div>
                    <img src={item.icon} />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <span>{item.content}</span>
                  </div>
                </Flex>

                {item.id === 1 && (
                  <Space>
                    <div>关闭验证</div>
                  </Space>
                )}
                {item.id === 2 && (
                  <Space>
                    {/* <span>2647418717@qq.com</span> */}
                    <div>绑定</div>
                  </Space>
                )}
                {item.id === 3 && (
                  <Space>
                    {/* <span>2647418717@qq.com</span> */}
                    <div>绑定</div>
                  </Space>
                )}
                {item.id === 4 && (
                  <Space>
                    {/* <span>2647418717@qq.com</span> */}
                    <div>绑定</div>
                  </Space>
                )}
              </Flex>
            ))}
          </div>
        </div>
        <div className={style.passWordManager}>
          <header>安全密码管理</header>
          <div>
            <Flex justify="space-between">
              <Flex>
                <div>
                  <img src={icon} />
                </div>
                <div>
                  <div>登录密码</div>
                  <span>用于保护账户安全</span>
                </div>
              </Flex>
              <div>修改</div>
            </Flex>

            <Flex justify="space-between">
              <Flex>
                <div>
                  <img src={icon} />
                </div>
                <div>
                  <div>资金密码</div>
                  <span>用于保护资金安全</span>
                </div>
              </Flex>
              <div>设置</div>
            </Flex>
          </div>
        </div>
      </div>
    </>
  )
}
