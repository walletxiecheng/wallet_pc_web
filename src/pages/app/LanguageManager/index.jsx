import React from 'react'
import { Divider, Form, Select, Space, Input, Button, Table, Tabs } from 'antd'
import { languageColumns, recordColumns } from './config'

const recordItems = [
  {
    key: '1',
    label: '历史'
  }
]
export default function LanguageManager() {
  const onFinish = (values) => {}

  return (
    <div>
      <header>
        <h2>语言管理</h2>
      </header>
      <Divider />
      {/* 语言列表 */}
      <div>
        <header>
          <Form onFinish={onFinish}>
            <Space>
              <Form.Item label="语言" name="search_type">
                <Select></Select>
              </Form.Item>
              <Form.Item label="搜索" name="key_words">
                <Input></Input>
              </Form.Item>
              <Form.Item>
                <Button
                  type="link"
                  htmlType="submit"
                  style={{ border: '1px solid #3f78f9' }}
                >
                  重置
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
              </Form.Item>
            </Space>
          </Form>
        </header>
        <Table columns={languageColumns()} />
      </div>
      {/* 历史记录 */}
      <Tabs items={recordItems}></Tabs>
      <div>
        <Table columns={recordColumns()}></Table>
      </div>
    </div>
  )
}
