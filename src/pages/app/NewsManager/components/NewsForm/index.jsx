import { DatePicker, Form, Input } from 'antd'
import React from 'react'
import Markdown from 'react-markdown'
export default function NewsForm(props) {
  const { form } = props
  const markDown = '121212'
  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item label="标题" name="title">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="内容" name="content">
          <Markdown>{markDown}</Markdown>
        </Form.Item>
        <Form.Item label="预设发布时间" name="preset_publish_time">
          <DatePicker placeholder="请选择" />
        </Form.Item>
      </Form>
    </div>
  )
}
