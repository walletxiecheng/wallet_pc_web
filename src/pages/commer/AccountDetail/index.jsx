import {
  Divider,
  Form,
  Input,
  Tabs,
  Table,
  Space,
  Select,
  Button,
  DatePicker
} from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useRequest, usePagination } from 'ahooks'
import {
  getCommercialAccountDetail,
  getCommercialAccountAssets,
  getCommercialTransactionRecord
} from '@/service/commer'
import style from './index.module.less'
import {
  assetsColumns,
  tradeColumns,
  typeOptions,
  coinTypeOptions
} from './config'
import { showError } from '@/components/TKMessage'
import { pageParams } from '@/common/config'

export default function AccountDetail() {
  const { state } = useLocation()
  const account_id = state?.account_id || 0
  const [form] = Form.useForm()

  //获取详细信息表单
  const getAccountDetailHandler = async () => {
    const req = { account_id: account_id }
    const { data } = await getCommercialAccountDetail(req)
    const accountInfo = { ...state, ...data }
    form.setFieldsValue(accountInfo)
  }
  useRequest(getAccountDetailHandler)

  // 获取资产列表
  const getAssetHandler = async (params) => {
    try {
      const { data } = await getCommercialAccountAssets(params)
      return { total: data?.total || 0, list: data?.assets || [] }
    } catch (err) {
      showError(err?.msg || '系统错误')
      return { total: 0, list: [] }
    }
  }

  const {
    data: assetList,
    run: assetRun,
    pagination: assetPagination
  } = usePagination(getAssetHandler, {
    defaultParams: [{ ...pageParams, ...{ account_id: account_id } }]
  })

  // 获取资产记录列表
  const getRecordHandler = async (params) => {
    try {
      const { data } = await getCommercialTransactionRecord(params)
      return { total: data.total, list: data.txs }
    } catch (err) {
      showError(err?.msg || '系统错误')
      return { total: 0, list: [] }
    }
  }

  const {
    data: recordList,
    run: recordRun,
    pagination: recordPagination
  } = usePagination(getRecordHandler, {
    defaultParams: [{ ...pageParams, ...{ account_id: account_id } }]
  })

  // 查询记录
  const onFinish = (values) => {
    if (values.date) {
      values.start_date = values?.date[0].format('YYYY-MM-DD')
      values.end_date = values?.date[1].format('YYYY-MM-DD')
    }
    recordRun({ ...pageParams, ...values, ...{ account_id: account_id } })
  }

  return (
    <div className={style.accountInfoContainer}>
      <h3>账户管理</h3>
      <Divider />
      <Tabs items={[{ key: '1', label: '基本信息' }]} />
      <div>
        <Form form={form} className={style.accountForm}>
          <Form.Item
            label="真实姓名"
            name="name"
            className={style.accountInput}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="账户ID"
            name="account_id"
            className={style.accountInput}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item label="手机号" name="phone" className={style.accountInput}>
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="邮箱地址"
            name="email_address"
            className={style.accountInput}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item label="证件号码" className={style.accountInput}>
            <Input disabled />
          </Form.Item>
          <Form.Item label="企业名称" className={style.accountInput}>
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="会员状态"
            name="status"
            className={style.accountInput}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="会员等级"
            name="level"
            className={style.accountInput}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="注册时间"
            name="register_time"
            className={style.accountInput}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="最近登录"
            name="latest_login_time"
            className={style.accountInput}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="最近IP"
            name="latest_ip"
            className={style.accountInput}
          >
            <Input disabled />
          </Form.Item>
        </Form>
      </div>

      {/* 资产信息列表 */}
      <div>
        <Tabs items={[{ key: '1', label: '用户资产' }]} />
        <Table
          columns={assetsColumns()}
          dataSource={assetList?.list || []}
          rowKey={(record) => record.id}
          loading={!assetList}
          pagination={{
            pageSize: assetPagination.pageSize,
            current: assetPagination.current,
            total: assetList?.total || 0,
            onChange: assetPagination.onChange,
            onShowSizeChange: assetPagination.onChange
          }}
        />
      </div>
      {/* 交易记录列表 */}
      <div>
        <Tabs items={[{ key: '1', label: '用户资产' }]} />
        {/* 查询列表 */}
        <Form onFinish={onFinish}>
          <Space>
            <Form.Item label="交易类型" name="tx_type">
              <Select
                placeholder="全部"
                options={typeOptions}
                style={{ width: 150 }}
              />
            </Form.Item>
            <Form.Item label="币种" name="transaction_type">
              <Select placeholder="全部" options={coinTypeOptions} />
            </Form.Item>
            <Form.Item label="日期" name="date">
              <DatePicker.RangePicker />
            </Form.Item>
            <Form.Item>
              <Button
                type="link"
                htmlType="reset"
                style={{ border: '1px solid #3f78f9' }}
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
        <Table
          columns={tradeColumns()}
          dataSource={recordList?.txs || []}
          rowKey={(record) => record.id}
          loading={!recordList}
          pagination={{
            total: recordList?.total || 0,
            current: recordPagination.current,
            pageSize: recordPagination.pageSize,
            onChange: recordPagination.onChange,
            onShowSizeChange: recordPagination.onChange
          }}
        />
      </div>
    </div>
  )
}
