import React from 'react'
import { Space, Table, Button } from 'antd'
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
  // 处理添加信息
  const handleAddSms = () => {
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
        <Button
          style={{
            backgroundColor: '#1e1e1e',
            color: '#ffffff',
            fontWeight: '200'
          }}
          onClick={handleAddSms}
        >
          + 新建
        </Button>
      </Space>

      <Table columns={columns} dataSource={data} />
    </>
  )
}
