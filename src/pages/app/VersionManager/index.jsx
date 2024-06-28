import React from 'react'
import { Form, Input, Button, Flex, Space, Table } from 'antd'
import { versionColumns } from './config'
import {
  uploadAppVersion,
  getVersionInfo,
  updateAppVersion
} from '@/service/version'
import { usePagination } from 'ahooks'
import { showError } from '@/components/TKMessage'
import { pageParams } from '@/common/config'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import VerifyForm from './components/VersionForm'

export default function VersionManager() {
  const [versionForm] = Form.useForm()
  const { data, run, pagination } = usePagination(
    async (params) => {
      try {
        const { data } = await getVersionInfo(params)
        return {
          total: data?.total,
          list: data?.AppVersionList
        }
      } catch (err) {
        showError(err.msg || '系统出错')
      }
    },
    {
      defaultParams: [pageParams]
    }
  )

  // 查询
  const onFinish = (values) => {
    run({ ...values, ...pageParams })
  }

  // 创建
  const create = () => {
    openModal({
      title: '创建',
      content: <VerifyForm form={versionForm} />,
      handleOk: async () => {
        await uploadAppVersion()
      }
    })
  }

  // 修改
  const edit = () => {}

  return (
    <div>
      <Flex justify="space-between">
        <Form onFinish={onFinish}>
          <Space>
            <Form.Item label="搜索" name="key">
              <Input placeholder="输入版本ID" />
            </Form.Item>
            <Form.Item>
              <Button type="link" htmlType="reset">
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
            create()
          }}
        >
          新建
        </Button>
      </Flex>

      <Table columns={versionColumns(edit)} />
    </div>
  )
}
