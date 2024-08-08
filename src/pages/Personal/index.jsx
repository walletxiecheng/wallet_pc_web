import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import style from './index.module.less'
import avatar from '@/assets/image/avatar.png'
import { Flex, Tag, Space } from 'antd'
import iconSate from '@/assets/icon/light/icon-safer-line.svg'
import iconEmail from '@/assets/icon/light/icon-email-line.svg'
import iconPhone from '@/assets/icon/light/icon-phone-line.svg'
import iconGoggle from '@/assets/icon/light/icon-google-line.svg'
import iconPassword from '@/assets/icon/light/icon-password-line.svg'
import iconCode from '@/assets/icon/light/icon-code-line.svg'
import { useUserStore } from '@/stores'
import BindBaseTips from './components/BindBaseTips'
import BindEmail from './components/BindEmail'
import BindPhone from './components/BindPhone'
import Identity from './components/Identity'
import LoginPswToast from './components/LoginPswToast'
import { showSuccess } from '@/common/message'

const verifyList = [
  {
    id: 1,
    title: '安全等级：低',
    content: '强烈建立开启2项双重身份验证',
    icon: iconSate
  },
  {
    id: 2,
    title: '邮箱',
    content: '用于登录、提币、找回密码，修改安全设置、管理API时进行安全验证',
    icon: iconEmail
  },
  {
    id: 3,
    title: '手机',
    content: '用于登录、提币、找回密码，修改安全设置、管理API时进行安全验证',
    icon: iconPhone
  },
  {
    id: 4,
    title: '绑定谷歌验证器',
    content: '用于登录、提币、找回密码，修改安全设置、管理API时进行安全验证',
    icon: iconGoggle
  }
]

