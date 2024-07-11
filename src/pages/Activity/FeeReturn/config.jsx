export const columns = () => {
  return [
    {
      title: '账户',
      key: 'user_id',
      dataIndex: 'user_id'
    },
    {
      title: '笔数',
      key: 'transaction_index',
      dataIndex: 'transaction_index'
    },
    {
      title: '地址',
      key: 'user_address',
      dataIndex: 'user_address'
    },
    {
      title: '币种',
      key: 'coin_type',
      dataIndex: 'coin_type'
    },
    {
      title: '手续费',
      key: 'fee',
      dataIndex: 'fee'
    },
    {
      title: '应返额度',
      key: 'should_return_amount',
      dataIndex: 'should_return_amount'
    },
    {
      title: '订单时间',
      key: 'transaction_time',
      dataIndex: 'transaction_time'
    }
  ]
}
