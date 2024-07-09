import React, { useState } from 'react'
import { Form, Input, Select, Button, Flex, Table, Space } from 'antd'
import TKTitle from '@/components/TKTitle'
import { usePagination } from 'ahooks'
import { columns, statusOptions, proxyOptions } from './config'
import {
  getCommercialAccountList,
  exportCommercialInfo,
  setInvitor
} from '@/service/commer'
import { showError, showSuccess } from '@/components/TKMessage'
import { pageParams } from '@/common/config'
import { URLS } from '@/routes/urls'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import SetProp from './components/SetProp'

export default function AccountManager() {
  const [selectionType, setSelectionType] = useState('checkbox')
  const [selectID, setSelectID] = useState([]) //选中的id列表
  const [setForm] = Form.useForm()
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

  // 导出
  const exportCommercial = async () => {
    const req = {
      export_commercial_ids: selectID + ''
    }
    if (!req.export_commercial_ids) {
      return showWarning('请选择导出记录')
    }
    try {
      const { data } = await exportCommercialInfo(req)
      window.open(data, '_blank')
    } catch (err) {
      return showError('导出失败')
    }
  }

  // 设置邀请人
  const setVisitor = (record) => {
    setForm.resetFields()
    const text = record.inviter_account_id ? '修改邀请人' : '设置邀请人'
    setForm.setFieldValue('commercial_id', record.commercial_id)
    setForm.setFieldValue(
      'inviter_account_id',
      record.inviter_account_id ? record.inviter_account_id : ''
    )
    openModal({
      title: text,
      content: <SetProp form={setForm} />,
      handleOk: async () => {
        const result = await setForm.validateFields()
        if (result.invitor_id == record.invitor_id) {
          return
        }
        result.invitor_id = Number(result.inviter_account_id)
        try {
          await setInvitor(result)
          showSuccess('设置成功')

          run(pageParams)
        } catch (err) {
          showError('设置失败，请重试。')
          return Promise.reject()
        }
      }
    })
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
        rowKey={(record) => record.commercial_id}
        columns={columns(URLS, setVisitor)}
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
