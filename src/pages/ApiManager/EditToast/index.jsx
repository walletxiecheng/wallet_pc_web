import React from 'react'
import './index.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { Form, Input, Button, Flex } from 'antd'

export default function EditToast() {
  const onFinish = () => {}
  return (
    <div className="editIPcontainer">
      <header className="toastTitle">
        <div>提示</div>
        <img
          src={closeIcon}
          onClick={() => {
            setShowToast(false)
          }}
        />
      </header>
      <div className="line"></div>
      <Form layout="vertical" className="form" onFinish={onFinish}>
        <Form.Item label="API地址" name="bind_ip">
          <Input />
        </Form.Item>
        <Form.Item label="备注" name="remark">
          <Input />
        </Form.Item>
        <Form.Item>
          <Flex justify="right">
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  )
}
