import React from 'react'
import { Space, Table, Button, Form, Select, Input } from 'antd'
import { useState } from 'react'
import { columns, downLoadOptions } from './config'
import { openModal } from './components/Modal'
import { SmsForm } from './components/Form'
import style from './index.module.less'
import { usePagination } from 'ahooks'

const SmsManager = () => {
  const [form] = Form.useForm()
  const [inputValue, setInputValue] = useState()
  const [selectKey, setSelectKey] = useState(1)

  const { sysList } = usePagination(async (params) => {})
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
          // TODO 调用接口保存数据
        } catch (error) {
          // TODO 提示保存失败
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
  const onSearch = () => {
    const req = {
      selectKey: inputValue
    }
    // 调用接口

    // 渲染数据
    console.log(req)
  }
  return (
    <>
      <Space className={style.editDataBox}>
        {/* 数据操作区 */}
        <Space.Compact>
          <Select
            className={style.select}
            defaultValue="编号"
            options={downLoadOptions}
            onChange={(e) => {
              setSelectKey(e)
            }}
          />
          <Input
            placeholder="请输入编号"
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
          />
          <Button type="primary" onClick={onSearch}>
            搜索
          </Button>
        </Space.Compact>
        <Space.Compact>
          <Button type="primary" onClick={handleAddSms}>
            + 新建
          </Button>
        </Space.Compact>
      </Space>

      <Table columns={columns(handleEditSms)} />
    </>
  )
}

export default SmsManager
