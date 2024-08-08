import React from 'react'
import { Input, Radio, Space } from 'antd'
import { getWithDrawHistoryAddr } from '@/service'
import { useRequest } from 'ahooks'
import { showError } from '@/common/message'

export default function AddressModal({
  showAddressModal,
  setShowAddressModal,
  setCurrentAddress
}) {
  const { data } = useRequest(async () => {
    try {
      const { data } = await getWithDrawHistoryAddr()
      return data
    } catch (err) {
      showError('获取提币地址失败，请手动输入。')
    }
  })
  console.log(data)
  return (
    <div
      className="addressContainer"
      style={{ display: showAddressModal ? 'block' : 'none' }}
    >
      AddressModal
      <div className="addressBox">
        <header>
          <span>请选择你的提币地址</span> <img src="" alt="" />
        </header>
        {/* 分割 */}

        {/* 单选列表框 */}
        <div className="AddressList"></div>
      </div>
    </div>
  )
}
