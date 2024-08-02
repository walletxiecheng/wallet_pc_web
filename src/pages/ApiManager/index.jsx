import React from 'react'
import NavBar from '@/components/NavBar'
import { Form, Input, Button, Checkbox, Table } from 'antd'
import { getAccountKeys, createAccountKeys } from '@/service'
import './index.less'
import { usePagination } from 'ahooks'
import { useUserStore } from '@/stores'
import { showError } from '@/common/message'
import { apiColumns, authorityOptions } from './config'

export default function APIManager() {
  const { userInfo } = useUserStore()

  const getAccountKeysHandler = async (params) => {
    try {
      const { data } = await getAccountKeys(userInfo.commercial_id, params)
      return data
    } catch (err) {
      showError(err.msg)
    }
  }
  const {
    data: apiList,
    run,
    pagination
  } = usePagination(getAccountKeysHandler)

  // 创建密钥
  const onFinish = async (values) => {
    values.acl = values.acl.split(',')
    values.expiration = 10
    values.title = 'none'
    try {
      await createAccountKeys(userInfo.commercial_id, values)
    } catch (err) {
      showError(err.msg)
    }
  }
  return (
    <>
      <NavBar />
      <div className="apiContainer">
        <div className="creteAPI">
          <header>创建API Key</header>
          <main>
            <div className="createFormBox">
              <Form layout="vertical" className="form" onFinish={onFinish}>
                <Form.Item label="备注" name="description">
                  <Input />
                </Form.Item>

                <Form.Item label="权限设置(可多选)" name="permissions">
                  <Checkbox.Group options={authorityOptions} />
                </Form.Item>

                <Form.Item label="绑定ID地址或IP段（选填）" name="acl">
                  <Input.TextArea placeholder="多个IP地址请用英文逗号隔开，最多填写20个IP地址" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    创建
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="tips">
              <div className="title">提示</div>
              <div className="content">
                • Token17 为您提供了强大的API，您可以通过 API
                使用行情查询、自动交易等服务。通过API 文档 查看如何使用。
                <br />
                • 每个用户最多创建20组API Key <br />•{' '}
                <strong s> 请不要泄露您的APIKey， 以免造成资产损失。</strong>
                出于安全考虑，建议为API Key绑定IP，每个API
                Key最多绑定20个IP地址或IP段。
                单个IP地址或IP段直接填写，多个IP地址或IP段用半角逗号分隔，如：192.168.1.1,192.168.1.2,192.168.0.1/24
                <br />
                • 未绑定IP且拥有交易或提现权限的API
                Key，将在闲置90天后自动失效，如长期使用，则API有效期将自动延长至最后一次使用时间的90天后
              </div>
            </div>
          </main>
        </div>

        <div className="tableBox">
          <div className="tableTitle">我的API Key</div>
          <Table dataSource={apiList} columns={apiColumns()} />
        </div>
      </div>
    </>
  )
}
