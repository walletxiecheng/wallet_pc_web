import React, { useState } from 'react'
import {
  Radio,
  Space,
  InputNumber,
  Form,
  Input,
  Table,
  Button,
  Divider
} from 'antd'
import { columns } from './config'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import style from './index.module.less'

export const NotifyAddForm = (props) => {
  const { form } = props
  return (
    <Form form={form}>
      <Form.Item
        name="telNumber"
        label="联系电话"
        rules={[
          {
            required: true,
            message: '请输入联系电话'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="desc"
        label="备注"
        rules={[
          {
            required: true,
            message: '请输入备注信息'
          }
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  )
}
export default function WarnRuleTable({ title, data, addPerson }) {
  // 是否启动通知
  const isCheck = useState(true)
  const isDisabled = useState(true)
  const [addForm] = Form.useForm()
  const handleEditWarn = () => {
    console.log('处理编辑')
    openModal({
      title: '新增通知',
      content: <NotifyAddForm form={addForm} />,
      handleOk: async (modal) => {
        const result = await addForm.validateFields()
        try {
          addPerson(result)
        } catch (err) {
          return Promise.reject()
        }
      }
    })
  }
  // 处理新增通知
  const handleAddPerson = () => {
    openModal({
      title: '编辑通知',
      content: <NotifyAddForm form={addForm} />,
      handleOk: async (modal) => {
        const result = await addForm.validateFields()
        try {
          // addPerson(result)
          // 处理编辑逻辑
        } catch (err) {
          return Promise.reject()
        }
      }
    })
  }

  return (
    <div className={style.ruleContainer}>
      <header>
        <Space>
          <h4>{title}</h4>
          <Radio defaultChecked={isCheck}>启用通知</Radio>
        </Space>
        <Space>
          <Button type="primary">保存</Button>
        </Space>
      </header>

      <Space>
        <Form.Item label="统计时间">
          <InputNumber style={{ width: 100 }} addonAfter="分" />
        </Form.Item>
        <Form.Item label="统计时间">
          <InputNumber style={{ width: 100 }} addonAfter="次" />
        </Form.Item>
      </Space>

      <Form.Item label="短信内容">
        <Input style={{ width: 320 }} />
      </Form.Item>
      <Divider />
      <div>
        <Space className={style.tableHeader}>
          <h4>通知人员</h4>
          <Button type="primary" onClick={handleAddPerson}>
            新增
          </Button>
        </Space>
        <Table
          pagination={false}
          dataSource={data}
          columns={columns(handleEditWarn)}
        />
      </div>
    </div>
  )
}
