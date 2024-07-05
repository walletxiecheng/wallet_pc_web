import React, { useEffect, useState } from 'react'
import { Form, Input, Image, Space } from 'antd'
import { getRealNameCertificateInfo } from '@/service/commer'
import './index.css'
import { showWarning } from '@/components/TKMessage'

// 实名信息表单
export default function RenameForm({ form, accountId }) {
  // 获取实名信息
  const [realNameImg, setRealNameImg] = useState()
  const getRealNmeInfoHandler = async () => {
    try {
      const req = {
        account_id: accountId
      }
      const { data } = await getRealNameCertificateInfo(req)
      setRealNameImg(data)
    } catch (err) {
      showWarning(err.msg)
    }
  }

  useEffect(() => {
    getRealNmeInfoHandler()
  }, [])
  return (
    <div>
      <Form form={form} layout="vertical">
        <Space>
          <Form.Item label="真实姓名" name="name" className="formItem">
            <Input />
          </Form.Item>
          <Form.Item
            label="证件号码"
            name="certificate_number"
            className="formItem"
          >
            <Input />
          </Form.Item>
        </Space>
        <Form.Item label="企业名称" name="enterprise">
          <Input />
        </Form.Item>
        <Space>
          <Form.Item
            label="证件正面"
            className="formItem"
            name="certificate_by_hand	"
          >
            <Image height={200} src={realNameImg?.id_card_front_side} />
          </Form.Item>
          <Form.Item
            label="证件反面"
            className="formItem"
            name="certificate_back_side"
          >
            <Image height={200} src={realNameImg?.id_card_back_side} />
          </Form.Item>
        </Space>
        <Form.Item
          label="手持证件"
          className="formItem"
          name="certificate_back_side"
        >
          <Image height={200} src={realNameImg?.id_card_by_hand} />
        </Form.Item>

        <Space>
          <Form.Item
            label="营业执照"
            className="formItem"
            name="certificate_by_hand	"
          >
            <Image height={200} src={realNameImg?.certificate_front_side} />
          </Form.Item>
          <Form.Item
            label="手持营业执照"
            className="formItem"
            name="certificate_back_side"
          >
            <Image height={200} src={realNameImg?.certificate_by_hand} />
          </Form.Item>
        </Space>
      </Form>
    </div>
  )
}
