import { Form, Input, Radio } from 'antd'
import React from 'react'

export default function FlashCoinForm({ form }) {
  return (
    <div>
      <Form layout="vertical" form={form}>
        <Form.Item label="币种编号" name="coin_type">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="最大兑换数" name="max_exchange_amount">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="最小兑换数" name="min_exchange_amount">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="交易手续费率" name="fee_percent">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="排序" name="sort">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="状态" name="status">
          <Radio.Group
            options={[
              {
                label: '激活',
                value: 1
              },
              {
                label: '禁用',
                value: 2
              }
            ]}
          />
        </Form.Item>
      </Form>
    </div>
  )
}
