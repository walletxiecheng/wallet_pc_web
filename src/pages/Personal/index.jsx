import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import style from './index.module.less'
import avatar from '@/assets/image/avatar.svg'
import { Flex, Space, Switch } from 'antd'
// import iconSate from '@/assets/icon/light/icon-safer-line.svg'
import iconEmail from '@/assets/icon/light/icon-email-line.svg'
import iconPhone from '@/assets/icon/light/icon-phone-line.svg'
import iconGoggle from '@/assets/icon/light/icon-google-line.svg'
import iconPassword from '@/assets/icon/light/icon-password-line.svg'
import iconCode from '@/assets/icon/light/icon-code-line.svg'
import iconCopyLine from '@/assets/icon/light/icon-copy-line.svg'
import iconWhitelistLine from '@/assets/icon/light/icon-Whitelist-line.svg'
import { useUserStore } from '@/stores'
import BindBaseTips from './components/BindBaseTips'
import BindEmail from './components/BindEmail'
import BindPhone from './components/BindPhone'
import Identity from './components/Identity'
import LoginPswToast from './components/LoginPswToast'
import IpWhiteToast from './components/IpWhiteToast'
import { useNavigate } from 'react-router-dom'
import { showError, showSuccess } from '@/common/message'
import { URLS } from '@/routes/urls'
import StatusTag from '@/components/StatusTag'
import { useTranslation } from 'react-i18next'
import { settingWhiteIP } from '@/service'

const verifyList = [
  {
    id: 2,
    title: 'crypto.section1.title2',
    content: 'crypto.section1.content2',
    icon: iconEmail
  },
  {
    id: 3,
    title: 'crypto.section1.title3',
    content: 'crypto.section1.content3',
    icon: iconPhone
  },
  {
    id: 4,
    title: 'crypto.section1.title4',
    content: 'crypto.section1.content4',
    icon: iconGoggle
  },
  {
    id: 5,
    title: '白名单',
    content: '开启白名单时，仅授权地址可以登录',
    icon: iconWhitelistLine
  }
]

