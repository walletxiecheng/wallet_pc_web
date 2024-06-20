import React, { useEffect, useState } from 'react'
import {
  Divider,
  Form,
  Select,
  Input,
  Button,
  Space,
  DatePicker,
  Table
} from 'antd'
import { getSupportChainList } from '@/service/coin'
import { columns } from './config'
import { getDappList } from '@/service/dapp'
import { usePagination } from 'ahooks'

export default function DappManager() {
  const [chainList, setChainList] = useState()
  const { data, run, pagination } = usePagination(
    async (params) => {
      const res = await getDappList(params)
      if (res.code !== 0) {
        return { total: 0, list: [] }
      }
      const data = res.data
      return { total: data.total, list: data.dapp_list }
    },
    {
      defaultParams: [{ pageSize: 10, current: 1 }]
    }
  )
  // 创建dapp
  const createDapp = () => {}
  // 编辑dapp
  const editDapp = () => {}
  // 获取链列表
  const getChanList = async () => {
    const res = await getSupportChainList({ current: 1, pageSize: 20 })
    if (res.code !== 0) {
      return []
    }
    console.log(res)
    setChainList(res?.data?.dapp_list)
  }
  useEffect(() => {
    getChanList()
  })
  return (
    <div>
      <header>
        <h3>DApp管理</h3>
      </header>
      <Divider />
      {/* 表单 */}
      <div>
        <Form>
          <Space>
            <Form.Item label="标签类型">
              <Select placeholder="请选择"></Select>
            </Form.Item>
            <Form.Item label="所属链">
              <Select placeholder="请选择"></Select>
            </Form.Item>
            <Form.Item label="状态">
              <Select placeholder="请选择"></Select>
            </Form.Item>
          </Space>
          <br />
          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Space>
              <Form.Item label="日期">
                <DatePicker.RangePicker />
              </Form.Item>
              <Form.Item label="搜索">
                <Input placeholder="DApp ID、名称"></Input>
              </Form.Item>
              <Form.Item>
                <Button style={{ border: '1px solid #3f78f9' }} type="link">
                  重置
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary">查询</Button>
              </Form.Item>
            </Space>
            <Form.Item>
              <Button type="primary">创建</Button>
            </Form.Item>
          </Space>
        </Form>
      </div>

      <Table
        rowKey={(record) => record.id}
        dataSource={data?.list}
        columns={columns()}
      />
    </div>
  )
}
