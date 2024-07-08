import { Form, Radio } from 'antd'
import React from 'react'
import { statusOptions, trapOptions, proxyOptions } from '../../config'
import { setCommercialAccountStatus } from '@/service/commer'
import { showError } from '@/components/TKMessage'

export default function MoreProps({ record }) {
  const changeStatus = async (type, status) => {
    const req = {
      commercial_id: record.commercial_id,
      account_status: status,
      status_type: type
    }
    console.log(req)
    try {
      await setCommercialAccountStatus()
    } catch (err) {
      return showError('设置失败,请重试')
    }
  }
  return (
    <div>
      <Form>
        <Form.Item label="账号状态">
          <Radio.Group
            options={statusOptions}
            defaultValue={record?.account_status}
            onChange={(status) => {
              changeStatus(1, status)
            }}
          />
        </Form.Item>
        <Form.Item label="交易权限">
          <Radio.Group
            options={trapOptions}
            defaultValue={record?.exchange_authority}
            onChange={(status) => {
              changeStatus(2, status)
            }}
          />
        </Form.Item>
        <Form.Item label="代理商权限">
          <Radio.Group
            options={proxyOptions}
            defaultValue={record?.proxy_authority}
            onChange={() => {
              changeStatus(3)
            }}
          />
        </Form.Item>
      </Form>
    </div>
  )
}
