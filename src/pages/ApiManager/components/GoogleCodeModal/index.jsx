import React, { useRef, useState } from 'react'
import style from './index.module.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { Flex } from 'antd'
import leftArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'
import { showError, showWarning } from '@/common/message'
import { toggleFocus } from '@/common/method'
import { getAccessKeys } from '@/service'

import '@/assets/css/public.css'
import KeyTip from '../KeyTip'

export default function GoogleCodeModal({
  showGoogleModal,
  toggleGoogleModal,
  uid
}) {
  const inputRefs = useRef([])
  const [accessKey, setAccessKey] = useState(null)
  const [showModal, setShowModal] = useState(false)
  // 计算输入框
  const codeComputed = () => {
    const goggleCode = []
    inputRefs.current.map((item, index) => {
      goggleCode[index] = item.value
    })
    return goggleCode.join('')
  }

  // 检测
  const check = async () => {
    const goggleCode = codeComputed()
    if (goggleCode.length < 6) {
      return showWarning('验证码长度不足')
    }
    const req = {
      google_code: goggleCode,
      key_id: uid
    }

    // 校验access key
    try {
      const { data } = await getAccessKeys(req)
      setAccessKey(data)
      setShowModal(true)

      toggleGoogleModal(false)
    } catch (err) {
      showError(err?.msg || err)
    }
  }

  const [active, setActive] = useState(false)

  // 确认按钮样式
  const toggleActive = () => {
    const data = codeComputed(inputRefs)
    if (data.length < 5) {
      setActive(false)
    } else {
      setActive(true)
    }
  }

  return (
    <>
      {showModal && (
        <KeyTip
          accessKey={accessKey}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <div
        className={style.pswContainer}
        style={{ display: showGoogleModal ? 'block' : 'none' }}
      >
        <Flex
          onClick={() => {
            toggleGoogleModal(false)
          }}
        >
          <img src={leftArrowLine} width={16} />
          <span>关闭</span>
        </Flex>

        <div className={style.title}>
          <h3>谷歌验证码</h3>
        </div>

        <Flex className={style.inputGroup}>
          {Array(6)
            .fill(null)
            .map((item, index) => (
              <input
                type="text"
                key={index}
                maxLength={1}
                ref={(el) => (inputRefs.current[index] = el)}
                onKeyUp={(event) => toggleFocus(inputRefs, event, index)}
                onKeyDown={toggleActive}
              />
            ))}
        </Flex>
        <button
          className={active ? 'activeBtn' : 'unActiveBtn'}
          onClick={check}
        >
          确认
        </button>
      </div>
    </>
  )
}
