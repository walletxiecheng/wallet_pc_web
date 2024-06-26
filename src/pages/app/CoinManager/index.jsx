import React, { useEffect, useState } from 'react'
import TKTitle from '@/components/TKTitle'
import { Form, Select, Space, Input, Button, Table } from 'antd'
import { coinColumns, statusOption, flagOption } from './config'
import { usePagination } from 'ahooks'
import {
  getSupportCoinList,
  getSupportChainList,
  uploadSupportCoin,
  updateSupportCoinList
} from '@/service/coin'
import { showError, showSuccess } from '@/components/TKMessage'
import CoinForm from './components/CoinForm'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import { header, pageParams } from '@/common/config'
export default function CoinManager() {
  const [chainList, setChainList] = useState([])
  const [form] = Form.useForm()
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
        return showError(err.msg)
      }
    },
    {
      defaultParams: [pageParams]
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
    run({ ...values, ...pageParams })
  }

  // TODO 创建
  const createCoin = () => {
    openModal({
      title: '创建',
      content: <CoinForm form={form} chainList={chainList} type={1} />,
      handleOk: async () => {
        const result = await form.validateFields()
        result.file = result?.file?.fileList[0]
        try {
          await uploadSupportCoin(result, header)
          showSuccess('创建成功')
          run(pageParams)
        } catch (err) {
          showError('创建失败')
          return Promise.reject()
        }
      }
    })
  }
  // TODO 编辑
  const editCoin = (record) => {
    form.setFieldsValue(record)
    openModal({
      title: '编辑',
      content: (
        <CoinForm form={form} chainList={chainList} type={2} record={record} />
      ),
      handleOk: async () => {
        const result = await form.validateFields()
        result.file = result?.file?.fileList[0]
        try {
          await updateSupportCoinList(result, header)
          showSuccess('修改成功')
          run(pageParams)
          return Promise.reject()
        } catch (err) {
          showError('修改失败')
          return Promise.reject()
        }
      }
    })
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
        <Button type="primary" onClick={createCoin}>
          创建
        </Button>
      </div>
      {/* 表格 */}
      <Table
        dataSource={data?.list || []}
        columns={coinColumns(chainList, editCoin)}
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
