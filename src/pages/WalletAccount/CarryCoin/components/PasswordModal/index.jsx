import React, { useRef } from 'react'
import style from './index.module.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { Flex } from 'antd'
import { toggleFocus, codeComputed } from '@/common/method'
import { cryptoWithdraw } from '@/service'
import { showError, showSuccess } from '@/common/message'

export default function PasswordModal({
  pswStatus,
  togglePswStatus,
  goggleCode,
  data
}) {
  const inputRefs = useRef([])
  const caryCoinHandler = async () => {
    const req = data
    req.password = codeComputed(inputRefs)
    req.google_auth_code = goggleCode
    try {
      // req.
      await cryptoWithdraw(req)
      showSuccess('提币成功')
    } catch (err) {
      showError('提币失败，请重试。')
      // showError(err)
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
