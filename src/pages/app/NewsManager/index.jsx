import { DatePicker, Form, Input, Space, Button, Table, Divider } from 'antd'
import React from 'react'
import { columns } from './config'
import { usePagination } from 'ahooks'
import {
  getNewsList,
  deleteNews,
  publishNews,
  updateNews
} from '@/service/news'
import { showError, showSuccess } from '@/components/TKMessage'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import NewsForm from './components/NewsForm'
const PAGE_SIZE = 10

export default function NewsManager() {
  const [newsForm] = Form.useForm()
  const { data, run, pagination } = usePagination(
    async (params) => {
      try {
        const { data } = await getNewsList(params)
        return { total: data?.total, list: data?.news_list }
      } catch (err) {
        showError(err.msg)
        return { total: 0, list: [] }
      }
    },
    {
      defaultParams: [
        {
          current: 1,
          pageSize: PAGE_SIZE
        }
      ]
    }
  )

  // 查询
  const onFinish = (values) => {
    if (values.date) {
      values.start_date = values?.date[0].format('YYYY-MM-DD')
      values.end_date = values?.date[0].format('YYYY-MM-DD')
    }
    run({
      current: 1,
      pageSize: PAGE_SIZE,
      ...values
    })
  }

  // 撤销发布
  const handleDeleteNews = async (id) => {
    try {
      await deleteNews({ news_id: id })
      showSuccess('撤销发布成功')
      run({
        current: 1,
        pageSize: PAGE_SIZE
      })
    } catch (err) {
      showError(err.msg)
    }
  }

  // TODO 创建/发布新闻
  const createFrom = () => {
    openModal({
      title: '创建',
      content: <NewsForm from={newsForm} />,
      width: 600,
      handleOk: async () => {
        const result = newsForm.validateFields()
        try {
          await publishNews(result)

          return Promise.reject()
        } catch (err) {
          showError(err.msg)
          return Promise.reject()
        }
      }
    })
  }
  // TODO 修改
  const editForm = () => {
    openModal({
      title: '编辑',
      content: <NewsForm from={newsForm} />,
      width: 600,
      handleOk: async () => {
        const result = newsForm.validateFields()
        try {
          await publishNews(result)

          return Promise.reject()
        } catch (err) {
          showError(err.msg)
          return Promise.reject()
        }
      }
    })
  }
  return (
    <div>
      {/* form表单 */}
      <header>
        <h2>资讯管理</h2>
      </header>
      <Divider />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}
      >
        <Form onFinish={onFinish}>
          <Form.Item label="日期" name="date">
            <DatePicker.RangePicker />
          </Form.Item>
          <Space>
            <Form.Item label="发布者" name="publisher">
              <Input placeholder="发布者" />
            </Form.Item>
            <Form.Item label="模糊搜索" name="search_key">
              <Input placeholder="标题、内容" />
            </Form.Item>
            <Form.Item>
              <Button
                style={{ border: '1px solid #3f78f9' }}
                htmlType="reset"
                type="link"
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
        <Button type="primary" onClick={createFrom}>
          创建
        </Button>
      </div>
      <Table
        ellipsis={true}
        dataSource={data?.list || []}
        columns={columns(editForm, handleDeleteNews)}
        loading={!data}
        rowKey={(record) => record.id}
        pagination={{
          total: pagination?.total || 0,
          pageSize: pagination.pageSize,
          current: pagination.current,
          onShowSizeChange: pagination.onChange,
          onChange: pagination.onChange
        }}
      />
    </div>
  )
}
