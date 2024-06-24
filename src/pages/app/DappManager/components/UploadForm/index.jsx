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
import React from 'react'
import { typeOption } from '../../config'
import { PlusOutlined } from '@ant-design/icons'
import { statusOption } from '../../config'
export default function UploadForm(props) {
  const { form, chainList, upload } = props
  const beforeUpload = (file) => {
    upload(file)
    return false
  }
  return (
    <div>
      <Form layout="vertical" form={form}>
        <Space>
          <Form.Item name="name" label="名称">
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="chain_id" label="所属链">
            <Select
              options={chainList}
              style={{ width: '200px' }}
              placeholder="请选择"
            ></Select>
          </Form.Item>
        </Space>
        <Form.Item name="dapp_url" label="链接">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item name="describe" label="描述">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item name="dapp_type" label="标签类型">
          <Checkbox.Group options={typeOption} />
        </Form.Item>

        <Space>
          <Form.Item label="file" name="file">
            <Upload
              listType="picture-card"
              beforeUpload={beforeUpload}
              maxCount={1}
              multiple={false}
              fileList={undefined}
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
                  点击上传
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
