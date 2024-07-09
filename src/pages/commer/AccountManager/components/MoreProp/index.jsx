import { Form, Radio } from 'antd'
import React from 'react'
import { statusOptions, trapOptions, proxyOptions } from '../../config'
import { setCommercialAccountStatus } from '@/service/commer'
import { showError, showSuccess } from '@/components/TKMessage'

export default function MoreProps({ record }) {
  const changeStatus = async (type, status) => {
    const req = {
      commercial_id: record.commercial_id,
      account_status: status,
      status_type: type
    }

    try {
      await setCommercialAccountStatus(req)
      showSuccess('设置成功')
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
            onChange={(e) => {
              changeStatus(1, e.target.value)
            }}
          />
        </Form.Item>
        <Form.Item label="交易权限">
          <Radio.Group
            options={trapOptions}
            defaultValue={record?.exchange_authority}
            onChange={(e) => {
              changeStatus(2, e.target.value)
            }}
          />
        </Form.Item>
        <Form.Item label="代理商权限">
          <Radio.Group
            options={proxyOptions}
            defaultValue={record?.proxy_authority}
            onChange={(e) => {
              changeStatus(3, e.target.value)
            }}
          />
        </Form.Item>
      </Form>
    </div>
  )
}
