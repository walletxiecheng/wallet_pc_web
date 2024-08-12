// 提款记录
export const withdrawColumns = () => {
  return [
    {
      key: 'withdraw_time',
      dataIndex: 'withdraw_time',
      title: '时间',
      render: (_, record) => (
        <div className="text-ellipsis">{record.withdraw_time}</div>
      )
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
      title: '订单号',
      width: '10%',
      render: (_, record) => (
        <div className="text-ellipsis" style={{ width: 150 }}>
          {record.order_id}
        </div>
      )
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
      title: '状态',
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

export const receiveColumns = () => {
  return [
    {
      key: 'transaction_time',
      dataIndex: 'transaction_time',
      title: '时间',
      width: '10%',
      render: (_, record) => (
        <div className="text-ellipsis">{record.transaction_time}</div>
      )
    },
    {
      key: 'order_id',
      dataIndex: 'order_id',
      title: '订单号',
      width: '10%',
      render: (_, record) => (
        <div className="text-ellipsis" style={{ width: 120 }}>
          {record.order_id}
        </div>
      )
    },
    {
      key: 'sequence_number',
      dataIndex: 'sequence_number',
      title: '流水号'
    },
    {
      key: 'receive_address',
      dataIndex: 'receive_address',
      title: '收款地址',
      render: (_, record) => (
        <div className="text-ellipsis" style={{ width: 120 }}>
          {record.receive_address}
        </div>
      )
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
