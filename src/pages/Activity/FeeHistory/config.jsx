export const columns = () => {
  return [
    {
      key: 'id',
      dataIndex: 'id',
      title: '序号'
    },
    {
      key: 'user_id',
      dataIndex: 'user_id',
      title: '账户'
    },
    {
      key: 'user_address',
      dataIndex: 'user_address',
      title: '地址'
    },
    {
      key: 'coin_type',
      dataIndex: 'coin_type',
      title: '币种'
    },
    {
      key: 'fee',
      dataIndex: 'fee',
      title: '手续费'
    },
    {
      key: 'should_return_amount',
      dataIndex: 'should_return_amount',
      title: '返还额度'
    },

    {
      key: 'status',
      dataIndex: 'status',
      title: '状态',
      render: (_, record) => (
        <span style={{ color: record.status === 1 ? '#00851D' : '#FF3B30' }}>
          {record.status === 1 ? '已返现' : '待处理'}
        </span>
      )
    },
    {
      key: 'transaction_time',
      dataIndex: 'transaction_time',
      title: '订单时间'
    },
    {
      key: 'return_time',
      dataIndex: 'return_time',
      title: '返现时间'
    }
  ]
}
