import React from 'react'
import { Flex, Input, Radio, Space } from 'antd'
import { getWithDrawHistoryAddr } from '@/service'
import { useRequest } from 'ahooks'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import checkBoxIconBefore from '@/assets/icon/light/icon-checkBox-line-before.svg'
import checkBoxIconAfter from '@/assets/icon/light/icon-checkBox-line-after.svg'

import './index.less'

export default function AddressModal({
  showAddressModal,
  setShowAddressModal,
  setCurrentAddress,
  currentAddress,
  chain
}) {
  const { data: addressList } = useRequest(async () => {
    const req = {
      chain_name: chain,
      limit: 5
    }
    try {
      const { data } = await getWithDrawHistoryAddr(req)
      return data
    } catch (err) {
      console.log(err.msg)
    }
  })

  return (
    <div
      className="addressContainer"
      style={{ display: showAddressModal ? 'block' : 'none' }}
    >
      <Flex
        justify="space-between"
        className="title"
        onClick={() => {
          setShowAddressModal(false)
        }}
      >
        <span>请选择你的提币地址</span>
        <img src={closeIcon} />
      </Flex>
      {/* 分割 */}
      <div className="line" />
      {/* 单选列表框 */}
      <div className="addressList">
        {addressList?.map((item, index) => (
          <Flex
            className="addressItem"
            key={index}
            onClick={() => {
              setCurrentAddress(item)
            }}
          >
            <div>{item}</div>
            <div>
              <img
                src={
                  currentAddress === item
                    ? checkBoxIconAfter
                    : checkBoxIconBefore
                }
              />
            </div>
          </Flex>
        ))}
      </div>
    </div>
  )
}
