import React from 'react'
import { Form, Input, Select, Radio } from 'antd'
import { STATUS_ENUM } from '../../config'
export default function EditForm(props) {
  const { form, initialValues, roleList } = props
  return (
    <Form
      form={form}
      initialValues={initialValues}
      layout="vertical"
      size="middle"
    >
      <Form.Item label="姓名" name="name">
        <Input></Input>
      </Form.Item>
      <Form.Item label="部门" name="department">
        <Input></Input>
      </Form.Item>
      <Form.Item label="岗位" name="post">
        <Input></Input>
      </Form.Item>
      <Form.Item label="电话" name="phone_number">
        <Input></Input>
      </Form.Item>
      <Form.Item label="角色" name="character_id">
        <Select options={roleList}></Select>
      </Form.Item>
      <Form.Item
        label="状态"
        name="status"
        layout="horizontal"
        rules={[{ required: true, message: '请选择状态' }]}
        initialValue={STATUS_ENUM.ENABLE}
      >
        <Radio.Group>
          <Radio value={STATUS_ENUM.ENABLE}>启用</Radio>
          <Radio value={STATUS_ENUM.DISABLE}>禁用</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  )
}
