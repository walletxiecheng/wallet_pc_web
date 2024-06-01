import React from 'react'
import { Space, Table, Button, Modal, Form, Input, Radio } from 'antd'
import { useState } from 'react'

const columns = [
  {
    title: '编号',
    dataIndex: 'id',
    key: 'id',
    width: '10%'
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    width: '20%'
  },
  {
    title: '唯一标识',
    dataIndex: 'key',
    key: 'key'
  },
  {
    title: '内容',
    dataIndex: 'content',
    key: 'content',
    width: '30%'
  },
  {
    title: '发送上限',
    dataIndex: 'sendMax',
    key: 'sendMax'
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: () => (
      <Space>
        <a>操作</a>
      </Space>
    )
  }
]
const dataSource = [
  {
    key: 1,
    id: '1232',
    name: '短信模板名称',
    content: 'content',
    sendMax: 32
  },
  {
    key: 2,
    id: '1232',
    name: '短信模板名称',
    content: 'content',
    sendMax: 32
  },
  {
    key: 3,
    id: '1232',
    name: '短信模板名称',
    content: 'content',
    sendMax: 32
  },
  {
    key: 4,
    id: '1232',
    name: '短信模板名称',
    content: 'content',
    sendMax: 32
  },
  {
    key: 5,
    id: '1232',
    name: '短信模板名称',
    content: 'content',
    sendMax: 32
  },
  {
    key: 6,
    id: '1232',
    name: '短信模板名称',
    content: 'content',
    sendMax: 32
  },
  {
    key: 7,
    id: '1232',
    name: '短信模板名称',
    content: 'content',
    sendMax: 32
  },
  {
    key: 8,
    id: '1232',
    name: '短信模板名称',
    content: 'content',
    sendMax: 32
  },
  {
    key: 9,
    id: '1232',
    name: '短信模板名称',
    content: 'content',
    sendMax: 32
  }
]

export default function TkTable() {
  const [data, setData] = useState(dataSource)
  // madal：新建弹出框
  const onFinish = (values) => {
    console.log(values)
  }
  const showConfirm = () => {
    Modal.info({
      title: '新建规则',
      content: (
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
    })
  }
  // 处理添加信息
  const handleAddSms = () => {
    showConfirm()
    const newData = {
      id: '12121',
      key: 18,
      name: 'test',
      content: 'newcontent',
      sendMax: '12'
    }
    console.log(newData)
    setData([...data, newData])
  }
  return (
    <>
      <Space>
        <Button onClick={handleAddSms} style={{ marginBottom: '16px' }}>
          + 新建
        </Button>
      </Space>

      <Table columns={columns} dataSource={data} />
    </>
  )
}
