import { Divider, Form, Select, Radio, Space, Button, Input, Table } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function HandleRule() {
  const ruleData = useLocation()?.state
  const type = useLocation()?.state?.type
  return (
    <div>
      <header>
        <h3>{type === 1 ? '新增' : '编辑'}</h3>
      </header>
      <Divider />
      <div className="dataBox">
        <Form>
          <Space>
            <Form.Item>
              <Select defaultValue={'所有版本报警规则'} />
            </Form.Item>
            <Form.Item>
              <Radio defaultChecked={true}>启用通知</Radio>
            </Form.Item>
            <Form.Item>
              <Button type="primary">保存</Button>
            </Form.Item>
          </Space>
          <br />
          <Space>
            <Form.Item label="触发指标">60min</Form.Item>
          </Space>
          <br />
          <Space>
            <Form.Item label="短信内容">
              <Input></Input>
            </Form.Item>
          </Space>
        </Form>
        <Divider />
        <div className="tabBox">
          <Space>
            <header>通知人员</header>
            <Button type="primary">新增</Button>
          </Space>
          <Table />
        </div>
      </div>
    </div>
  )
}
