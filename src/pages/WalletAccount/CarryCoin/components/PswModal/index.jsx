import React, { useRef } from 'react'
import style from './index.module.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { Flex } from 'antd'

export default function PswModal() {
  const inputRefs = useRef([])
  const toggleFocus = (e, index) => {
    if (inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus()
    }
  }

  return (
    <div className={style.pswContainer}>
      <Flex>
        <img src={closeIcon} />
        <span>关闭</span>
      </Flex>

      <div className={style.title}>
        <h3>输入资金密码</h3>
        <p>请输入账户设置的资金密码以交易</p>
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
              onInput={(event) => toggleFocus(event, index)}
            />
          ))}
      </Flex>
      <div className={style.link}> 忘记密码?</div>
      <button className={style.confirmButton}>确认</button>
    </div>
  )
}
