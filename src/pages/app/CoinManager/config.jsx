import { Button, Image, Space } from 'antd'
import '@/assets/css/table.css'
export const coinColumns = (chainList) => {
  // 获取链名称
  const getChainName = (chain_id) => {
    return chainList.map((item) => {
      if (item.id === chain_id) return item.name
    })
  }

  return [
    {
      key: 'id',
      title: '代币ID',
      dataIndex: 'id'
    },
    {
      key: 'logo',
      title: 'logo',
      dataIndex: 'logo',
      render: (_, record) => <Image width={32} src={record.logo}></Image>
    },
    {
      key: 'name',
      title: '名称',
      dataIndex: 'name'
    },
    {
      key: 'chain_id',
      title: '所属链',
      dataIndex: 'chain_id',
      render: (_, record) => <span>{getChainName(record.chain_id)}</span>
    },
    {
      key: 'status',
      title: '状态',
      dataIndex: 'status',
      render: (_, record) => (
        <Space>
          <span
            style={{
              color: record.status === 0 ? 'red' : 'green'
            }}
          >
            {record.status === 0 ? '禁用' : '启用'}
          </span>
        </Space>
      )
    },
    {
      key: 'creator',
      title: '创建者',
      dataIndex: 'creator',
      width: '10%',
      render: (_, record) => (
        <div style={{ width: '10rem' }} className="ellipsis_table">
          {record.creator}
        </div>
      )
    },
    {
      key: 'upload_user_id',
      title: '添加人ID',
      dataIndex: 'upload_user_id',
      width: '10%'
    },
    {
      key: 'contract',
      title: '代币合约',
      dataIndex: 'contract',
      width: '15%',
      render: (_, record) => (
        <div style={{ width: '15rem' }} className="ellipsis_table">
          {record.contract}
        </div>
      )
    },
    {
      key: 'symbol',
      title: '代币单位(符号)',
      dataIndex: 'symbol'
    },
    {
      key: 'operate',
      title: '操作',
      dataIndex: 'operate',
      render: () => <Button type="link">编辑</Button>
    }
  ]
}

export const STATUS_MENU = {
  ALL: 0,
  ENABLE: 1,
  MAIN_TEN: 2,
  DISABLE: 3
}
export const statusOption = [
  {
    value: STATUS_MENU.ALL,
    label: '全部'
  },
  {
    value: STATUS_MENU.ENABLE,
    label: '可用'
  },
  {
    value: STATUS_MENU.MAIN_TEN,
    label: '维护'
  },
  {
    value: STATUS_MENU.DISABLE,
    label: '不可用'
  }
]

export const flagOption = [
  {
    value: 0,
    label: '全部'
  },
  {
    value: 1,
    label: '测试网'
  },
  {
    value: 2,
    label: '主网'
  }
]
