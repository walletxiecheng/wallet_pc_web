import React, { useEffect, useState } from 'react'
import TKTitle from '@/components/TKTitle'
import { Form, Select, Space, Input, Button, Table } from 'antd'
import { coinColumns, statusOption, flagOption } from './config'
import { usePagination } from 'ahooks'
import { getSupportCoinList, getSupportChainList } from '@/service/coin'
import { showError } from '@/components/TKMessage'

const PAGE_SIZE = 10
export default function CoinManager() {
  const [chainList, setChainList] = useState([])
  // 代币列表
  const { data, run, pagination } = usePagination(
    async (params) => {
      try {
        const { data } = await getSupportCoinList(params)
        return {
          total: data?.total || 0,
          list: data?.SupportCoinsInfoList || []
        }
      } catch (err) {
        showError('没有此数据')
      }
    },
    {
      defaultParams: [
        {
          current: 1,
          pageSize: PAGE_SIZE
        }
      ]
    }
  )

  // 获取链列表
  const getChainListHandler = async () => {
    try {
      const { data } = await getSupportChainList({ current: 1, pageSize: 999 })
      setChainList(data?.support_chains_info_list)
    } catch (err) {
      return showError(err.msg)
    }
  }
  // 查询
  const onFinish = async (values) => {
    run({ ...values, current: 1, pageSize: PAGE_SIZE })
  }

  useEffect(() => {
    getChainListHandler()
  }, [])
  return (
    <div>
      <TKTitle header={'代币管理'} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Form onFinish={onFinish}>
          <Space>
            <Form.Item label="代币状态" name="status">
              <Select options={statusOption} placeholder="全部" />
            </Form.Item>
            <Form.Item label="网络标识" name="flag">
              <Select options={flagOption} placeholder="全部" />
            </Form.Item>
            <Form.Item label="搜索" name="search_key">
              <Input placeholder="名称、精度" />
            </Form.Item>
            <Form.Item>
              <Button
                type="link"
                htmlType="reset"
                style={{ border: '1px solid #3f78f9' }}
              >
                重置
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Form.Item>
          </Space>
        </Form>
        <Button type="primary">创建</Button>
      </div>
      {/* 表格 */}
      <Table
        dataSource={data?.list || []}
        columns={coinColumns(chainList)}
        loading={!data}
        rowKey={(record) => record.id}
        pagination={{
          total: data?.total || 0,
          current: pagination.current,
          pageSize: pagination.pageSize,
          onChange: pagination.onChange,
          onShowSizeChange: pagination.onChange
        }}
      />
    </div>
  )
}
