import { Button, Space } from 'antd'

export const columns = () => {
  return [
    {
      key: 'account_id',
      dataIndex: 'account_id',
      title: '账号ID'
    },
    {
      key: 'email_address',
      dataIndex: 'email_address',
      title: '邮箱'
    },
    {
      key: 'phone',
      dataIndex: 'phone',
      title: '手机号'
    },
    {
      key: 'level',
      dataIndex: 'level',
      title: '会员等级'
    },
    {
      key: 'name',
      dataIndex: 'name',
      title: '真实姓名'
    },
    {
      key: 'enterprise',
      dataIndex: 'enterprise',
      title: '企业名称'
    },
    {
      key: 'inviter_account_id',
      dataIndex: 'inviter_account_id',
      title: '邀请人'
    },
    {
      key: 'operate',
      dataIndex: 'operate',
      title: '操作',
      width: '18%',
      render: () => (
        <Space>
          <Button type="link">查看</Button>
          <Button type="link">设置邀请人</Button>
          <Button type="link">更多</Button>
        </Space>
      )
    }
  ]
}

export const statusOptions = [
  {
    label: '启用',
    value: 1
  },
  {
    label: '禁用',
    value: 2
  }
]
export const proxyOptions = [
  {
    label: '授权',
    value: 1
  },
  {
    label: '取消',
    value: 2
  }
]
