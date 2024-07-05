import TKTitle from '@/components/TKTitle'
import { Flex, Form, Input, Select, Button, Space, Table } from 'antd'
import TKButton from '@/components/TKButton'
import React from 'react'
import { rnColumns, statusOptions } from './config'
import { usePagination } from 'ahooks'
import { getRealNameInfo, reviewRealNameInfo } from '@/service/commer'
import { showError, showSuccess } from '@/components/TKMessage'
import { pageParams } from '@/common/config'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import RenameForm from './components/Form'

export default function RealNameManager() {
  // 渲染
  const [form] = Form.useForm()
  const [rejectedForm] = Form.useForm()

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
      width: 600
    })
  }

  // 审核
  const review = (record) => {
    form.setFieldsValue(record)
    openModal({
      title: '审核',
      content: <RenameForm form={form} accountId={record.account_id} />,
      width: 600,
      okText: '通过',
      cancelText: '驳回',
      handleOk: async () => {
        console.log('通过')
        try {
          const req = {
            account_id: record.account_id,
            review_result: 3
          }
          await reviewRealNameInfo(req)
          showSuccess('审核已通过')
        } catch (err) {
          showError('审核通过失败请重试')
          return Promise.reject()
        }
      },
      handleCancel: () => {
        openModal({
          title: '驳回',
          content: (
            <Form form={rejectedForm}>
              <Form.Item label="驳回原因">
                <Select options={[{ value: 0, label: '自定义' }]} />
              </Form.Item>
              <Form.Item label="自定义内容" name="remark">
                <Input placeholder="请输入" />
              </Form.Item>
            </Form>
          ),
          handleOk: async () => {
            const result = rejectedForm.validateFields()
            const req = {
              account_id: record.account_id,
              review_result: 4,
              remark: result.remark
            }
            try {
              await reviewRealNameInfo(req)
              showSuccess('驳回成功')
            } catch (err) {
              showError('驳回失败,请重试。')
              return Promise.reject()
            }
          }
        })
      }
    })
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
      </Form>
      <Table
        columns={rnColumns(select, review)}
        dataSource={data?.list}
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
