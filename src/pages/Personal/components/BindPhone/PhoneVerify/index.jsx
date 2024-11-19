import React, { useState } from 'react'
import '@/assets/css/toast.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { useRef } from 'react'
import { showError, showSuccess } from '@/common/message'
import { Flex } from 'antd'
import { bindAccountInfo } from '@/service'
import { useUserStore } from '@/stores'
import { configConsumerProps } from 'antd/es/config-provider'

export default function PhoneVerity({
  phone,
  toggleShowVerify,
  showVerify,
  getVerifyCode
}) {
  const { userInfo, setUserInfo } = useUserStore()
  // 验证码
  const verifyCodeRef = useRef()

  const [isBind, setBind] = useState(false)

  const [isReload, setIsReload] = useState(false)

  // 绑定手机
  const bindPhoneHandler = async () => {
    const req = {
      id: userInfo.commercial_id,
      account: phone,
      account_type: 'phone',
      verify_code: verifyCodeRef.current.value
    }
    try {
      await bindAccountInfo(req)
      let data = userInfo
      data.phone = phone
      setUserInfo(data)
      showSuccess('绑定成功')
      // 关闭弹窗
      toggleShowVerify(false)
      // window.location.reload()
    } catch (err) {
      return showError(err.msg)
    }
  }

  const reloadSend = () => {
    setIsReload(true)
    getVerifyCode()
  }

  return (
    <div
      className="toast-container"
      style={{ height: 368, visibility: showVerify ? '' : 'hidden' }}
    >
      <header
        className="close-button"
        onClick={() => {
          toggleShowVerify(false)
        }}
      >
        <img src={closeIcon} width={16} />
        返回
      </header>
      <div className="top">
        <div className="title">请输入验证码</div>
        <div className="description">验证码发送至：{phone}</div>
      </div>
      <div className="main">
        <input
          type="text"
          placeholder="请输入验证码"
          style={{ width: '100%' }}
          ref={verifyCodeRef}
          onKeyDown={(e) => {
            setBind(e.target.value.length <= 1 ? false : true)
          }}
        />
        <Flex
          justify="right"
          onClick={reloadSend}
          style={{
            marginTop: 'var(--spacing-6)',
            color: 'var(--color-text-link)'
          }}
        >
          重新发送
        </Flex>
        <button
          onClick={bindPhoneHandler}
          style={{
            backgroundColor: isBind ? 'var(--color-fill-blue)' : '',
            opacity: isBind ? 1 : 0.4
          }}
        >
          确认
        </button>
      </div>
    </div>
  )
}
