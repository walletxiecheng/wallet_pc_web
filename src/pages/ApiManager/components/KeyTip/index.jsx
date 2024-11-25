import React from 'react'
import style from './index.module.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import copy from 'copy-to-clipboard'
import { showSuccess, showWarning } from '@/common/message'

export default function KeyTip({ accessKey, showModal, setShowModal }) {
  const copyAddress = (content) => {
    try {
      copy(content)
      showSuccess('复制成功')
    } catch (err) {
      showWarning('复制失败，请联系管理员或手动输入。')
    }
  }
  return (
    <div className={style.toastContainer}>
      <header className={style.toastTitle}>
        <div>提示</div>
        <img
          src={closeIcon}
          onClick={() => {
            setShowModal(false)
          }}
        />
      </header>
      <div className={style.keyBox}>
        <header>
          <span>Access Key</span>
          <span
            className={style.link}
            onClick={() => {
              copyAddress(accessKey)
            }}
          >
            复制地址
          </span>
        </header>
        <div className={style.keyContent}>{accessKey}</div>
      </div>
    </div>
  )
}
