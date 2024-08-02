import '@/assets/css/public.css'
export const apiColumns = () => {
  return [
    {
      key: 'token',
      dataIndex: 'token',
      title: '创建时间'
    },
    {
      key: 'available_balance',
      dataIndex: 'available_balance',
      title: '备注'
    },
    {
      key: 'frozen_balance',
      dataIndex: 'frozen_balance',
      title: '用途'
    },
    {
      key: 'valuation',
      dataIndex: 'valuation',
      title: '权限'
    },
    {
      key: 'lock_balance',
      dataIndex: 'lock_balance',
      title: '访问密钥Access Key'
    },
    {
      key: 'lock_balance',
      dataIndex: 'lock_balance',
      title: '绑定地址'
    },
    {
      key: 'lock_balance',
      dataIndex: 'lock_balance',
      title: '状态'
    },
    {
      key: 'lock_balance',
      dataIndex: 'lock_balance',
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
    value: '1'
  },
  {
    label: '提取',
    value: '2'
  },
  {
    label: '交易',
    value: '3'
  }
]
