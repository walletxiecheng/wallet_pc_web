import TKTitle from '@/components/TKTitle'
import { Flex, Form, Input, Select, Button, Space, Table } from 'antd'
import TKButton from '@/components/TKButton'
import React from 'react'
import { rnColumns, statusOptions } from './config'
import { usePagination } from 'ahooks'
import { getRealNameInfo } from '@/service/commer'
import { showError } from '@/components/TKMessage'
import { pageParams } from '@/common/config'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import RenameForm from './components/Form'

export default function RealNameManager() {
  // 渲染
  const [form] = Form.useForm()
  const getInfoHandler = async (prams) => {
    try {
      const { data } = await getRealNameInfo(prams)
      return { total: data?.total, list: data?.real_name_info }
    } catch (err) {
      showError(err.msg || '系统错误')
      return { total: 0, list: [] }
    }
  }
  const { data, run, pagination } = usePagination(getInfoHandler, {
    defaultParams: [pageParams]
  })
  // 查询
  const onFinish = (values) => {
    run({ ...pageParams, ...values })
  }
  // 查看
  const select = async (record) => {
    form.setFieldsValue(record)
    openModal({
      title: '查看',
      content: <RenameForm form={form} accountId={record.account_id} />,
      width: 600,
      handleOk: async () => {
        return Promise.reject()
      }
    })
  }
  // 审核
  const review = (record) => {
    console.log('审核')
  }
  return (
    <div>
      <TKTitle header={'实名管理'} />
      <Form onFinish={onFinish}>
        <Flex justify="space-between">
          <Space>
            <Form.Item label="搜索" name="search_key">
              <Input
                style={{ width: 230 }}
                placeholder="邮箱、实名、企业名、证件号"
              />
            </Form.Item>
            <Form.Item label="审核状态" name="review_status">
              <Select options={statusOptions} placeholder="全部" />
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

        <Table
          columns={rnColumns(select, review)}
          dataSource={data?.list}
          rowKey={(record) => record.id}
          pagination={{
            total: data?.total || 0,
            current: pagination.current,
            pageSize: pagination.pageSize,
            onChange: pagination.onChange,
            onShowSizeChange: pagination.onChange
          }}
        />
      </Form>
    </div>
  )
}
