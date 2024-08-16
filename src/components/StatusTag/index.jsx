import React from 'react'
import './index.less'
import waitIcon from '@/assets/icon/dark/icon-history-waiting-line.svg'
import successIcon from '@/assets/icon/dark/icon-safe-success-line.svg'
// import

export default function StatusTag({ status_e, status_p }) {
  return (
    <div>
      {(status_e == 1 || status_p == 1) && (
        <div className="statusWait">
          <img src={waitIcon} alt="" />
          <span>未实名</span>
        </div>
      )}

      {(status_e == 2 || status_p == 2) && (
        <div className="statusWait">
          <img src={waitIcon} alt="" />
          <span>未审核</span>
        </div>
      )}
      {(status_e == 3 || status_p == 3) && (
        <div className="statusWait">
          <img src={successIcon} alt="" />
          <span>已经通过</span>
        </div>
      )}

      {(status_e == 4 || status_p == 4) && (
        <div className="statusSuccess">
          <img src={waitIcon} alt="" />
          <span>审核未通过</span>
        </div>
      )}
      {/* 已通过 */}
    </div>
  )
}
