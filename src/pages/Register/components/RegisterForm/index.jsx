import React, { useState } from 'react'
import { Flex, Select } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import './select.less'
import icon from '@/assets/icon/light/logo_light.svg'
import style from './index.module.less'

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
export default function RegisterForm({ toggleCurrentStatus }) {
  const [checkTab, setCheckTab] = useState(1)
  return (
    <div className={style.registerBox}>
      <header>
        <img src={icon} />
        欢迎注册Token17
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
        <input placeholder="请输入邮箱" />
        <button
          onClick={() => {
            toggleCurrentStatus(2, 1)
          }}
        >
          下一步
        </button>
      </div>
      {/* 手机号注册 */}
      <div
        className={style.telForm}
        style={{ display: checkTab === 2 ? 'block' : 'none' }}
      >
        <Flex>
          <Select options={options} />
          <input placeholder="手机号" style={{ width: '264px' }} />
        </Flex>
        <button
          onClick={() => {
            toggleCurrentStatus(2, 2)
          }}
        >
          下一步
        </button>
      </div>
      {/* 登录 */}
      <div className={style.login}>
        已有账号？
        <span>登录</span>
      </div>
      {/* 分割线 */}
      <div className={style.line} />
      {/* 协议链接 */}
      <div className={style.protocol}>
        我已阅读并同意<span>《用户协议》</span>和<span>《隐私协议》</span>
      </div>
    </div>
  )
}
