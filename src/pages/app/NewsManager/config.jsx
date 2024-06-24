import '@/assets/css/table.css'
import { Button, Space } from 'antd'
export const columns = (editForm, handleDeleteNews) => {
  return [
    {
      key: 'id',
      dataIndex: 'id',
      title: '资讯ID'
    },
    {
      key: 'title',
      dataIndex: 'title',
      title: '标题',
      width: '15%',
      render: (_, record) => (
        <div style={{ width: '15rem' }} className="ellipsis_table">
          {record.title}
        </div>
      )
    },
    {
      key: 'publisher',
      dataIndex: 'publisher',
      title: '发布者'
    },
    {
      key: 'time',
      dataIndex: 'time',
      title: '发布时间'
    },
    {
      key: 'content',
      dataIndex: 'content',
      title: '内容',
      width: '30%',
      render: (_, record) => (
        <div className="ellipsis_table">{record.content}</div>
      )
    },

    {
      key: 'operate',
      dataIndex: 'operate',
      title: '操作',
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            onClick={() => {
              editForm(record)
            }}
          >
            修改
          </Button>
          <Button
            type="link"
            danger
            onClick={() => {
              handleDeleteNews(record.id)
            }}
          >
            撤销发布
          </Button>
        </Space>
      )
    }
  ]
}
