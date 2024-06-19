import React from 'react'
import { Divider, Form, Space, Input, Table, Pagination } from 'antd'
import { useLocation } from 'react-router-dom'
import { WARN_MENU } from '../WarnManager/config'
import { getWarningDetail } from '@/service/warn'
import { usePagination } from 'ahooks'
import style from './index.module.less'
import { showError } from '@/components/TKMessage'
import { userColumns, machineColumns, versionColumns } from './config'

const PAGE_SIZE = 10
export default function WarnDetail() {
  const state = useLocation().state || {}
  const rule = state?.trigger_rule || {}
  console.log(state)
  const {
    data: warnData,
    run: warnRun,
    pagination: warnPagination
  } = usePagination(
    async (params) => {
      const res = await getWarningDetail(params)
      if (res.code !== 0) {
        showError('请求数据失败,请重试。')
        return []
      }
      // const data = { res }
      return res?.data || []
    },
    {
      defaultParams: [{ current: 1, pageSize: PAGE_SIZE, warning_record_id: 1 }]
    }
  )
  return (
    <div>
      <header>
        <h2>报警详情</h2>
      </header>
      <Divider></Divider>
      <Form>
        <Space>
          <Form.Item label="编号">
            <Input value={state.id} />
          </Form.Item>
          <Form.Item label="报警类型">
            <Input
              value={state.warn_type === WARN_MENU.CRASH ? '崩溃' : '异常'}
            />
          </Form.Item>
          <Form.Item label="触发规则">
            <Input value={rule.warning_rule_name} />
          </Form.Item>
          <Form.Item label="触发指标">
            <Input value={state.trigger_indication} />
          </Form.Item>
        </Space>
        <Space>
          <Form.Item label="报警时间">
            <Input value={state.warning_time} />
          </Form.Item>
          <Form.Item label="系统类型">
            <Input value={state.system_type} />
          </Form.Item>
          <Form.Item label="摘要">
            <Input value={state.abstract} />
          </Form.Item>
        </Space>
      </Form>
      <div className={style.tableBox}>
        <div className={style.tableItem}>
          <header>影响用户 * {0}</header>
          <Table
            pagination={false}
            columns={userColumns}
            dataSource={warnData?.effected_user_info}
          ></Table>
        </div>
        <div className={style.tableItem}>
          <header>影响手机型号 * {0}</header>
          <Table
            pagination={false}
            columns={machineColumns}
            dataSource={warnData?.effected_machine_info}
          ></Table>
        </div>
        <div className={style.tableItem}>
          <header>影响版本数 * {0}</header>
          <Table
            pagination={false}
            columns={versionColumns}
            dataSource={warnData?.effected_version_info}
          ></Table>
        </div>
      </div>
      <Pagination
        total={warnData?.total || 10}
        pageSize={warnPagination.pageSize}
        current={warnPagination.current}
        onChange={warnPagination.onChange}
        onShowSizeChange={warnPagination.onChange}
      ></Pagination>
    </div>
  )
}
