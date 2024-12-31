// 提款记录
export const withdrawColumns = (t) => {
  return [
    {
      key: 'withdraw_time',
      dataIndex: 'withdraw_time',
      title: t('record.time'),
      width: '10%',
      render: (_, record) => <div>{record.withdraw_time}</div>
    },
    {
      key: 'coin_type',
      dataIndex: 'coin_type',
      title: t('record.currency'),
      width: '5'
    },
    {
      key: 'type',
      dataIndex: 'type',
      title: t('record.type')
    },
    {
      key: 'withdraw_address',
      dataIndex: 'withdraw_address',
      title: t('record.Collection record'),
      width: '20%'
    },
    {
      key: 'order_id',
      dataIndex: 'order_id',
      title: t('record.order number'),
      width: '20%',
      render: (_, record) => <div>{record.order_id}</div>
    },
    {
      key: 'sequence_number',
      dataIndex: 'sequence_number',
      title: t('record.Serial number')
    },
    {
      key: 'fee',
      dataIndex: 'fee',
      title: t('record.Service Charge')
    },
    {
      key: 'withdraw_amount',
      dataIndex: 'withdraw_amount',
      title: t('record.quantity')
    },
    {
      key: 'status',
      dataIndex: 'status',
      title: t('record.state'),

      width: '8%',
      render: (_, record) => (
        <span>
          {record.status === 0 ? '待审核' : ''}
          {record.status === 1 ? '未通过' : ''}
          {record.status === 2 ? '待处理' : ''}
          {record.status === 3 ? '提现失败' : ''}
          {record.status === 4 ? '待确认' : ''}
          {record.status === 5 ? '完成' : ''}
        </span>
      )
    }
  ]
}

export const receiveColumns = (t) => {
  return [
    {
      key: 'transaction_time',
      dataIndex: 'transaction_time',
      title: t('record.time'),
      width: '15%',
      render: (_, record) => <div>{record.transaction_time}</div>
    },
    {
      key: 'order_id',
      dataIndex: 'order_id',
      title: t('record.order number'),
      width: '15%',
      render: (_, record) => <div>{record.order_id}</div>
    },
    {
      key: 'sequence_number',
      dataIndex: 'sequence_number',
      title: t('record.Serial number'),
      width: '20%'
    },
    {
      key: 'receive_address',
      dataIndex: 'receive_address',
      title: t('record.WithdrawalAddress'),
      width: '15%',
      render: (_, record) => <div>{record?.receive_address}</div>
    },
    {
      key: 'payment_address',
      dataIndex: 'payment_address',
      title: '打款地址',
      title: t('record.Payment address'),
      width: '15%'
    },
    {
      key: 'currency',
      dataIndex: 'currency',
      title: t('record.currency'),
      width: '5%'
    },
    {
      key: 'amount',
      dataIndex: 'amount',
      title: t('record.quantity'),
      width: '10%'
    }
  ]
}