export default function Personal() {
  const { userInfo } = useUserStore()
  const emailStatus = userInfo.email !== '' || false
  const phoneStatus = userInfo.phone !== '' || false
  // 高级认证状态
  const largeStatus = userInfo.review_status

  // 谷歌状态
  const googleStatus = userInfo?.google_verify_status
  // 资金密码状态
  const has_fund_password = userInfo?.has_fund_password
  //提示认证
  const [showBindTips, setShowBindTips] = useState(false)
  const toggleTipsStatus = (status) => {
    setShowBindTips(status)
  }

  //邮箱弹窗的显示与隐藏
  const [showEmail, setShowEmail] = useState(false)
  const toggleEmail = (status) => {
    setShowEmail(status)
  }

  // 手机号弹窗的显示与隐藏
  const [showPhone, setShowPhone] = useState(false)
  const togglePhone = (status) => {
    setShowPhone(status)
  }

  // 设置身份验证
  const [showIdentity, setShowIdentity] = useState(false)
  const toggleShowIdentity = (status) => {
    setShowIdentity(status)
  }

  const checkBaseAuth = () => {
    console.log(userInfo)
    if ((!userInfo.email || !useUserStore, phone)) {
      toggleTipsStatus(true)
    } else {
      showSuccess('您已完成基础认证')
    }
  }
  const [status, setStatus] = useState(false)
  return (
    <>
      <NavBar />
      <BindBaseTips
        showBindTips={showBindTips}
        toggleTipsStatus={toggleTipsStatus}
      />
      <BindEmail
        showEmail={showEmail}
        toggleEmail={toggleEmail}
        email={userInfo.email}
      />
      <BindPhone
        showPhone={showPhone}
        togglePhone={togglePhone}
        phone={userInfo.phone}
      />
      <Identity
        showIdentity={showIdentity}
        toggleShowIdentity={toggleShowIdentity}
      />
      <LoginPswToast status={status} setStatus={setStatus} />

      <div className={style.personalContainer}>
        <div className={style.info}>
          <Flex>
            <Flex align="center" justify="center">
              <img src={avatar} width={52} />
            </Flex>
            <div className={style.title}>
              <header>{userInfo.name}</header>
              <div className={style.time}>
                最后登录时间：
                <span style={{ marginRight: 10 }}>
                  {userInfo.last_login_time || '暂无'}
                </span>
                IP：
                <span>{userInfo.last_login_ip || '暂无'}</span>
              </div>
            </div>
          </Flex>

          <div className={style.card}>
            <header>
              <div className={style.title}>身份认证</div>
            </header>
            <div className={style.description}>
              完成身份认证，有助于保护账户安全，提高提现额度及交易权限
            </div>

            <Flex>
              <button onClick={checkBaseAuth}>基础认证</button>
              <button>法币高级认证</button>
            </Flex>
          </div>
        </div>
        <div className={style.verify}>
          <header>双重身份验证</header>
          <div className={style.verifyList}>
            {verifyList.map((item) => (
              <Flex
                justify="space-between"
                key={item.id}
                className={style.verifyItem}
                style={{ border: item.id === 4 ? 'none' : '' }}
              >
                <Flex>
                  <div className={style.imgBox}>
                    <img src={item.icon} />
                  </div>
                  <div className={style.header}>
                    <div className={style.title}>{item.title}</div>
                    <span className={style.content}>{item.content}</span>
                  </div>
                </Flex>

                {item.id === 1 && (
                  <Space>
                    <button style={{ width: 70 }}>关闭验证</button>
                  </Space>
                )}
                {item.id === 2 && (
                  <Space>
                    <div>{userInfo?.email}</div>
                    <button
                      style={{ display: emailStatus ? 'none' : 'block' }}
                      onClick={() => {
                        toggleEmail(true)
                      }}
                    >
                      绑定
                    </button>
                    <button
                      style={{ display: emailStatus ? 'block' : 'none' }}
                      onClick={() => {
                        toggleEmail(true)
                      }}
                    >
                      换绑
                    </button>
                  </Space>
                )}
                {item.id === 3 && (
                  <Space>
                    <div>{userInfo?.phone}</div>
                    <button
                      style={{ display: phoneStatus ? 'none' : 'block' }}
                      onClick={() => {
                        togglePhone(true)
                      }}
                    >
                      绑定
                    </button>
                    <button
                      style={{ display: phoneStatus ? 'block' : 'none' }}
                      onClick={() => {
                        togglePhone(true)
                      }}
                    >
                      换绑
                    </button>
                  </Space>
                )}
                {item.id === 4 && (
                  <Space>
                    {/* <div>2647418717@qq.com</div> */}

                    <button
                      style={{ display: googleStatus ? 'block' : 'none' }}
                      // onClick={() => {
                      //   setStatus(true)
                      // }}
                    >
                      已绑定
                    </button>
                    <button
                      style={{ display: googleStatus ? 'none' : 'block' }}
                      onClick={() => {
                        setStatus(true)
                      }}
                    >
                      绑定
                    </button>
                  </Space>
                )}
              </Flex>
            ))}
          </div>
        </div>
        <div className={style.passWordManager}>
          <header>安全密码管理</header>
          <div className={style.passwordList}>
            <Flex justify="space-between" className={style.passwordItem}>
              <Flex>
                <div className={style.imgBox}>
                  <img src={iconPassword} />
                </div>
                <div>
                  <div className={style.title}>登录密码</div>
                  <span className={style.content}>用于保护账户安全</span>
                </div>
              </Flex>
              <div>
                <button>修改</button>
              </div>
            </Flex>
            <Flex
              justify="space-between"
              className={style.passwordItem}
              style={{ borderTop: '1px solid var(--color-border-white8)' }}
            >
              <Flex>
                <div className={style.imgBox}>
                  <img src={iconCode} />
                </div>
                <div>
                  <div className={style.title}>资金密码</div>
                  <span className={style.content}>用于保护资金安全</span>
                </div>
              </Flex>
              <div>
                {/* <button>修改</button> */}
                <button
                  style={{ display: has_fund_password ? 'none' : 'block' }}
                  onClick={() => {
                    toggleShowIdentity(true)
                  }}
                >
                  设置
                </button>
                <button
                  style={{ display: has_fund_password ? 'block' : 'none' }}
                  onClick={() => {
                    toggleShowIdentity(true)
                  }}
                >
                  修改
                </button>
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </>
  )
}
