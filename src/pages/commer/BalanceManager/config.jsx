export const balanceColumns = () => {
  return [
    {
      key: 'asset_id',
      dataIndex: 'asset_id',
      title: 'ID'
    },
    {
      key: 'email_address',
      dataIndex: 'email_address',
      title: '邮箱'
    },
    {
      key: 'phone',
      dataIndex: 'phone',
      title: '手机号'
    },
    {
      key: 'name',
      dataIndex: 'name',
      title: '真实姓名'
    },
    {
      key: 'coin_name',
      dataIndex: 'coin_name',
      title: '币种名称'
    },
    {
      key: 'addr',
      dataIndex: 'addr',
      title: '钱包地址'
    },
    {
      key: 'available_coin',
      dataIndex: 'available_coin',
      title: '可用币数量'
    },
    {
      key: 'frozen_coin',
      dataIndex: 'frozen_coin',
      title: '冻结币数量'
    }
  ]
}
