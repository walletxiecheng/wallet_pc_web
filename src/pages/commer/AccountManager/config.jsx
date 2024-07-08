import { Button, Space, Popconfirm } from 'antd'
import { useNavigate } from 'react-router-dom'
import MoreProps from './components/MoreProp'

export const columns = (URLS, setVisitor) => {
  const navigate = useNavigate()
  return [
    {
      key: 'commercial_id',
      dataIndex: 'commercial_id',
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
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            onClick={() => {
              navigate(URLS.accountDetail, { state: record })
            }}
          >
            查看
          </Button>
          <Button
            type="link"
            style={{ color: record.inviter_account_id ? '#00851D' : '#3f78f9' }}
            onClick={() => {
              setVisitor(record)
            }}
          >
            {record.inviter_account_id ? '修改邀请人' : '设置邀请人'}
          </Button>
          <Popconfirm
            placement="bottom"
            title={'更多'}
            description={<MoreProps record={record} />}
            okText="确定"
            showCancel={false}
            icon={null}
            cancelText="No"
          >
            <Button type="link">更多</Button>
          </Popconfirm>
        </Space>
      )
    }
  ]
}

// 状态
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

// 交易权限
export const trapOptions = [
  {
    label: '允许',
    value: 1
  },
  {
    label: '禁止',
    value: 2
  }
]

// 代理商权限
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
