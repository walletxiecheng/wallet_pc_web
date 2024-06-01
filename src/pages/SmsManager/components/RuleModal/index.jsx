import React from 'react'
import { Button, Form, Input, Radio } from 'antd'

export default function RuleModal({ record }) {
  const onFinish = (values) => {
    console.log(values)
  }

  return new Promise((resolve, reject) => {
    
  }) 

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="编号" name="id" required>
        <Input placeholder="6位数字" />
      </Form.Item>
      <Form.Item label="名称" name="name" required>
        <Input placeholder="不超过18字" />
      </Form.Item>
      <Form.Item label="唯一标识" name="key" required>
        <Input placeholder="仅限英文字符" />
      </Form.Item>
      <Form.Item label="内容" name="content" required>
        <Input placeholder="短信内容，70字" />
      </Form.Item>
      <Form.Item label="发送上限" name="sendMax" required>
        <Input placeholder="单日接受不了上限，0或未选择是为无上限" />
      </Form.Item>
      <Form.Item label="状态" name="state" required>
        <Radio.Group>
          <Radio value={1}>启用</Radio>
          <Radio value={0}>禁用</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  )
}
