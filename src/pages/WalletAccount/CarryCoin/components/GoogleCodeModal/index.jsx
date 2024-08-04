import React, { useRef, useState } from 'react'
import style from './index.module.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { Flex } from 'antd'
import leftArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'
import { showWarning } from '@/common/message'
import { toggleFocus } from '@/common/method'
import PasswordModal from '../PasswordModal'

export default function GoogleCodeModal({
  showGoogleModal,
  toggleGoogleModal
}) {
  const inputRefs = useRef([])

  const [pswStatus, setPswStatus] = useState(false)
  const togglePswStatus = (status) => {
    setPswStatus(status)
  }
  // 计算输入框
  const codeComputed = () => {
    const goggleCode = []
    inputRefs.current.map((item, index) => {
      goggleCode[index] = item.value
    })
    return goggleCode.join('')
  }

  // 车看
  const check = () => {
    const goggleCode = codeComputed()
    if (goggleCode.length < 6) {
      return showWarning('验证码长度不足')
    }
    togglePswStatus(true)
    toggleGoogleModal(false)
  }
  return (
    <>
      <PasswordModal
        togglePswStatus={togglePswStatus}
        pswStatus={pswStatus}
        goggleCode={codeComputed()}
      />
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
          <span>返回</span>
        </Flex>

        <div className={style.title}>
          <h3>谷歌验证码</h3>
          <p>
            验证码发送至：21313@gmail.com <br />
            邮箱验证码可能被判定为垃圾邮件，请注意查收。
          </p>
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
              />
            ))}
        </Flex>
        <div className={style.link}> 忘记密码?</div>
        <button className={style.confirmButton} onClick={check}>
          确认
        </button>
      </div>
    </>
  )
}
