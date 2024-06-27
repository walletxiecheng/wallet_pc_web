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
import { header, pageParams } from '@/common/config'
import dayjs from 'dayjs'
import {
  getAdvertisementList,
  publishAdvertisement,
  updateAdvertisement
} from '@/service/advert'
import { showError, showSuccess } from '@/components/TKMessage'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import AdvertForm from './components/AdvertForm'

export default function Advertisement() {
  const [advertForm] = Form.useForm()

  const { data, run, pagination } = usePagination(
    async (params) => {
      try {
        const { data } = await getAdvertisementList(params)
        return { total: data.total || 0, list: data.advertisement_list || [] }
      } catch (err) {
        return showError(err.msg || '系统错误')
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
    // 处理数据
    if (values.date) {
      values.start_date = values?.date[0]?.format('YYYY-MM-DD')
      values.end_date = values?.date[0]?.format('YYYY-MM-DD')
    }
    values.date = undefined
    run({ ...values, ...pageParams })
  }

  //创建
  const create = () => {
    openModal({
      title: '创建',
      content: <AdvertForm form={advertForm} type={1} />,
      handleOk: async () => {
        const result = await advertForm.validateFields()
        result.eff_time = result?.eff_time.format('YYYY-MM-DD hh:mm:ss')
        result.file = result?.file?.fileList[0]
        try {
          await publishAdvertisement(result, header)
          run(pageParams)
          showSuccess('创建成功')
        } catch (err) {
          showError(err.msg || '创建失败')

          return Promise.reject()
        }
      }
    })
  }

  //编辑
  const edit = (record) => {
    record.eff_time = dayjs(record.eff_time)
    advertForm.setFieldsValue(record)
    openModal({
      title: '编辑',
      content: <AdvertForm form={advertForm} record={record} type={2} />,
      handleOk: async () => {
        const result = await advertForm.validateFields()
        result.eff_time = result?.eff_time.format('YYYY-MM-DD hh:mm:ss')
        result.file = result?.file?.fileList[0]
        result.id = record?.id
        try {
          await updateAdvertisement(result, header)
          run(pageParams)
          showSuccess('编辑成功')
        } catch (err) {
          showError(err.msg)

          return Promise.reject()
        }
      }
    })
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
        <Button
          type="primary"
          onClick={() => {
            create()
          }}
        >
          创建
        </Button>
      </Flex>

      <Table
        columns={advertColumns(edit)}
        dataSource={data?.list || []}
        loading={!data}
        rowKey={(item) => item.id}
        pagination={{
          total: data?.total,
          current: pagination.current,
          pageSize: pagination.pageSize,
          onChange: pagination.onChange,
          onShowSizeChange: pagination.onChange
        }}
      />
    </div>
  )
}
