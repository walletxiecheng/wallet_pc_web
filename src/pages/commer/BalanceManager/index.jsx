import TKTitle from '@/components/TKTitle'
import React, { useState } from 'react'
import { Form, Input, InputNumber, Button, Table, Space, Flex } from 'antd'
import TKButton from '@/components/TKButton'
import { balanceColumns } from './config'
import { usePagination } from 'ahooks'
import {
  getCommercialBalanceInfoList,
  exportCommercialBalanceInfoList
} from '@/service/commer'
import { showError, showWarning } from '@/components/TKMessage'
import { pageParams } from '@/common/config'

export default function BalanceManager() {
  // 获取余额列表
  const [selectionType, setSelectionType] = useState('checkbox')
  const [selectId, setSelectId] = useState([])
  const getBalanceHandler = async (params) => {
    try {
      const { data } = await getCommercialBalanceInfoList(params)
      return { total: data?.total, list: data?.commercial_balance_info }
    } catch (err) {
      showError()
    }
  }

  const { data, run, pagination } = usePagination(getBalanceHandler, {
    defaultParams: [pageParams]
  })

  // 查询
  const onFinish = (values) => {
    run({ ...values, ...pageParams })
  }

  // 导出
  const exportBalanceList = async () => {
    const req = {
      assets_id: selectId + ''
    }
    if (!req.assets_id) {
      return showWarning('请选择导出记录')
    }
    try {
      const { data } = await exportCommercialBalanceInfoList(req)
      window.open(data, '_blank')
    } catch (err) {
      showError('导出失败，请重试。')
    }
  }

  // 行选择
  const rowSelection = {
    onChange: (selectedRowKeys) => {
      setSelectId(selectedRowKeys)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name
    })
  }

  return (
    <div>
      <TKTitle header={'余额管理'} />
      <div>
        <Form onFinish={onFinish}>
          <Form.Item label="搜索" name="search_key" style={{ width: 260 }}>
            <Input placeholder="ID、手机号、钱包地址、币种" />
          </Form.Item>
          <Flex justify="space-between">
            <Space>
              <Form.Item label="可用币" name="min_available_coin">
                <InputNumber placeholder="最低数" />
              </Form.Item>
              <Form.Item name="max_available_coin">
                <InputNumber placeholder="最高数" />
              </Form.Item>
              <Form.Item label="冻结币" name="min_frozen_coin">
                <InputNumber placeholder="最低数" />
              </Form.Item>
              <Form.Item name="max_frozen_coin">
                <InputNumber placeholder="最高数" />
              </Form.Item>
              <Form.Item label="总币" name="min_total_coin">
                <InputNumber placeholder="最低数" />
              </Form.Item>
              <Form.Item name="max_total_coin">
                <InputNumber placeholder="最高数" />
              </Form.Item>
              <Form.Item>
                <TKButton></TKButton>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
              </Form.Item>
            </Space>
            <Form.Item>
              <Button
                type="primary"
                onClick={() => {
                  exportBalanceList()
                }}
              >
                导出
              </Button>
            </Form.Item>
          </Flex>
        </Form>
      </div>

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection
        }}
        columns={balanceColumns()}
        dataSource={data?.list || []}
        rowKey={(record) => record.asset_id}
        loading={!data?.list}
        pagination={{
          total: data?.total,
          current: pagination.current,
          pageSize: pagination.pageSize,
          onChange: pagination.onChange,
          onShowSizeChange: pagination.onChange
        }}
      />
    </div>
  )
}
