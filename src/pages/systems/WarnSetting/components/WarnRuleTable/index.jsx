import React from 'react'
import { Radio, Space, InputNumber, Form, Input, Table, Button } from 'antd'
import { columns } from './config'
import style from './index.module.less'
export default function WarnRuleTable() {
  const data = [
    {
      key: '1',
      id: 1,
      tel: '123',
      desc: '职务'
    },
    {
      key: '2',
      id: 2,
      tel: '123',
      desc: '职务'
    }
  ]
  return (
    <div className={style.ruleContainer}>
      <header>
        <h4>所有版本报警规则</h4>
        <Radio>启用通知</Radio>
        <Space>
          <Button type="primary">保存</Button>
        </Space>
      </header>
      <Space>
        <Form.Item label="统计时间">
          <InputNumber addonAfter="分" />
        </Form.Item>
        <Form.Item label="统计时间">
          <InputNumber addonAfter="次" />
        </Form.Item>
      </Space>

      <Form.Item label="短信内容">
        <Input style={{ width: '300px' }} />
      </Form.Item>

      <div className="tableBox">
        <Space>
          <h4>通知人员</h4>
          <Button>新增</Button>
        </Space>
        <Table pagination={false} dataSource={data} columns={columns()} />
      </div>
    </div>
  )
}
