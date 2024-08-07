import React, { useState } from 'react'
import './index.less'
import { Button, Form, Input, Space, Upload, Flex } from 'antd'
import frontImg from '@/assets/image/frontCertificate.svg'
import backImg from '@/assets/image/backCertificate.svg'
import { PlusOutlined } from '@ant-design/icons'
import { header } from '@/common/config'
import { personAuthentication, enterpriseAuthentication } from '@/service'
import { showError } from '@/common/message'
export default function AdvancedAuth() {
  const frontFile = useState({
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: frontImg
  })

  const backFile = useState({
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: backImg
  })

  const beforeUpload = (file) => {
    // upload(file)
    return false
  }
  const onFinish = async (values) => {
    values.id_card_front = values.id_card_front.fileList[0]
    values.id_card_back = values.id_card_back.fileList[0]
    values.id_card_back = values.id_card_by_hand.fileList[0]
    try {
      await personAuthentication(values, header)
      showError('上传成功')
    } catch {
      showError('上传失败')
    }
  }
  return (
    <div className="advanceContainer">
      <div>返回</div>
      <div className="advanceBox">
        <header>个人认证</header>
        <main>
          <div className="formBox">
            <Form layout="vertical" className="form" onFinish={onFinish}>
              <Form.Item label="真实姓名" name="real_name">
                <Input placeholder="请输入真实姓名" />
              </Form.Item>
              <Form.Item label="证件号码" name="id_card_number">
                <Input placeholder="请输入证件号码" />
              </Form.Item>
              <Flex align="center" justify="space-between">
                <Form.Item label="证件正面" name="id_card_front">
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
                      <div>点击上传</div>
                    </button>
                  </Upload>
                </Form.Item>
                <Form.Item label="证件反面" name="id_card_back">
                  {/* <img src={backImg} /> */}
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
                      <div>点击上传</div>
                    </button>
                  </Upload>
                </Form.Item>
              </Flex>
              <Form.Item label="手持证件" name="id_card_by_hand">
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
                    <div>点击上传</div>
                  </button>
                </Upload>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  确认
                </Button>
              </Form.Item>
            </Form>
          </div>
        </main>
      </div>
      <div className="advanceBox">
        <header>企业认证</header>
        <main>
          <div className="formBox">11</div>
        </main>
      </div>
    </div>
  )
}
