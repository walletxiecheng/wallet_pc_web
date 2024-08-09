import React, { useState } from 'react'
import '@/assets/css/toast.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { useRef } from 'react'
import { Flex } from 'antd'
import { bindAccountInfo } from '@/service'
import { useUserStore } from '@/stores'
import { useNavigate } from 'react-router-dom'
import { toggleFocus } from '@/common/method'
import { showSuccess, showError } from '@/common/message'

export default function EmailVerity({ email, toggleShowVerify, showVerify }) {
  const { userInfo, setUserInfo } = useUserStore()
  const navigate = useNavigate()
  // 输入框列表
  const inputRefs = useRef([])
  // 切换焦点
  const [isBind, setBind] = useState(false)

  // 绑定邮箱
  const bindEmailHandler = async () => {
    let code = []
    inputRefs.current.map((item, index) => {
      if (item.value === '') {
        return
      }
      code[index] = item.value
    })
    if (code.length < 6) {
      return showError('请输入验证码')
    }
    const verifyCode = code.join('')
    const req = {
      id: userInfo.commercial_id,
      account: email,
      account_type: 'email',
      verify_code: verifyCode
    }
    try {
      await bindAccountInfo(req)
      let data = userInfo
      data.email = email
      setUserInfo(data)

      showSuccess('绑定成功')
      // // 关闭弹窗
      toggleShowVerify(false)
    } catch (err) {
      if (err?.code === 1) {
        return showError('参数校验错误')
      }
      if (err?.code === 3) {
        return showError('验证码错误')
      }
    }
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
        <div className="description">
          验证码发送至：{email} <br />
          邮箱验证码可能被判定为垃圾邮件，请注意查收。
        </div>
      </div>
      <div className="main">
        <Flex className="inputEmailList">
          {Array(6)
            .fill(null)
            .map((item, index) => (
              <input
                type="text"
                className="inputItem"
                key={index}
                maxLength={1}
                ref={(el) => (inputRefs.current[index] = el)}
                onKeyUp={(event) => {
                  toggleFocus(inputRefs, event, index)
                  setBind(true)
                }}
              />
            ))}
        </Flex>
        <Flex
          justify="right"
          style={{
            marginTop: 'var(--spacing-6)',
            color: 'var(--color-text-link)'
          }}
        >
          重新发送
        </Flex>
        <button
          onClick={bindEmailHandler}
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
