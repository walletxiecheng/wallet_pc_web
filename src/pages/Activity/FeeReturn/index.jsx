import TKButton from '@/components/TKButton'
import TKTitle from '@/components/TKTitle'
import { Button, Flex, Form, Input, Space, Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { columns } from './config'
import {
  getChargeReturnCashList,
  getTotalCompensationAmount,
  getCompensationRule,
  updateCompensationRule
} from '@/service/activity'
import { usePagination, useRequest } from 'ahooks'
import { pageParams } from '@/common/config'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import RuleForm from './components/RuleForm'
import { showError, showSuccess } from '@/components/TKMessage'
import moment from 'moment'
import { URLS } from '@/routes/urls'

const dataSource = [
  {
    id: 36,
    transaction_index: 1,
    chain: 'Tron',
    user_id: 'a64903da4a4a6caf2c557e750975dcb6',
    user_address: 'TYzEakncv32oNZgXse5jUqCkRb27MVkgZF',
    coin_type: 'TRX',
    fee: '0.267',
    should_return_amount: '0.267',
    transaction_time: '2024-07-11T03:49:09Z',
    return_time: '0001-01-01T00:00:00Z',
    status: 2,
    children: [
      {
        id: 37,
        transaction_index: 2,
        chain: 'Tron',
        user_id: 'a64903da4a4a6caf2c557e750975dcb6',
        user_address: 'TYzEakncv32oNZgXse5jUqCkRb27MVkgZF',
        coin_type: 'TRX',
        fee: '0.267',
        should_return_amount: '0.267',
        transaction_time: '2024-07-11T05:55:24Z',
        return_time: '0001-01-01T00:00:00Z',
        status: 2
      }
    ]
  }
]
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    )
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows)
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows)
  }
}
export default function FeeReturn() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [checkStrictly, setCheckStrictly] = useState(false)
  // 获取总手续费
  const getTotalFee = async () => {
    const { data } = await getTotalCompensationAmount()
    return data
  }
  const { data: totalFee } = useRequest(getTotalFee)

  // 获取手续费返现列表
  const getCashList = async (params) => {
    try {
      const { data } = await getChargeReturnCashList(params)
      return { total: data?.total, list: data?.charge_return_cash_record }
    } catch (err) {
      showError(err?.msg || '系统错误')
      return { total: 0, list: [] }
    }
  }
  const { data, run, pagination } = usePagination(getCashList)

  // 查询
  const onFinish = (values) => {
    run({ ...pageParams, ...values })
  }

  const { data: rules } = useRequest(async () => {
    const { data } = await getCompensationRule()
    const time = moment(data.settlement_time, 'hh:mm:ss')
    data.settlement_time = time
    return data
  })
  // 套用规则弹窗
  const useRule = () => {
    console.log(rules)
    form.setFieldsValue(rules)
    openModal({
      title: '套用规则',
      content: <RuleForm form={form} />,
      handleOk: async () => {
        const result = await form.validateFields()
        result.settlement_time = result?.settlement_time.format('hh:mm:ss')
        try {
          await updateCompensationRule(result)
          showSuccess('更新规则成功')
        } catch (err) {
          showError('更新规则失败，请重试')
          return Promise.reject()
        }
      }
    })
  }
  return (
    <div>
      <TKTitle header="手续费返现" />
      <Form onFinish={onFinish}>
        <Flex align="self-start" justify="space-between">
          <Space>
            <Form.Item label="账户" name="user_id">
              <Input placeholder="账户" />
            </Form.Item>
            <Form.Item label="地址" name="address">
              <Input placeholder="地址" />
            </Form.Item>
            <Form.Item>
              <TKButton />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Form.Item>
          </Space>
          <Space>
            <Button
              type="primary"
              onClick={() => {
                useRule()
              }}
            >
              套用规则
            </Button>
            <Button
              type="primary"
              onClick={() => {
                navigate(URLS.feeHistory)
              }}
            >
              历史记录
            </Button>
          </Space>
        </Flex>
        <Flex justify="end" align="center">
          <h4 style={{ marginRight: 5 }}>{totalFee || 0}</h4>
          <Button type="primary">已返总金额</Button>
        </Flex>
      </Form>
      <Table
        columns={columns()}
        // dataSource={dataSource}
        dataSource={data?.list}
        rowKey={(record) => record.id}
        loading={!data}
        rowSelection={{
          ...rowSelection,
          checkStrictly
        }}
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: data?.total || 0,
          onChange: pagination.onChange,
          onShowSizeChange: pagination.onChange
        }}
      />
    </div>
  )
}
