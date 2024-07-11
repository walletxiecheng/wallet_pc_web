import TKButton from '@/components/TKButton'
import TKTitle from '@/components/TKTitle'
import { Button, Flex, Form, Input, Space, Table } from 'antd'
import React from 'react'
import { columns } from './config'
import { getChargeReturnCashList } from '@/service/activity'
import { usePagination } from 'ahooks'

export default function FeeReturn() {
  // 获取手续费返现列表
  const getCashList = async (params) => {
    try {
      const { data } = await getChargeReturnCashList(params)
      return { total: data?.total, list: data?.chargeReturnCashRecord }
    } catch (err) {
      showError(err?.msg || '系统错误')
      return { total: 0, list: [] }
    }
  }

  const { data, run, pagination } = usePagination(getCashList)
  return (
    <div>
      <TKTitle header="手续费返现" />
      <Form>
        <Flex align="self-start" justify="space-between">
          <Space>
            <Form.Item label="账户">
              <Input placeholder="账户" />
            </Form.Item>
            <Form.Item label="地址">
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
            <Button type="primary">套用规则</Button>
            <Button type="primary">历史记录</Button>
          </Space>
        </Flex>
        <Flex justify="end" align="center">
          <h4 style={{ marginRight: 5 }}>11212</h4>
          <Button type="primary">已返总金额</Button>
        </Flex>
      </Form>
      <Table
        columns={columns()}
        dataSource={data?.list || []}
        rowKey={(record) => record.id}
        loading={!data}
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
