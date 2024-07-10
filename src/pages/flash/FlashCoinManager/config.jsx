import { Button } from 'antd'

export const columns = (editCoinType) => {
  return [
    {
      key: 'coin_type',
      dataIndex: 'coin_type',
      title: '币种'
    },
    {
      key: 'max_exchange_amount',
      dataIndex: 'max_exchange_amount',
      title: '最大兑换数'
    },
    {
      key: 'min_exchange_amount',
      dataIndex: 'min_exchange_amount',
      title: '最小兑换数'
    },
    {
      key: 'fee_percent',
      dataIndex: 'fee_percent',
      title: '手续费'
    },
    {
      key: 'sort',
      dataIndex: 'sort',
      title: '排序'
    },
    {
      key: 'operate',
      dataIndex: 'operate',
      title: '操作',
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => {
            editCoinType(record)
          }}
        >
          修改
        </Button>
      )
    }
  ]
}
