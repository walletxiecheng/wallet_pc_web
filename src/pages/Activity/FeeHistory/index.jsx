import TKButton from '@/components/TKButton'
import TKTitle from '@/components/TKTitle'
import { Button, DatePicker, Form, Select, Space, Table } from 'antd'
import React from 'react'
import { usePagination } from 'ahooks'
import { getChargeReturnCashHistoryRecord } from '@/service/activity'
import { showError } from '@/components/TKMessage'
import { pageParams } from '@/common/config'
import { columns } from './config'

export default function FeeHistory() {
  // 获取历史记录
  const getRecordList = async (params) => {
    try {
      const { data } = await getChargeReturnCashHistoryRecord(params)
      return { total: data.total, list: data.ChargeReturnCashRecord }
    } catch (err) {
      showError(err?.msg || '系统错误')
    }
  }
  const { data, run, pagination } = usePagination(getRecordList, {
    defaultParams: [pageParams]
  })
  // 查询记录
  const onFinish = async (values) => {
    if (values.date) {
      values.date = values.date.format('YYYY-MM-DD')
    }
    run({ ...pageParams, ...values })
  }
  return (
    <div>
      <TKTitle header="历史记录" />
      <Form onFinish={onFinish}>
        <Space>
          <Form.Item label="日期" name="date">
            <DatePicker />
          </Form.Item>
          <Form.Item label="币种" name="coin_type">
            <Select
              placeholder="请选择"
              options={[{ value: 1, label: 'BSC' }]}
            />
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
      </Form>

      <Table
        columns={columns()}
        dataSource={data?.list || 0}
        rowKey={(record) => record.id}
        loading={!data}
        pagination={{
          total: data?.total || 0,
          current: pagination?.current,
          pageSize: pagination?.pageSize,
          onChange: pagination.onChange,
          onShowSizeChange: pagination.onChange
        }}
      />
    </div>
  )
}
