import React from 'react'
import { Button, Divider, Form, Input, Select, Space, Table } from 'antd'
import { nodeColumns, statusOption } from './config'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import NodeForm from './components/NodeForm'
export default function NodeManager() {
  const [nodeForm] = Form.useForm()

  // TODO 创建
  const create = () => {
    openModal({
      title: '创建',
      content: <NodeForm form={nodeForm} />,
      handleOk: () => {}
    })
  }

  // TODO 编辑
  const edit = () => {
    openModal({
      title: '创建',
      content: <NodeForm form={nodeForm} />,
      handleOk: () => {}
    })
  }
  return (
    <div>
      <header>
        <h2>节点管理</h2>
      </header>
      <Divider />
      <div>
        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Form>
            <Space>
              <Form.Item label="状态">
                <Select placeholder="全部" options={statusOption} />
              </Form.Item>
              <Form.Item label="搜索">
                <Input placeholder="搜索名称" />
              </Form.Item>
              <Form.Item>
                <Button type="link">重置</Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary">查询</Button>
              </Form.Item>
            </Space>
          </Form>
          <Button type="primary" onClick={create}>
            创建
          </Button>
        </header>
        <Table columns={nodeColumns(edit)} />
      </div>
    </div>
  )
}
