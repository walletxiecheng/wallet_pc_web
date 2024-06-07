import React from 'react'
import { Form, Input, Select, Radio } from 'antd'
export default function AdminForm({ form }) {
  return (
    <Form form={form} layout="vertical" size="middle">
      <Form.Item
        label="账号"
        name="account_number"
        rules={[
          {
            required: true,
            message: '请输入管理员账号'
          }
        ]}
      >
        <Input></Input>
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入管理员密码'
          }
        ]}
      >
        <Input></Input>
      </Form.Item>
      <Form.Item label="姓名" name="name">
        <Input></Input>
      </Form.Item>
      <Form.Item label="部门" name="department">
        <Input></Input>
      </Form.Item>
      <Form.Item label="岗位" name="port">
        <Input></Input>
      </Form.Item>
      <Form.Item label="电话" name="phone_number">
        <Input></Input>
      </Form.Item>
      <Form.Item label="角色" name="character_id">
        <Select
          // defaultValue={'技术'}
          options={[
            {
              value: '1',
              label: '技术'
            },
            {
              value: '2',
              label: '设计'
            }
          ]}
        ></Select>
      </Form.Item>
      <Form.Item
        label="状态"
        name="Enable"
        layout="horizontal"
        rules={[{ required: true, message: '请选择状态' }]}
      >
        <Radio.Group>
          <Radio value={1}>启用</Radio>
          <Radio value={2}>禁用</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  )
}
