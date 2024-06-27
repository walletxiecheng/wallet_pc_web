import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Space,
  Flex,
  Table
} from 'antd'
import React from 'react'
import { advertColumns, priorityOptions } from './config'
import { usePagination } from 'ahooks'
import { pageParams } from '@/common/config'
import { getAdvertisementList } from '@/service/advert'
import { showError } from '@/components/TKMessage'

export default function Advertisement() {
  const { data, run, pagination } = usePagination(
    async (params) => {
      try {
        const { data } = await getAdvertisementList(params)
        return { total: data.total || 0, list: data.advertisement_list || [] }
      } catch (err) {
        return showError(err.msg)
      }
    },
    {
      onError: (err) => {
        showError(err)
      },
      defaultParams: [pageParams]
    }
  )

  // 查询
  const onFinish = (values) => {
    if (values.date) {
      values.start_date = values?.date[0]?.format('YYYY-MM-DD')
      values.end_date = values?.date[0]?.format('YYYY-MM-DD')
    }
    values.date = undefined
    run({ ...values, ...pageParams })
  }

  return (
    <div>
      <Flex justify="space-between">
        <Form onFinish={onFinish}>
          <Space>
            <Form.Item label="生效日期" name="date">
              <DatePicker.RangePicker />
            </Form.Item>
            <Form.Item label="优先级" name="priority">
              <Select placeholder="全部" options={priorityOptions} />
            </Form.Item>
            <Form.Item label="搜索" name="search_key">
              <Input placeholder="输入ID或标题" />
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
        <Button type="primary">创建</Button>
      </Flex>

      <Table
        columns={advertColumns()}
        dataSource={data?.list || []}
        pagination={{
          total: data?.total,
          current: pagination.current,
          pageSize: pagination.pageSize,
          onChange: pagination.onChange,
          onShowSizeChange: pagination.onShowSizeChange
        }}
      />
    </div>
  )
}
