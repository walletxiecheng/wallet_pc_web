import React from 'react'
import { Space, Table, Button, Form, Select, Input } from 'antd'
import { useState } from 'react'
import { columns, downLoadOptions } from './config'
import { openModal } from './components/Modal'
import { SmsForm } from './components/Form'
import style from './index.module.less'

const dataSource = [
  {
    key: 1,
    id: '10001',
    name: '短信模板名称',
    content: 'content',
    sendMax: 31
  },
  {
    key: 2,
    id: '10002',
    name: '短信模板名称',
    content: 'content',
    sendMax: 32
  },
  {
    key: 3,
    id: '10003',
    name: '短信模板名称',
    content: 'content',
    sendMax: 33
  },
  {
    key: 4,
    id: '10004',
    name: '短信模板名称',
    content: 'content',
    sendMax: 34
  },
  {
    key: 5,
    id: '10005',
    name: '短信模板名称',
    content: 'content',
    sendMax: 35
  },
  {
    key: 6,
    id: '10006',
    name: '短信模板名称',
    content: 'content',
    sendMax: 36
  },
  {
    key: 7,
    id: '10007',
    name: '短信模板名称',
    content: 'content',
    sendMax: 37
  },
  {
    key: 8,
    id: '10008',
    name: '短信模板名称',
    content: 'content',
    sendMax: 38
  },
  {
    key: 9,
    id: '10009',
    name: '短信模板名称',
    content: 'content',
    sendMax: 39
  }
]

const SmsManager = () => {
  const [form] = Form.useForm()
  const [data, setData] = useState(dataSource)
  const [inputValue, setInputValue] = useState()
  const [selectKey, setSelectKey] = useState('id')

  // Modal：新建弹出框
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

  const handleEditSms = (record) => {
    // 重置表单字段
    // 设置表单值为：record回显编辑
    setTimeout(() => {
      form.resetFields()
      form.setFieldsValue(record)
    }, 64)
    // 打开弹窗编辑
    openModal({
      okText: '编辑',
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
          <Button onClick={onSearch}>搜索</Button>
        </Space.Compact>
        <Space.Compact>
          <Button onClick={handleAddSms}>+ 新建</Button>
        </Space.Compact>
      </Space>

      <Table columns={columns(handleEditSms)} dataSource={data} />
    </>
  )
}

export default SmsManager
