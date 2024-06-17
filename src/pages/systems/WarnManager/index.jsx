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
import { columns, ruleOptions, systemOptions, warnOptions } from './config'
import { usePagination } from 'ahooks'

const { RangePicker } = DatePicker
export default function WarnManager() {
  // const [form] = Form.useForm()
  // TODO 数据渲染

  const { data: warnList, run: warnRun, pagination } = usePagination()
  // 查询
  const query = (e) => {
    console.log(e)
  }
  // 重置
  const reset = () => {}

  return (
    <div>
      <Form layout="horizontal" onFinish={query}>
        <Space size="large">
          <Form.Item name="trigger_indicator_min" label="触发指标">
            <InputNumber changeOnWheel placeholder="最小值" />
          </Form.Item>
          <Form.Item name="trigger_indicator_max">
            <InputNumber changeOnWheel placeholder="最大值" />
          </Form.Item>
          <Form.Item name="date" label="日期">
            <RangePicker
              onChange={(e) => {
                console.log(e)
              }}
            />
          </Form.Item>
          <Form.Item name="abstract" label="摘要">
            <Input placeholder="报错内容"></Input>
          </Form.Item>
        </Space>
        <br />
        <Space
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Space size="large">
            <Form.Item name="system_type" label="系统类型">
              <Select options={systemOptions} placeholder="系统类型" />
            </Form.Item>
            <Form.Item name="warn_type" label="报警类型">
              <Select options={warnOptions} placeholder="报警类型" />
            </Form.Item>
            <Form.Item name="trigger_rule" label="规则类型">
              <Select options={ruleOptions} placeholder="规则类型" />
            </Form.Item>
          </Space>

          <Space>
            <Button type="primary" onClick={reset}>
              重置
            </Button>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </Space>
        </Space>
      </Form>
      <Table columns={columns()} />
    </div>
  )
}
