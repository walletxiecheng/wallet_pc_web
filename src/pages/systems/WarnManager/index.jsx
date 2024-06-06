import React from 'react'
import {
  Table,
  Form,
  InputNumber,
  DatePicker,
  Input,
  Select,
  Button,
  Space
} from 'antd'

const { RangePicker } = DatePicker

import { columns } from './config'
import style from './index.module.less'
const dataSource = [
  {
    key: '0',
    id: 1
  }
]
const options = [
  {
    value: 'jack',
    label: 'Jack'
  },
  {
    value: 'lucy',
    label: 'Lucy'
  }
]

export default function WarnManager() {
  const [form] = Form.useForm()
  // 查询
  const query = () => {}
  // 重置
  const reset = () => {}

  return (
    <div className={style.warnContainer}>
      <div className={style.warnSet}>
        <Form layout="horizontal" className={style.warnSetForm}>
          <Space size="large">
            <Form.Item name="min" label="触发指标">
              <InputNumber changeOnWheel placeholder="最小值" />
            </Form.Item>
            <Form.Item name="max">
              <InputNumber changeOnWheel placeholder="最大值" />
            </Form.Item>
            <Form.Item name="date" label="日期">
              <RangePicker
                onChange={(e) => {
                  console.log(e)
                }}
              />
            </Form.Item>
            <Form.Item name="dsc" label="摘要">
              <Input placeholder="报错内容"></Input>
            </Form.Item>
          </Space>

          <Space size="large">
            <Form.Item name="sysType" label="系统类型">
              <Select option={options} placeholder="系统类型"></Select>
            </Form.Item>
            <Form.Item name="warnType" label="报警类型">
              <Select option={options} placeholder="报警类型"></Select>
            </Form.Item>
            <Form.Item name="ruleType" label="规则类型">
              <Select option={options} placeholder="规则类型"></Select>
            </Form.Item>
          </Space>
          <Space style={{ marginLeft: '40%' }}>
            <Button type="primary" onClick={reset}>
              重置
            </Button>
            <Button type="primary" onClick={query}>
              查询
            </Button>
          </Space>
        </Form>
      </div>
      <Table columns={columns()} dataSource={dataSource} />
    </div>
  )
}
