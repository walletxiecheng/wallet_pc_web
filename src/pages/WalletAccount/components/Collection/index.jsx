import React from 'react'
import style from './index.module.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { Flex, Space } from 'antd'
export default function Collection({ setShowTotal }) {
  return (
    <div className={style.colContainer}>
      <Flex justify="space-between">
        <header>归集</header>
        <img
          src={closeIcon}
          onClick={() => {
            setShowTotal(false)
          }}
        />
      </Flex>
      <div className={style.line}></div>
      <Flex justify="space-between">
        <div className={style.totalBox}>
          <header>总金额</header>
          <div className={style.amount}>14542.22</div>
        </div>
        <div className={style.collectBox}>
          <header>归集金额</header>
          <Flex align="center" justify="space-between">
            <div className={style.amount}>14542.22</div>
            <div className={style.computedBtn}>测算</div>
          </Flex>
          <div className={style.computeResult}>
            <div>
              实际到账<span className={style.importantText}>12323</span>
            </div>
            <div>
              手续费<span>4.21</span>
            </div>
          </div>
          <div className={style.line} />
        </div>
      </Flex>
      <div className={style.btnGroup}>
        <button className={style.confirm}>确认归集</button>
        <button
          className={style.cancel}
          onClick={() => {
            setShowTotal(false)
          }}
        >
          取消
        </button>
      </div>
    </div>
  )
}
