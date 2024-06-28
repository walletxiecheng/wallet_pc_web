import React from 'react'
import { Form, Input, DatePicker, Select, Radio } from 'antd'

export default function VersionForm() {
  return (
    <div>
      <Form layout="vertical">
        <Form.Item label="版本号" name="verify_code">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="上线日期" name="online_time">
          <DatePicker placeholder="请选择" />
        </Form.Item>
        <Form.Item label="所属系统类型" name="platform">
          <Select placeholder="请选择" />
        </Form.Item>
        <Form.Item label="支持系统版本" name="support_system_version">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="是否强制更新" name="is_force">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="下载地址" name="url">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="更新前提示词描述" name="content">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="更新后功能概述" name="function_desc">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="是否停用" name="is_abandon">
          <Radio />
        </Form.Item>
      </Form>
    </div>
  )
}
