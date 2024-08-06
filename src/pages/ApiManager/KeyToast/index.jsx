import React from 'react'
import './index.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import copy from 'copy-to-clipboard'
import { showSuccess, showWarning } from '@/common/message'

export default function KeyToast({
  showToast,
  setShowToast,
  accessKey,
  secretKey
}) {
  const copyAddress = (content) => {
    try {
      copy(content)
      showSuccess('复制成功')
    } catch (err) {
      showWarning('复制失败，请联系管理员或手动输入。')
    }
  }
  return (
    <div
      className="toastContainer"
      style={{ display: showToast ? '' : 'none' }}
    >
      <header className="toastTitle">
        <div>提示</div>
        <img
          src={closeIcon}
          onClick={() => {
            setShowToast(false)
          }}
        />
      </header>

      <div className="tips">
        <span>
          请妥善保存以下地址，因为它非常重要。
          <br />
          该地址仅会在此处出现一次，如果您没有保存或忘记了，将无法找回。
        </span>
      </div>

      <div className="keyBox">
        <header>
          <span>Access Key</span>
          <span
            className="link"
            onClick={() => {
              copyAddress(accessKey)
            }}
          >
            复制地址
          </span>
        </header>
        <div className="keyContent">{accessKey}</div>
      </div>
      <div className="keyBox">
        <header>
          <span>SecretKey</span>
          <span
            className="link"
            onClick={() => {
              copyAddress(secretKey)
            }}
          >
            复制地址
          </span>
        </header>
        <div className="keyContent"> {secretKey}</div>
      </div>

      <div className="buttonBox">
        <button
          onClick={() => {
            setShowToast(false)
          }}
        >
          完成
        </button>
      </div>
    </div>
  )
}
