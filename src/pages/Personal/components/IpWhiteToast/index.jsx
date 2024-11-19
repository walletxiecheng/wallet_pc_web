import React, { useState } from 'react'
import style from './index.module.less'
import { Button, Flex, Input } from 'antd'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { addWhiteIp, getWhiteIp } from '@/service'
import { showError, showSuccess } from '@/common/message'
import { useRequest } from 'ahooks'

export default function IpWhiteToast({ showIpWhite, setShowIpWhite }) {
  const [ips, setIps] = useState('')
  const addIpWhiteHandler = async () => {
    const white_list = ips.split(' ')
    const req = {
      white_list: white_list
    }
    try {
      await addWhiteIp(req)
      showSuccess('add success')
      setShowIpWhite(false)
    } catch (err) {
      showError(err?.msg || err)
    }
  }

  const ipWhites = useRequest(async () => {
    const { data } = await getWhiteIp()
    return data
  })

  return (
    <div
      className={style.ipWhiteContainer}
      style={{ display: showIpWhite ? 'block' : 'none' }}
    >
      <Flex
        onClick={() => {
          setShowIpWhite(false)
        }}
      >
        <img src={closeIcon} width={16} />
        <span>关闭</span>
      </Flex>

      <div className={style.title}>
        <header>添加白名单</header>
        <div className={style.desc}>
          课添加多个信任地址，多地址间使用空格分隔
        </div>
      </div>

      <div className={style.inputBpx}>
        <input
          value={ips}
          onChange={(e) => {
            setIps(e.target.value)
          }}
          placeholder="请输入信任地址"
        ></input>
      </div>
      <Flex style={{ marginTop: 16 }}>
        <button
          className={style.cancelBtn}
          onClick={() => {
            setShowIpWhite(false)
          }}
        >
          取消
        </button>
        <button
          className={style.confirmBtn}
          style={{ background: '#4f98fa' }}
          onClick={() => {
            addIpWhiteHandler()
          }}
        >
          确认
        </button>
      </Flex>
    </div>
  )
}
