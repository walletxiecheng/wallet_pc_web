import React, { useState } from 'react'
import { Form, Input, Upload, Radio, Space, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export default function CoinForm({ form, record, type, chainList }) {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: record?.icon
    }
  ])

  const chainOptions = () => {
    // console.log(chainList)
    return chainList.map((item) => {
      return { value: item.id, label: item.name }
    })
  }
  const beforeUpload = (file) => {
    return false
  }

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  chainOptions()
  const statusOptions = [
    {
      value: 1,
      label: '启用'
    },
    {
      value: 0,
      label: '禁用'
    }
  ]
  return (
    <div>
      <Form layout="vertical" form={form}>
        {/* { 
           <Form.Item label="代币ID">
           <Input placeholder="请输入" name="name" />
         </Form.Item>
        } */}
        <Form.Item label="名称">
          <Input placeholder="请输入" name="name" />
        </Form.Item>
        <Form.Item label="所属链" name="chain_id">
          <Select placeholder="请输入" options={chainOptions()} />
        </Form.Item>
        <Form.Item label="创建者" name="creator">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="代币合约" name="contract">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="代币单位" name="symbol">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="精度" name="precision">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="logo" name="file">
          <Upload
            listType="picture-card"
            beforeUpload={beforeUpload}
            maxCount={1}
            fileList={fileList}
            onChange={onChange}
            multiple={false}
          >
            <button
              style={{
                border: 0,
                background: 'none'
              }}
              type="button"
            >
              <Space
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '10px',
                  borderRadius: '50%'
                }}
              >
                <PlusOutlined width={'40px'} style={{ color: '#3f78f9' }} />
              </Space>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="代币状态">
          <Radio.Group options={statusOptions} />
        </Form.Item>
      </Form>
    </div>
  )
}
