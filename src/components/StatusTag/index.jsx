import React from 'react'
import './index.less'
import waitIcon from '@/assets/icon/dark/icon-history-waiting-line.svg'
import successIcon from '@/assets/icon/dark/icon-safe-success-line.svg'
// import

export default function StatusTag({ status_e, status_p }) {
  const status = status_e > status_p ? status_e : status_p
  return (
    <div>
      {status == 1 && (
        <div className="statusWait">
          <img src={waitIcon} />
          <span>未实名</span>
        </div>
      )}

      {status == 2 && (
        <div className="statusWait">
          <img src={waitIcon} />
          <span>未审核</span>
        </div>
      )}
      {status == 3 && (
        <div className="statusSuccess">
          <img src={successIcon} />
          <span>已经通过</span>
        </div>
      )}

      {status == 4 && (
        <div className="statusWait">
          <img src={waitIcon} />
          <span>审核未通过</span>
        </div>
      )}
    </div>
  )
}
