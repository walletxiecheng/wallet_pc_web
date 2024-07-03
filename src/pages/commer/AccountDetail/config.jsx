import { Space, Button } from 'antd'
export const assetsColumns = () => {
  return [
    {
      title: '币种',
      key: 'token_type',
      dataIndex: 'token_type'
    },
    {
      title: '可用额度',
      key: 'available',
      dataIndex: 'available'
    },
    {
      title: '冻结额度',
      key: 'frozen',
      dataIndex: 'frozen'
    },
    {
      title: '待释放资产',
      key: 'be_release',
      dataIndex: 'be_release'
    },
    {
      title: '地址',
      key: 'addr',
      dataIndex: 'addr'
    },
    {
      title: '操作',
      key: 'operate',
      dataIndex: 'operate',
      render: () => (
        <Space>
          <Button type="link">锁仓</Button>
          <Button type="link">充币</Button>
          <Button type="link">更多</Button>
        </Space>
      )
    }
  ]
}

export const tradeColumns = () => {
  return [
    {
      title: '账户ID',
      key: 'token_type',
      dataIndex: 'token_type'
    },
    {
      title: '交易类型',
      key: 'token_type',
      dataIndex: 'token_type'
    },
    ,
    {
      title: '交易金额',
      key: 'token_type',
      dataIndex: 'token_type'
    },
    ,
    {
      title: '手续费',
      key: 'token_type',
      dataIndex: 'token_type'
    },
    {
      title: '交易时间',
      key: 'token_type',
      dataIndex: 'token_type'
    }
  ]
}
