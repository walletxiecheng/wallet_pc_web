import React, { useRef } from 'react'
import style from './index.module.less'
import iconArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'
import { Flex } from 'antd'
import { useRequest } from 'ahooks'
import { bindGoogleAuth, getGoogleAuth } from '@/service'
import { QRCode } from 'antd'
import { toggleFocus, codeComputed } from '@/common/method'
import { showError, showSuccess } from '@/common/message'
import { useUserStore } from '@/stores'

// 绑定谷歌验证码
export default function BindGoogleToast({ googleStatus, setGoogleStatus }) {
  const { userInfo, setUserInfo } = useUserStore()

  const inputRefs = useRef([])
  // 获取谷歌验证码
  const getRequestHandler = async () => {
    try {
      const { data } = await getGoogleAuth()
      return data
    } catch (err) {}
  }
  const { data: secretData } = useRequest(getRequestHandler)

  //绑定谷歌验证器
  const bindGoogleAuthHandler = async () => {
    const code = codeComputed(inputRefs)
    const req = {
      secret: secretData?.secret,
      code: code
    }
    try {
      await bindGoogleAuth(req)
      const google_verify_status = true
      setUserInfo({ ...userInfo, google_verify_status })
      showSuccess('绑定成功')
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    } catch (err) {
      return showError('验证码错误，请重试。')
    }
  }
  return (
    <div
      className={style.googleContainer}
      style={{ display: googleStatus ? 'block' : 'none' }}
    >
      <Flex
        onClick={() => {
          setGoogleStatus(false)
        }}
      >
        <img src={iconArrowLine} width={16} />
        <span>返回</span>
      </Flex>
      <header>
        <h3>绑定验证器</h3>
        <span>通过谷歌身份验证器扫描该二维码以绑定</span>
      </header>

      <div className={style.qrCode}>
        <QRCode
          value={secretData?.secret_url || 'abc'}
          style={{ background: '#fff' }}
        />
      </div>

      <div>
        <Flex className={style.codeList} justify="space-around">
          {Array(6)
            .fill(null)
            .map((item, index) => (
              <input
                type="text"
                key={index}
                maxLength={1}
                ref={(el) => (inputRefs.current[index] = el)}
                onKeyUp={(event) => toggleFocus(inputRefs, event, index)}
                style={{ width: 52 }}
              />
            ))}
        </Flex>
        <button
          onClick={() => {
            bindGoogleAuthHandler()
          }}
        >
          确认
        </button>
      </div>
    </div>
  )
}
