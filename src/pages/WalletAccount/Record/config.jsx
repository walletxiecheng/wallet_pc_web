// 提款记录
export const withdrawColumns = () => {
  return [
    {
      key: 'withdraw_time',
      dataIndex: 'withdraw_time',
      title: '时间'
    },
    {
      key: 'coin_type',
      dataIndex: 'coin_type',
      title: '币种'
    },
    {
      key: 'type',
      dataIndex: 'type',
      title: '类型'
    },
    {
      key: 'withdraw_address',
      dataIndex: 'withdraw_address',
      title: '提现地址'
    },
    {
      key: 'order_id',
      dataIndex: 'order_id',
      title: '订单号'
    },
    {
      key: 'sequence_number',
      dataIndex: 'sequence_number',
      title: '流水号'
    },
    {
      key: 'fee',
      dataIndex: 'fee',
      title: '手续费'
    },
    {
      key: 'withdraw_amount',
      dataIndex: 'withdraw_amount',
      title: '数量'
    },
    {
      key: 'status',
      dataIndex: 'status',
      title: '状态'
    }
  ]
}

export const receiveColumns = () => {
  return [
    {
      key: 'transaction_time',
      dataIndex: 'transaction_time',
      title: '时间'
    },
    {
      key: 'order_id',
      dataIndex: 'order_id',
      title: '订单号'
    },
    {
      key: 'sequence_number',
      dataIndex: 'sequence_number',
      title: '流水号'
    },
    {
      key: 'receive_address',
      dataIndex: 'receive_address',
      title: '收款地址'
    },
    {
      key: 'payment_address',
      dataIndex: 'payment_address',
      title: '打款地址'
    },
    {
      key: 'coin',
      dataIndex: 'coin',
      title: '币种'
    },
    {
      key: 'amount',
      dataIndex: 'amount',
      title: '收款金额'
    }
  ]
}