export default function Personal() {
  const navigate = useNavigate()
  const [status, setStatus] = useState(false)
  const { t } = useTranslation()
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

  //  白名单弹窗
  const [showIpWhite, setShowIpWhite] = useState(false)

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

  // 检查基础认证
  const checkBaseAuth = () => {
    if (!userInfo.email || !userInfo.phone) {
      toggleTipsStatus(true)
    } else {
      return showSuccess('您已完成基础认证')
    }
  }
  // 复制id
  const copyId = () => {
    try {
      navigator.clipboard.writeText(userInfo.commercial_id)
      showSuccess('复制成功')
    } catch (err) {
      showError('复制失败' + err)
    }
  }

  // 设置是否开启白名单
  const handleSetIpWhite = async (value) => {
    // 设置是否开启登录白名单
    const req = {
      open_white_list: value
    }
    try {
      await settingWhiteIP(req)
      if (value) {
        showSuccess('setting success')
      } else {
        showSuccess('close success')
      }
    } catch (err) {
      showError(err?.msg || err)
    }
  }

  return (
    <>
      <NavBar />
      <BindBaseTips
        showBindTips={showBindTips}
        toggleTipsStatus={toggleTipsStatus}
        toggleEmail={toggleEmail}
        togglePhone={togglePhone}
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
      {status && <LoginPswToast status={status} setStatus={setStatus} />}
      <IpWhiteToast showIpWhite={showIpWhite} setShowIpWhite={setShowIpWhite} />
      <div className={style.personalContainer}>
        <div className={style.info}>
          <Flex>
            <Flex align="center" justify="center">
              <img src={avatar} width={52} />
            </Flex>
            <div className={style.title}>
              <header>
                <div>{userInfo.name}</div>
                <div className={style.commercial}>
                  <span>
                    {t('crypto.commercial_id')}
                    {userInfo?.commercial_id}
                  </span>
                  <img
                    src={iconCopyLine}
                    width={14}
                    onClick={() => {
                      copyId()
                    }}
                  />
                </div>
              </header>
              <div className={style.time}>
                {t('crypto.lastLoginTime')}
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
              <div className={style.title}>
                <div>{t('crypto.authTitle')}</div>
                <StatusTag status={userInfo.personal_review_status} />
                <StatusTag status={userInfo.enterprise_review_status} />
              </div>
            </header>
            <div className={style.description}>{t('crypto.authDesc')}</div>

            <Space style={{ width: '500px' }}>
              <button className={style.button} onClick={checkBaseAuth}>
                {t('crypto.authLabel1')}
              </button>
              <button
                onClick={() => {
                  navigate(URLS.advancedAuth)
                }}
                className={style.button}
              >
                {t('crypto.authLabel2')}
              </button>
            </Space>
          </div>
        </div>
        <div className={style.verify}>
          <header>{t('crypto.section1.header')}</header>
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
                    <div className={style.title}>{t(item.title)}</div>
                    <span className={style.content}>{t(item.content)}</span>
                  </div>
                </Flex>
                {item.id === 2 && (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>{userInfo?.email}</div>
                    <button
                      className={style.button}
                      style={{
                        display: emailStatus ? 'none' : 'block'
                      }}
                      onClick={() => {
                        toggleEmail(true)
                      }}
                    >
                      {t('crypto.section1.binding')}
                    </button>
                    <button
                      className={style.button}
                      style={{
                        display: emailStatus ? 'block' : 'none',
                        marginLeft: 6
                      }}
                      onClick={() => {
                        toggleEmail(true)
                      }}
                    >
                      {t('crypto.section1.change')}
                    </button>
                  </div>
                )}
                {item.id === 3 && (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>{userInfo?.phone}</div>
                    <button
                      className={style.button}
                      style={{ display: phoneStatus ? 'none' : 'block' }}
                      onClick={() => {
                        togglePhone(true)
                      }}
                    >
                      {t('crypto.section1.binding')}
                    </button>
                    <button
                      className={style.button}
                      style={{
                        display: phoneStatus ? 'block' : 'none',
                        marginLeft: '6px'
                      }}
                      onClick={() => {
                        togglePhone(true)
                      }}
                    >
                      {t('crypto.section1.change')}
                    </button>
                  </div>
                )}
                {item.id === 4 && (
                  <div>
                    <button
                      className={style.button}
                      style={{ display: googleStatus ? 'block' : 'none' }}
                    >
                      {t('crypto.section1.bound')}
                    </button>
                    <button
                      style={{ display: googleStatus ? 'none' : 'block' }}
                      className={style.button}
                      onClick={() => {
                        setStatus(true)
                      }}
                    >
                      {t('crypto.section1.binding')}
                    </button>
                  </div>
                )}
                {item.id === 5 && (
                  <Flex align="center">
                    <Switch
                      className={style.switch}
                      defaultChecked={userInfo?.open_white_list}
                      onChange={(e) => {
                        handleSetIpWhite(e)
                      }}
                      style={{
                        height: 24,
                        width: 42,
                        marginRight: 5
                      }}
                    ></Switch>
                    <button
                      className={style.button}
                      onClick={() => {
                        setShowIpWhite(true)
                      }}
                    >
                      编辑
                    </button>
                  </Flex>
                )}
              </Flex>
            ))}
          </div>
        </div>
        <div className={style.passWordManager}>
          <header>{t('crypto.section2.header')}</header>
          <div className={style.passwordList}>
            <Flex justify="space-between" className={style.passwordItem}>
              <Flex>
                <div className={style.imgBox}>
                  <img src={iconPassword} />
                </div>
                <div>
                  <div className={style.title}>
                    {' '}
                    {t('crypto.section2.title1')}
                  </div>
                  <span className={style.content}>
                    {t('crypto.section2.content1')}
                  </span>
                </div>
              </Flex>
              <div>
                <button className={style.button}>
                  {t('crypto.section2.modify')}
                </button>
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
                  <div className={style.title}>
                    {t('crypto.section2.title2')}
                  </div>
                  <span className={style.content}>
                    {t('crypto.section2.title2')}
                  </span>
                </div>
              </Flex>
              <div>
                {/* <button>修改</button> */}
                <button
                  className={style.button}
                  style={{ display: has_fund_password ? 'none' : 'block' }}
                  onClick={() => {
                    toggleShowIdentity(true)
                  }}
                >
                  {t('crypto.section2.setUp')}
                </button>
                <button
                  className={style.button}
                  style={{
                    display: has_fund_password ? 'block' : 'none'
                  }}
                  onClick={() => {
                    toggleShowIdentity(true)
                  }}
                >
                  {t('crypto.section2.modify')}
                </button>
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </>
  )
}
