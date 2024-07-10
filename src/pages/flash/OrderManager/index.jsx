import React from 'react'
import { orderColumns } from './config'
import { Form, Input, Table, Space, Flex, DatePicker, Button } from 'antd'
import TKTitle from '@/components/TKTitle'
import TKButton from '@/components/TKButton'
import { usePagination } from 'ahooks'
import { getFlashOrderRecord } from '@/service/flash'
import { showError } from '@/components/TKMessage'
import { pageParams } from '@/common/config'

export default function OrderManager() {
  // 获取订单列表
  const getOrderList = async (params) => {
    try {
      const { data } = await getFlashOrderRecord(params)
      return { total: data?.total, list: data?.flash_orders }
    } catch (err) {
      showError(err.msg || '系统错误')
      return { total: 0, list: [] }
    }
  }
  const { data, run, pagination } = usePagination(getOrderList, {
    defaultParams: [pageParams]
  })

  // 搜索
  const onFinish = (values) => {
    // 有date的情况下
    if (values.date) {
      values.start_date = values.date[0].format('YYYY-MM-DD')
      values.end_date = values.date[1].format('YYYY-MM-DD')
      values.date = undefined
    }

    run({ ...pageParams, ...values })
  }

  return (
    <div>
      <TKTitle header="订单管理" />
      <Form onFinish={onFinish}>
        <Flex justify="space-between">
          <Space>
            <Form.Item label="搜索" name="key" style={{ width: 300 }}>
              <Input placeholder="用户ID、来源币种、兑换币种" />
            </Form.Item>
            <Form.Item label="日期" name="date">
              <DatePicker.RangePicker />
            </Form.Item>
          </Space>

          <Space>
            <Form.Item>
              <TKButton />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Form.Item>
          </Space>
        </Flex>
      </Form>
      <Table
        columns={orderColumns()}
        dataSource={data?.list || []}
        loading={!data}
        rowKey={(record) => record.order_id}
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
