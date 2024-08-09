import '@/assets/css/public.css'
export const assetsColumns = () => {
  return [
    {
      key: 'token',
      dataIndex: 'token',
      title: '币种',
      width: '15%'
    },
    {
      key: 'available_balance',
      dataIndex: 'available_balance',
      title: '可用',
      width: '18%'
    },
    {
      key: 'frozen_balance',
      dataIndex: 'frozen_balance',
      title: '下单冻结',
      width: '18%'
    },
    {
      key: 'valuation',
      dataIndex: 'valuation',
      title: 'BTC估值',
      width: '18%'
    },
    {
      key: 'lock_balance',
      dataIndex: 'lock_balance',
      title: '锁仓',
      width: '18%'
    },
    {
      key: 'operate',
      dataIndex: 'operate',
      title: '操作',

      render: (record) => (
        <>
          <button className="button-style"> 提币</button>
        </>
      )
    }
  ]
}
