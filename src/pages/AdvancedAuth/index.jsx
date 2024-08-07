import React from 'react'
import './index.less'
import { Form, Input, Space } from 'antd'

export default function AdvancedAuth() {
  return (
    <div className="advanceContainer">
      <div>返回</div>
      <div className="advanceBox">
        <header>个人认证</header>
        <main>
          <div className="formBox">
            <Form layout="vertical">
              <Form.Item label="真实姓名">
                <Input placeholder="请输入真实姓名" />
              </Form.Item>
              <Form.Item label="证件号码">
                <Input placeholder="请输入证件号码" />
              </Form.Item>
              <Space>
                <Form.Item></Form.Item>
              </Space>
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
