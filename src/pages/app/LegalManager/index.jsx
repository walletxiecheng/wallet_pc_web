import { useState, useEffect } from 'react'
import TKTitle from '@/components/TKTitle'
import { Space, Form, Input, Button, Table } from 'antd'
import React from 'react'
import { legalColumns } from './config'
import { usePagination } from 'ahooks'
import {
  getLegalTenderList,
  addLegalTender,
  updateLegalTenderInfo,
  getReferenceRateAddress
} from '@/service/legal'
import { showError, showSuccess } from '@/components/TKMessage'
import { header, pageParams } from '@/common/config'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import LegalForm from './components/LegalForm'

export default function LegalManager() {
  const [legalForm] = Form.useForm()

  const { data, run, pagination } = usePagination(
    async (params) => {
      try {
        const { data } = await getLegalTenderList(params)
        return { total: data?.total, list: data?.legal_list || [] }
      } catch (err) {
        return showError('系统错误')
      }
    },
    {
      defaultParams: [pageParams]
    }
  )

  // 回去汇率地址列表
  const getAddrList = async () => {
    const { data } = await getReferenceRateAddress()
    let list = []
    for (let i = 0; i < data.length; i++) {
      list.push({
        value: data[i],
        label: data[i]
      })
    }
    console.log(list)
    return list
  }
  // 查询
  const onFinish = (values) => {
    run({ ...values, ...pageParams })
  }

  // TODO 创建
  const createLegal = async () => {
    legalForm.resetFields()
    openModal({
      title: '创建',
      content: <LegalForm form={legalForm} addrList={await getAddrList()} />,
      width: 500,
      handleOk: async () => {
        const result = await legalForm.validateFields()
        try {
          await addLegalTender(result, header)
        } catch (err) {
          showError('创建失败')
          return Promise.reject()
        }
      }
    })
  }

  // TODO 创建
  const editLegal = async (record) => {
    legalForm.resetFields()
    legalForm.setFieldsValue(record)
    openModal({
      title: '创建',
      content: <LegalForm form={legalForm} addrList={await getAddrList()} />,
      width: 500,
      handleOk: async () => {
        const result = await legalForm.validateFields()
        try {
          await updateLegalTenderInfo(result)
          showSuccess('创建成功')
        } catch (err) {
          showError(err.msg)
          return Promise.reject()
        }
      }
    })
  }

  return (
    <div>
      <TKTitle header={'法币管理'} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Form onFinish={onFinish}>
          <Space>
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
        <Button
          type="primary"
          onClick={() => {
            createLegal()
          }}
        >
          创建
        </Button>
      </div>
      <Table
        columns={legalColumns(editLegal)}
        dataSource={data?.list || []}
        rowKey={(record) => record.id}
        loading={!data && data?.total}
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
