import React from 'react'
import { Form, Input, Select, Radio, Space } from 'antd'
import { statusOption, rules } from '../../config'

export default function LegalForm({ form, addrList }) {
  return (
    <div>
      <Form layout="vertical" form={form}>
        <Space justify="space-between">
          <Form.Item
            label="法币名称"
            name="name"
            requiredMark={false}
            rules={[
              {
                required: true,
                message: '法币名称为必选参数'
              }
            ]}
          >
            <Input style={{ width: '210px' }} placeholder="请输入" />
          </Form.Item>
          <Form.Item label="单位符号" name="symbol">
            <Input style={{ width: '210px' }} placeholder="请输入" />
          </Form.Item>
        </Space>
        <Space justify="space-between">
          <Form.Item label="参考汇率地址" name="addr">
            <Select
              options={addrList}
              style={{ width: '210px' }}
              placeholder="请选择"
            />
          </Form.Item>

          <Form.Item label="汇率修正值" name="correct">
            <Input style={{ width: '210px' }} placeholder="请输入" />
          </Form.Item>
        </Space>
        <Form.Item label="状态" name="status">
          <Radio.Group options={statusOption} />
        </Form.Item>
      </Form>
    </div>
  )
}
