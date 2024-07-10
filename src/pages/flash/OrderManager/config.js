export const orderColumns = () => {
  return [
    {
      key: 'order_id',
      dataIndex: 'order_id',
      title: '订单ID'
    },
    {
      key: 'user_id',
      dataIndex: 'user_id',
      title: '用户ID'
    },
    {
      key: 'origin_coin',
      dataIndex: 'origin_coin',
      title: '来源币种'
    },
    {
      key: 'origin_coin_amount',
      dataIndex: 'origin_coin_amount',
      title: '来源币种数量'
    },
    {
      key: 'exchange_coin',
      dataIndex: 'exchange_coin',
      title: '兑换币种'
    },
    {
      key: 'exchange_amount',
      dataIndex: 'exchange_amount',
      title: '兑换数量'
    },
    {
      key: 'price',
      dataIndex: 'price',
      title: '价格'
    },
    {
      key: 'fee',
      dataIndex: 'fee',
      title: '手续费'
    },
    {
      key: 'order_time',
      dataIndex: 'order_time',
      title: '时间'
    }
  ]
}
