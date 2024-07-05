import { Button, Space } from 'antd'

export const rnColumns = (select, review) => {
  return [
    {
      key: 'id',
      dataIndex: 'id',
      title: '编号'
    },
    {
      key: 'account_id',
      dataIndex: 'account_id',
      title: 'ID'
    },
    {
      key: 'email_address',
      dataIndex: 'email_address',
      title: '邮箱'
    },
    {
      key: 'name',
      dataIndex: 'name',
      title: '真实姓名'
    },
    {
      key: 'certificate_number',
      dataIndex: 'certificate_number',
      title: '证件号码'
    },
    {
      key: 'enterprise',
      dataIndex: 'enterprise',
      title: '企业名称'
    },
    {
      key: 'register_time',
      dataIndex: 'register_time',
      title: '注册时间'
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
              if (record.review_status === 3) {
                select(record) //查看
              } else {
                review(record) //审核
              }
            }}
          >
            {record.review_status === 3 ? '查看' : '审核'}
          </Button>
        </Space>
      )
    }
  ]
}

export const statusOptions = [
  {
    value: 0,
    label: '全部'
  },
  {
    value: 1,
    label: '未实名'
  },
  {
    value: 2,
    label: '未审核'
  },
  {
    value: 3,
    label: '已经审核通过'
  },
  {
    value: 4,
    label: '审核未通过'
  }
]
