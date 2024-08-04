import React, { useRef } from 'react'
import style from './index.module.less'
import iconArrowLine from '@/assets/icon/light/icon-arrow-left-line.png'
import { Flex } from 'antd'
import { showError } from '@/common/message'
import { toggleFocus } from '@/common/method'

export default function Verify({ toggleCurrentStatus }) {
  const inputRefs = useRef([])

  // 邮箱验证码
  const handleVerifyCodeEmail = () => {
    const verifyCode = []
    inputRefs.current.map((current, index) => {
      if (current.value === '') {
        return
      }
      verifyCode[index] = current.value
    })
    if (verifyCode.length < 6) {
      return showError('验证码错误')
    }

    // verifyCode = verifyCode.join()

    // 调邮箱验证码的接口
    toggleCurrentStatus(3)
  }
  return (
    <div className={style.verifyContainer}>
      <div
        className={style.back}
        onClick={() => {
          toggleCurrentStatus(1)
        }}
      >
        <img src={iconArrowLine} width={16} />
        <span>返回</span>
      </div>
      <div className={style.email}>
        <header>
          <h3>请输入验证码</h3>
          <span>
            验证码发送至 21313@gmail.com
            <br />
            邮箱验证码可能判定为垃圾邮件，请注意查收
          </span>
        </header>
        <div>
          <Flex className={style.EmailInput}>
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
          <div className={style.send}>重新发送</div>
          <button onClick={handleVerifyCodeEmail}>下一步</button>
        </div>
      </div>
    </div>
  )
}
