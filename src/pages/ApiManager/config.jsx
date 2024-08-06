import '@/assets/css/public.css'
import moment from 'moment'

export const apiColumns = () => {
  return [
    {
      key: 'create_time',
      dataIndex: 'create_time',
      title: '创建时间',
      render: (_, record) => (
        <span>{moment(record.create_time).format('YYYY-MM-DD-HH:MM:SS')}</span>
      )
    },
    {
      key: 'remark',
      dataIndex: 'remark',
      title: '备注'
    },
    {
      key: 'usage',
      dataIndex: 'usage',
      title: '用途'
    },
    {
      key: 'auth',
      dataIndex: 'auth',
      title: '权限'
    },
    {
      key: 'content',
      dataIndex: 'content',
      title: '访问密钥Access Key',
      render: (_, record) => (
        <div style={{ width: 150 }} className="text-ellipsis">
          {record.content}
        </div>
      )
    },
    {
      key: 'bind_ip',
      dataIndex: 'bind_ip',
      title: '绑定地址'
    },
    {
      key: 'status',
      dataIndex: 'status',
      title: '状态'
    },
    {
      key: 'exchangeable',
      dataIndex: 'exchangeable',
      title: '可交易对'
    },
    {
      key: 'operate',
      dataIndex: 'operate',
      title: '操作'
    }
  ]
}

// 权限类型
export const authorityOptions = [
  {
    label: '读取',
    value: 0
  },
  {
    label: '提取',
    value: 1
  },
  {
    label: '交易',
    value: 2
  }
]
