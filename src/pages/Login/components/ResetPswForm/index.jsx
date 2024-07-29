import React, { useState, useRef } from 'react'
import style from './index.module.less'
import { Flex, Select } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import Verify from '../Verify'
const tabList = [
  {
    id: 1,
    label: '邮箱'
  },
  {
    id: 2,
    label: '手机号'
  }
]
const options = [
  {
    value: 1,
    label: (
      <>
        <CheckCircleFilled />
        +852
      </>
    )
  },
  {
    value: 2,
    label: (
      <>
        <CheckCircleFilled />
        +812
      </>
    )
  }
]
export default function ResetPswForm({ toggleStatus }) {
  const emailRef = useRef()
  const phoneRef = useRef()

  const [checkTab, setCheckTab] = useState(1)
  return (
    <div className={style.resetContainer}>
      <header>
        <h3>重置登录密码</h3>
        <div className={style.tag}>
          重置登录密码后，24小时内禁止提币和OTC划转
        </div>
      </header>
      <div className={style.tabs}>
        {tabList.map((item) => (
          <span
            key={item.id}
            className={checkTab === item.id ? style.active : ''}
            onClick={() => {
              setCheckTab(item.id)
            }}
          >
            {item.label}
          </span>
        ))}
      </div>
      {/* 邮箱注册 */}
      <div
        className={style.emailForm}
        style={{ display: checkTab === 1 ? 'block' : 'none' }}
      >
        <input placeholder="请输入邮箱" ref={emailRef} />
        <button
          onClick={() => {
            toggleStatus(2)
          }}
        >
          提交
        </button>
      </div>
      {/* 手机号注册 */}
      <div
        className={style.telForm}
        style={{ display: checkTab === 2 ? 'block' : 'none' }}
      >
        <Flex>
          <Select options={options} />
          <input
            placeholder="手机号"
            ref={phoneRef}
            style={{ width: '264px' }}
          />
        </Flex>
        <button
          onClick={() => {
            toggleStatus(2)
          }}
        >
          提交
        </button>
      </div>
    </div>
  )
}
