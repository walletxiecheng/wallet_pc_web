import React from 'react'
import { Space, Table, Button, Form, Select, Input } from 'antd'
import { useState } from 'react'
import { columns, downLoadOptions } from './config'
import { openModal } from './components/Modal'
import { SmsForm } from './components/Form'
import { usePagination } from 'ahooks'
import { getSmsList, addSmsRule } from '@/service/sms'
import { showError, showSuccess } from '@/components/TKMessage'

const PAGE_SIZE = 2

const SmsManager = () => {
  const [form] = Form.useForm()
  const [searchForm] = Form.useForm()
  const [disable, setDisable] = useState(true)
  const {
    data: smsList,
    run: smsRun,
    pagination: smsPagination
  } = usePagination(
    async (params) => {
      const res = await getSmsList(params)
      if (res.code !== 0) {
        showError('请求数据失败，请重试。')
        return { total: 0, list: [] }
      }
      const { data } = res
      return { total: data.total, list: data.system_sms_list }
    },
    {
      onError: () => {
        return showError('请求出错')
      },
      defaultParams: [{ current: 1, pageSize: PAGE_SIZE }]
    }
  )
  // Modal：新建
  const handleAddSms = () => {
    // 重置表单字段-打开弹窗
    setTimeout(() => form.resetFields(), 64)
    openModal({
      title: '新建规则',
      content: <SmsForm form={form} />,
      handleOk: async () => {
        const result = await form.validateFields()
        try {
          const header = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          // TODO 调用接口保存数据
          const res = await addSmsRule(result, header)
          if (res.code !== 0) {
            return showError('添加失败,请重试。')
          }
          smsRun({ current: 1, pageSize: PAGE_SIZE })
          return showSuccess('添加成功！')
        } catch (error) {
          // TODO 提示保存失败
          showError(error)
          return Promise.reject()
        }
      }
    })
  }
  // Modal：编辑
  const handleEditSms = (record) => {
    // 重置表单字段
    // 设置表单值为：record回显编辑
    setTimeout(() => {
      form.resetFields()
      form.setFieldsValue(record)
    }, 64)
    // 打开弹窗编辑
    openModal({
      okText: '保存',
      title: '编辑规则',
      content: <SmsForm form={form} />,
      handleOk: async (modal) => {
        const result = await form.validateFields()
        try {
          // TODO 调用接口保存数据
        } catch (error) {
          // TODO 提示保存失败
          return Promise.reject()
        }
      }
    })
  }
  const onSearch = (values) => {
    // 调用接口
    // 渲染数据
    smsRun({
      current: 1,
      pageSize: PAGE_SIZE,
      ...values
    })
    setDisable(true)
    searchForm.resetFields()
  }
  return (
    <div>
      {/* 数据操作区 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Form onFinish={onSearch} form={searchForm}>
          <Space>
            <Form.Item label={'检索'} name="serial_number">
              <Input
                style={{ width: 230 }}
                onChange={() => {
                  setDisable(false)
                }}
                placeholder="请输入编号，唯一标识或内容"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" disabled={disable} htmlType="submit">
                搜索
              </Button>
            </Form.Item>
          </Space>
        </Form>
        <Button type="primary" onClick={handleAddSms}>
          + 新建
        </Button>
      </div>

      <Table
        dataSource={smsList?.list || []}
        rowKey={(record) => record.id}
        columns={columns(handleEditSms)}
        pagination={{
          total: smsList?.total,
          current: smsPagination.current,
          pageSize: smsPagination.pageSize,
          onChange: smsPagination.onChange,
          onShowSizeChange: smsPagination.onChange
        }}
      />
    </div>
  )
}

export default SmsManager
