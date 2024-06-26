import React from 'react'
import { Space, Table, Button, Form, Input } from 'antd'
import { useState } from 'react'
import { columns } from './config'
import { openModal } from './components/Modal'
import { SmsForm } from './components/Form'
import { usePagination } from 'ahooks'
import { getSmsList, addSmsRule, alertSmsRule } from '@/service/sms'
import { showError, showSuccess } from '@/components/TKMessage'
import { header } from '@/common/config'
const PAGE_SIZE = 10

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
      try {
        const res = await getSmsList(params)
        const { data } = res
        return { total: data.total, list: data.system_sms_list }
      } catch (err) {
        showError('请求数据失败，请重试。')
        return { total: 0, list: [] }
      }
    },
    {
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
          //  调用接口保存数据
          await addSmsRule(result, header)

          smsRun({ current: 1, pageSize: PAGE_SIZE })
          return showSuccess('添加成功！')
        } catch (error) {
          //  提示保存失败
          showError('新建失败，请检查')
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
        result.id = record.id
        try {
          // 调用接口保存数据
          await alertSmsRule(result)
          smsRun({ current: 1, pageSize: PAGE_SIZE })
          showSuccess('保存成功')
        } catch (error) {
          showError('保存失败')
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
            <Form.Item label={'检索'} name="key">
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
        loading={!smsList}
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
