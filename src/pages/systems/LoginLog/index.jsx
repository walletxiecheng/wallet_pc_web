import React from 'react'
import {
  Divider,
  Form,
  Space,
  Button,
  Table,
  DatePicker,
  TimePicker,
  Input,
  Select
} from 'antd'
import { columns } from './config'
import { getLoginLogList } from '@/service/log'
import { usePagination } from 'ahooks'
import { showError, showSuccess } from '@/components/TKMessage'
import { openModal } from '../SmsManager/components/Modal'
import style from './index.module.less'

const PAGE_SIZE = 10
export default function LoginLog() {
  const [form] = Form.useForm()
  const {
    data: logList,
    run: logRun,
    pagination: logPagination
  } = usePagination(
    async (params) => {
      const res = await getLoginLogList(params)
      const { data } = res
      if (res.code !== 0) {
        showError('请求数据失败，请重试。')
        return { total: 0, list: [] }
      }
      return { total: data.total, list: data.login_log_list }
    },
    {
      onError: () => {
        return showError('请求出错，请检查网络设置。')
      },
      defaultParams: [{ current: 1, pageSize: PAGE_SIZE }]
    }
  )
  // 查询表单
  const onFinish = (values) => {
    form.resetFields()
    console.log(values)
  }

  // 重置搜索表单
  const reset = () => {
    // 刷新
    logRun({ current: 1, pageSize: PAGE_SIZE })
    form.resetFields()
  }

  // 展示请求头
  const showDetail = (record) => {
    openModal({
      title: '请求头',
      content: (
        <div className={style.modal}>
          <header>请头内容</header>
          <div className={style.headerContent}>{record.request_header}</div>
        </div>
      ),
      okText: '复制',
      handleOk: async () => {
        // TODO 复制
        await navigator.clipboard.writeText(record.request_header)
        return showSuccess('复制成功')
      }
    })
  }

  return (
    <div>
      <header>登录日志管理</header>
      <Divider />
      <Form form={form} onFinish={onFinish}>
        <Form.Item label="搜索" name="key">
          <Input style={{ width: 200 }} placeholder="登录账号、城市或IP" />
        </Form.Item>
        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Space>
            <Form.Item label="登录结果" name="login_result">
              <Select placeholder="请选择" />
            </Form.Item>
            <Form.Item label="日期" name="date">
              <DatePicker placeholder="请选择" />
            </Form.Item>
            <Form.Item label="时间" name="time">
              <TimePicker.RangePicker />
            </Form.Item>
          </Space>
          <Space>
            <Form.Item>
              <Button
                danger
                style={{ border: '1px solid #3875f6', color: '#3875f6' }}
                onClick={reset}
              >
                重置
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit
              "
                type="primary"
              >
                查询
              </Button>
            </Form.Item>
          </Space>
        </Space>
      </Form>

      {/* 登录日志表格 */}

      <Table
        rowKey={(record) => record.id}
        dataSource={logList?.list || []}
        pagination={{
          total: logList?.total,
          current: logPagination.current,
          pageSize: logPagination.pageSize,
          onChange: logPagination.onChange,
          onShowSizeChange: logPagination.onChange
        }}
        columns={columns(showDetail)}
      ></Table>
    </div>
  )
}
