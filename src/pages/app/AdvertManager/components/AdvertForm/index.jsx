import React, { useState } from 'react'
import {
  Form,
  Select,
  Input,
  Upload,
  DatePicker,
  InputNumber,
  Flex,
  Space,
  Typography
} from 'antd'
import { priorityOptions, regionOptions } from '../../config'
import { PlusOutlined } from '@ant-design/icons'

export default function AdvertForm(props) {
  const { form, record, type } = props
  console.log(record)
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: record?.image
    }
  ])
  const beforeUpload = () => false

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }
  return (
    <div>
      <Form layout="vertical" form={form}>
        <Form.Item name="title" label="名称">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="生效时间" name="eff_time">
          <DatePicker placeholder="请选择" />
        </Form.Item>
        <Form.Item label="有效期" name="validity">
          <InputNumber addonAfter="天" />
        </Form.Item>
        <Form.Item label="优先级" name="priority">
          <Select placeholder="请选择" options={priorityOptions} />
        </Form.Item>
        <Form.Item label="投放区" name="region">
          <Select placeholder="请选择" options={regionOptions} />
        </Form.Item>
        <Form.Item label="链接" name="ad_url">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="备注" name="remark">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="logo" name="file">
          <Upload
            listType="picture-card"
            beforeUpload={beforeUpload}
            maxCount={1}
            fileList={type == 2 ? fileList : undefined}
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
      </Form>
    </div>
  )
}
