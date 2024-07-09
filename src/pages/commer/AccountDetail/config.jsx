import { Space, Button } from 'antd'
export const assetsColumns = (recharge, lockForm) => {
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
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            onClick={() => {
              lockForm(record)
            }}
          >
            锁仓
          </Button>
          <Button
            type="link"
            onClick={() => {
              recharge(record)
            }}
          >
            充币
          </Button>
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
      key: 'commercial_id',
      dataIndex: 'commercial_id'
    },
    {
      title: '交易类型',
      key: 'transaction_type',
      dataIndex: 'transaction_type'
    },
    ,
    {
      title: '交易金额',
      key: 'amount',
      dataIndex: 'amount'
    },
    ,
    {
      title: '手续费',
      key: 'fee',
      dataIndex: 'fee'
    },
    {
      title: '交易时间',
      key: 'tx_time',
      dataIndex: 'tx_time'
    }
  ]
}

// 类型
export const typeOptions = [
  {
    value: 0,
    label: '全部'
  },
  {
    value: 1,
    label: '定投买入'
  },
  {
    value: 2,
    label: '定投卖出'
  },
  {
    value: 3,
    label: '购买定期'
  },
  {
    value: 4,
    label: '定期赎回'
  },
  {
    value: 5,
    label: '币本位合约划转转入'
  },
  {
    value: 6,
    label: '币本位合约划转转出'
  },
  {
    value: 7,
    label: 'U本位合约划转转入'
  },
  {
    value: 8,
    label: 'U本位合约划转转出'
  },
  {
    value: 9,
    label: '秒合约转入'
  }
]

// 币种类型
export const coinTypeOptions = [
  {
    value: 0,
    label: '全部'
  },
  {
    value: 1,
    label: 'BTC'
  },
  {
    value: 2,
    label: 'ETH'
  }
]

// 锁仓类型
export const transactionTypeOptions = [
  {
    value: 1,
    label: '充值'
  },
  {
    value: 2,
    label: '提现'
  },
  {
    value: 3,
    label: '转账'
  },
  {
    value: 4,
    label: '手续费'
  },
  {
    value: 5,
    label: '活动补偿'
  }
]
