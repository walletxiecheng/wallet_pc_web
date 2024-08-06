import React from 'react'
import './index.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'

export default function KeyToast({ accessKey, secretKey }) {
  return (
    <div className="toastContainer">
      <header className="toastTitle">
        <div>提示</div>
        <img src={closeIcon} />
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
          <span className="link">复制地址</span>
        </header>
        <div className="keyContent">111</div>
      </div>
      <div className="keyBox">
        <header>
          <span>Access Key</span>
          <span className="link">复制地址</span>
        </header>
        <div className="keyContent"> 222</div>
      </div>

      <div className="buttonBox">
        <button>完成</button>
      </div>
    </div>
  )
}
