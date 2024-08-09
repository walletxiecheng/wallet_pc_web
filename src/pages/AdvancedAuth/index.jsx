import React from 'react'
import './index.less'
import { Button, Form, Input, Upload, Flex } from 'antd'
import frontImg from '@/assets/image/frontCertificate.svg'
import backImg from '@/assets/image/backCertificate.svg'
import { PlusOutlined } from '@ant-design/icons'
import { header } from '@/common/config'
import { personAuthentication, enterpriseAuthentication } from '@/service'
import { showError, showSuccess } from '@/common/message'
import NavBar from '@/components/NavBar'
import arrowLeftIcon from '@/assets/icon/light/icon-arrow-left-line.png'
import { useNavigate } from 'react-router-dom'
import asteriskLineIcon from '@/assets/icon/light/icon-asterisk-line.svg'

export default function AdvancedAuth() {
  const navigate = useNavigate()

  // 取消默认上传
  const beforeUpload = () => {
    return false
  }

  //个人认证
  const personHandler = async (values) => {
    const req = {
      real_name: values.real_name,
      id_card_number: values.id_card_number,
      id_card_front: values?.file1?.file,
      id_card_back: values.file2.file,
      id_card_by_hand: values.file3.file
    }

    try {
      await personAuthentication(req, header)
      return showSuccess('上传成功')
    } catch {
      showError('上传失败')
    }
  }

  // 企业认证
  const enterpriseHandler = async (values) => {
    const req = {
      enterprise_name: values.enterprise_name,
      business_license: values.file4.file,
      business_license_by_hand: values.file4.file
    }
    try {
      await enterpriseAuthentication(req, header)
      showSuccess('上传成功')
    } catch {
      showError('上传失败')
    }
  }
  return (
    <>
      <NavBar />
      <div className="advanceContainer">
        <Flex
          onClick={() => {
            navigate(-1)
          }}
        >
          <img src={arrowLeftIcon} width={16} />
          <span>返回</span>
        </Flex>
        <div className="advanceBox">
          <header>
            <span className="important">*</span>
            <span>个人认证</span>
          </header>
          <main>
            <div className="formBox">
              <Form layout="vertical" className="form" onFinish={personHandler}>
                <Form.Item label="真实姓名" name="real_name">
                  <Input placeholder="请输入真实姓名" />
                </Form.Item>
                <Form.Item label="证件号码" name="id_card_number">
                  <Input placeholder="请输入证件号码" />
                </Form.Item>
                <Flex align="center" justify="space-between">
                  <Form.Item label="证件正面" name="file1" className="left">
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
                  <Form.Item label="证件反面" name="file2" className="right">
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
                <Form.Item label="手持证件" name="file3">
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
            <div className="formBox">
              <Form
                layout="vertical"
                className="form"
                onFinish={enterpriseHandler}
              >
                <Form.Item label="企业名称" name="enterprise_name">
                  <Input placeholder="请输入证件号码" />
                </Form.Item>
                <Flex align="center" justify="space-between">
                  <Form.Item label="营业执照" name="file4" className="left">
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
                  <Form.Item
                    label="手持营业执照"
                    name="file5"
                    className="right"
                  >
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
                        <div>点击上传 </div>
                      </button>
                    </Upload>
                  </Form.Item>
                </Flex>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    确认
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
