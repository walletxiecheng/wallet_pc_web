import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Flex, Space, Table } from 'antd'
import { versionColumns } from './config'
import {
  uploadAppVersion,
  getVersionInfo,
  updateAppVersion
} from '@/service/version'
import { usePagination } from 'ahooks'
import { showError, showSuccess } from '@/components/TKMessage'
import { pageParams } from '@/common/config'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import VerifyForm from './components/VersionForm'

export default function VersionManager() {
  const [versionForm] = Form.useForm()
  const [code, setCode] = useState()

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

  // code码
  const changeCode = (value) => {
    setCode(value)
    return value
  }
  // 查询
  const onFinish = (values) => {
    run({ ...values, ...pageParams })
  }

  // 创建
  const create = () => {
    openModal({
      title: '创建',
      content: <VerifyForm form={versionForm} changeCode={changeCode} />,
      handleOk: async () => {
        const result = await versionForm.validateFields()
        result.online_time = result.online_time.format('YYYY-MM-DD hh:mm:ss')
        try {
          await uploadAppVersion(result)
          showSuccess('上传成功')
          run(pageParams)
        } catch (err) {
          if (err.code === 3) {
            showError('参数错误')
          } else if (err.code === 407) {
            showError('验证码错误')
          } else {
            showError('修改失败')
          }
          return Promise.reject()
        }
      }
    })
  }

  // 修改
  const edit = () => {
    openModal({
      title: '创建',
      content: <VerifyForm form={versionForm} changeCode={changeCode} />,
      handleOk: async () => {
        const result = await versionForm.validateFields()
        result.online_time = result.online_time.format('YYYY-MM-DD hh:mm:ss')

        try {
          await updateAppVersion(result)
        } catch (err) {
          if (err.code === 3) {
            showError('参数错误')
          } else if (err.code === 407) {
            showError('验证码错误')
          } else {
            showError('修改失败')
          }
          return Promise.reject()
        }
      }
    })
  }

  useEffect(() => {
    console.log(code)
  }, [code])
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

      <Table
        columns={versionColumns(edit)}
        rowKey={(record) => record.id}
        dataSource={data?.list || []}
        pagination={{
          total: data?.total || 0
        }}
      />
    </div>
  )
}
