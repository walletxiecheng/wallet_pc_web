import {
  Checkbox,
  Form,
  Input,
  Select,
  Space,
  Upload,
  Typography,
  Radio
} from 'antd'
import React, { useState } from 'react'
import { typeOption, statusOption } from '../../config'
import { PlusOutlined } from '@ant-design/icons'
export default function UploadForm(props) {
  const { form, chainList, upload, record } = props
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: record.icon
    }
  ])
  const beforeUpload = (file) => {
    upload(file)
    return false
  }

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  return (
    <div>
      <Form layout="vertical" form={form}>
        <Space>
          <Form.Item name="id" label="DApp ID">
            <Input disabled={true} />
          </Form.Item>
          <Form.Item name="upload_time" label="所属链">
            <Input disabled={true} />
          </Form.Item>
        </Space>
        <Space>
          <Form.Item name="name" label="名称">
            <Input placeholder="请输入"/>
          </Form.Item>
          <Form.Item name="chain_id" label="所属链">
            <Select
              options={chainList}
              style={{ width: '200px' }}
              placeholder="请选择"
            ></Select>
          </Form.Item>
        </Space>
        <Form.Item name="url" label="链接">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item name="describe" label="描述">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item name="dapp_type" label="标签类型">
          <Checkbox.Group options={typeOption} />
        </Form.Item>

        <Space>
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
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8
                  }}
                >
                  重新上传
                </div>
              </button>
            </Upload>
          </Form.Item>

          <Space direction="vertical">
            <Typography.Text type="secondary">
              提示：
              <br />
              1.请上传规格为256*256像素且小于50KB的照片
              <br />
              2.支持jpg、png
            </Typography.Text>
          </Space>
        </Space>
        <Form.Item label="状态" name="status">
          <Radio.Group options={statusOption} />
        </Form.Item>
      </Form>
    </div>
  )
}