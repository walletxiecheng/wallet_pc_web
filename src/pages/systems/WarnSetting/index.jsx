import React from 'react'
import { Button, Divider, Form, Input, Select, Space, Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { getWarningSettings } from '@/service/warn'
import { usePagination } from 'ahooks'
import { columns, stateOption, STATE_MENU } from './config'
import { showError } from '@/components/TKMessage'

const PAGE_SIZE = 10
export default function WarnSetting() {
  const navigate = useNavigate()
  // 数据源
  const { data, run, pagination } = usePagination(
    async (params) => {
      try {
        const res = await getWarningSettings(params)
        const { data } = res
        return { total: data.total, list: data.warning_setting_list }
      } catch (err) {
        showError(res.msg + '请求数据失败')
        return { total: 0, list: [] }
      }
    },
    {
      defaultParams: [{ current: 1, pageSize: PAGE_SIZE }]
    }
  )
  const onFinish = (values) => {
    run({ current: 1, pageSize: PAGE_SIZE, ...values })
  }

  return (
    <div>
      <header>
        <h2>报警设置</h2>
      </header>
      <Divider />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Form onFinish={onFinish}>
          <Space>
            <Form.Item label="调用规则" name="trigger_rule">
              <Select placeholder="全部"></Select>
            </Form.Item>
            <Form.Item label="通知" name="notify_status">
              <Select placeholder="全部" options={stateOption}></Select>
            </Form.Item>
            <Form.Item label="搜索" name="id">
              <Input placeholder="ID" />
            </Form.Item>
            <Form.Item>
              <Button
                type="link"
                style={{ border: '1px solid, #3f78f9' }}
                htmlType="reset"
              >
                重置
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Form.Item>
          </Space>
        </Form>
        <Button
          type="primary"
          onClick={() => {
            navigate('/systems/warnSetting/handleRule', {
              state: { type: 1 }
            })
          }}
        >
          新增
        </Button>
      </div>
      <Table
        rowKey={(record) => record.id}
        dataSource={data?.list}
        columns={columns()}
        pagination={{
          pageSize: pagination.pageSize,
          current: pagination.current,
          total: data?.total || 0,
          onShowSizeChange: pagination.onChange,
          onChange: pagination.onChange
        }}
      />
    </div>
  )
}
