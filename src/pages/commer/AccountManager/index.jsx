import React, { useState } from 'react'
import { Form, Input, Select, Button, Flex, Table, Space } from 'antd'
import TKTitle from '@/components/TKTitle'
import { usePagination } from 'ahooks'
import { columns, statusOptions, proxyOptions } from './config'
import {
  getCommercialAccountList,
  exportCommercialInfo
} from '@/service/commer'
import { showError } from '@/components/TKMessage'
import { pageParams } from '@/common/config'
import { URLS } from '@/routes/urls'

export default function AccountManager() {
  const [selectionType, setSelectionType] = useState('checkbox')
  const [selectID, setSelectID] = useState([])

  const { data, run, pagination } = usePagination(
    async (prams) => {
      try {
        const { data } = await getCommercialAccountList(prams)
        return {
          total: data?.total || 0,
          list: data.commercial_list_info || []
        }
      } catch (err) {
        showError(err?.msg || '系统错误')
      }
    },
    {
      defaultParams: [pageParams]
    }
  )
  // 查询
  const onFinish = (values) => {
    run({ ...values, ...pageParams })
  }

  // 行选择
  const rowSelection = {
    onChange: (selectedRowKeys) => {
      setSelectID(selectedRowKeys)
      console.log(selectedRowKeys)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name
    })
  }

  const exportCommercial = async () => {
    const req = {
      export_commercial_ids: selectID + ''
    }
    try {
      const { data } = await exportCommercialInfo(req)
    } catch (err) {
      return showError('导出失败')
    }
  }
  return (
    <div>
      <TKTitle header={'账户管理'} />
      <Flex justify="space-between">
        <Form onFinish={onFinish}>
          <Space>
            <Form.Item label="搜索" name="search_key">
              <Input
                style={{ width: '300px' }}
                placeholder="ID、邮箱、手机号、姓名、企业名称"
              />
            </Form.Item>
            <Form.Item label="状态" name="status">
              <Select options={statusOptions} placeholder="请选择" />
            </Form.Item>
            <Form.Item label="代理权限" name="proxy_authority">
              <Select options={proxyOptions} placeholder="请选择" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="reset" type="link">
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
        <Button
          type="primary"
          onClick={() => {
            exportCommercial()
          }}
        >
          导出
        </Button>
      </Flex>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection
        }}
        rowKey={(record) => record.account_id}
        columns={columns(URLS)}
        loading={!data}
        dataSource={data?.list || []}
        pagination={{
          total: data?.total || 0,
          current: pagination.current,
          pageSize: pagination.pageSize,
          onShowSizeChange: pagination.onShowSizeChange
        }}
      />
    </div>
  )
}
