import React from 'react'
import { Space, Table, Button, Modal } from 'antd'
import RuleModal from './components/RuleModal'
import { useState } from 'react'
import { columns } from './config'

const dataSource = [
  {
    key: 1,
    id: '10001',
    name: '短信模板名称',
    content: 'content',
    sendMax: 31
  },
  {
    key: 2,
    id: '10002',
    name: '短信模板名称',
    content: 'content',
    sendMax: 32
  },
  {
    key: 3,
    id: '10003',
    name: '短信模板名称',
    content: 'content',
    sendMax: 33
  },
  {
    key: 4,
    id: '10004',
    name: '短信模板名称',
    content: 'content',
    sendMax: 34
  },
  {
    key: 5,
    id: '10005',
    name: '短信模板名称',
    content: 'content',
    sendMax: 35
  },
  {
    key: 6,
    id: '10006',
    name: '短信模板名称',
    content: 'content',
    sendMax: 36
  },
  {
    key: 7,
    id: '10007',
    name: '短信模板名称',
    content: 'content',
    sendMax: 37
  },
  {
    key: 8,
    id: '10008',
    name: '短信模板名称',
    content: 'content',
    sendMax: 38
  },
  {
    key: 9,
    id: '10009',
    name: '短信模板名称',
    content: 'content',
    sendMax: 39
  }
]

const SmsManager = () => {
  const [data, setData] = useState(dataSource)

  const onFinish = (values) => {
    console.log(values)
  }

  // Modal：新建弹出框
  const showConfirm = (record) => {
    // Modal.info({
    //   title: record ? '编辑规则' : '新建规则',
    //   content: <RuleModal record={record} />
    // })
  }
  // 处理添加信息
  const handleAddSms = () => {
    // showConfirm()
    RuleModal().then((value) => {
      console.log('弹窗的值', value)
    })
    // const newData = {
    //   id: '12121',
    //   key: 18,
    //   name: 'test',
    //   content: 'newContent',
    //   sendMax: '12'
    // }
    // console.log(newData)
    // setData([...data, newData])
  }

  const handleEditSms = (record) => {
    showConfirm(record)
  }
  return (
    <>
      <Space>
        <Button onClick={handleAddSms} style={{ marginBottom: '16px' }}>
          + 新建
        </Button>
      </Space>

      <Table columns={columns(handleEditSms)} dataSource={data} />
    </>
  )
}

export default SmsManager
