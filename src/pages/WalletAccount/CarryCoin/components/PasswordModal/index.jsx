import React, { useRef } from 'react'
import style from './index.module.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { Flex } from 'antd'
import { toggleFocus } from '@/common/method'
import { cryptoWithdraw } from '@/service'
import { showError } from '@/common/message'

export default function PasswordModal({
  pswStatus,
  togglePswStatus,
  goggleCode
}) {
  const inputRefs = useRef([])
  const caryCoinHandler = async () => {
    try {
      await cryptoWithdraw()
    } catch (err) {
      showError('提币失败，请重试。')
    }
  }
  return (
    <div
      className={style.pswContainer}
      style={{ display: pswStatus ? 'block' : 'none' }}
    >
      <Flex
        onClick={() => {
          togglePswStatus(false)
        }}
      >
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
              onKeyUp={(event) => toggleFocus(inputRefs, event, index)}
            />
          ))}
      </Flex>
      <div className={style.link}> 忘记密码?</div>
      <button className={style.confirmButton} onClick={caryCoinHandler}>
        确认
      </button>
    </div>
  )
}
