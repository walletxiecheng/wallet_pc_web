import React, { useState } from 'react'
import '@/assets/css/toast.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { useRef } from 'react'
import { sendVerifyCode } from '@/service'
import { showError, showSuccess, showWarning } from '@/common/message'
import { Flex } from 'antd'
import PhoneVerity from './PhoneVerify'
import { validatePhone } from '@/common/regex'

export default function BindPhone({ showPhone, togglePhone, phone }) {
  const phoneInputRef = useRef()
  const codeSelectRef = useRef() //代码，默认86
  const [isSend, setIsSend] = useState(false) //控制按钮的样式
  const [showVerify, setShowVerify] = useState(false) //是否显示验证码

  const toggleShowVerify = (status) => {
    setShowVerify(status)
  }
  // 获取手机验证码
  const getVerifyCode = async () => {
    const req = {
      account_type: 'phone',
      verify_type: 'BindingEmailOrPhone',
      account:
        codeSelectRef?.current?.value + '-' + phoneInputRef?.current?.value
    }
    if (!validatePhone(phoneInputRef?.current?.value)) {
      return showWarning('Please enter a valid phone number')
    }
    try {
      await sendVerifyCode(req)
      togglePhone(false)
      setShowVerify(true)
      return showSuccess('发送验证码成功')
    } catch (err) {
      return showError(err.msg)
    }
  }
  return (
    //
    <>
      <PhoneVerity
        showVerify={showVerify}
        toggleShowVerify={toggleShowVerify}
        getVerifyCode={getVerifyCode}
        phone={
          codeSelectRef?.current?.value + '-' + phoneInputRef?.current?.value ||
          ''
        }
      />
      <div
        className="toast-container"
        style={{ display: showPhone ? 'flex' : 'none' }}
      >
        <header
          className="close-button"
          onClick={() => {
            togglePhone(false)
          }}
        >
          <img src={closeIcon} width={16} />
          关闭
        </header>
        <div className="top">
          <div className="title">{phone ? '换绑手机号' : '绑定手机号'}</div>
          <div className="description">
            {phone
              ? '更换绑定的手机号'
              : '绑定您的常用手机号更便于接受资金信息'}
          </div>
        </div>
        <div className="main">
          <Flex>
            <select className="select" ref={codeSelectRef} defaultValue={86}>
              <option value="852">+852</option>
              <option value="86">+86</option>
            </select>
            <input
              type="text"
              placeholder="请输入手机号"
              ref={phoneInputRef}
              defaultValue={phone}
              onInput={(e) => {
                setIsSend(e.target.value === '' ? false : true)
              }}
            />
          </Flex>
          <button
            onClick={getVerifyCode}
            style={{
              backgroundColor: isSend ? 'var(--color-fill-blue)' : '',
              opacity: isSend ? 1 : 0.4
            }}
          >
            获取验证码
          </button>
        </div>
      </div>
    </>
  )
}
