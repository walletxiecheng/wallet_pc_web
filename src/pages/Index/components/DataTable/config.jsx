import iconStarFill from '@/assets/icon/light/icon-favorite-fill.svg'
import iconStarLine from '@/assets/icon/light/icon-favorite-line.svg'
import tendencyUp from '@/assets/image/tendency-up.svg'
import tendencyDown from '@/assets/image/tendency-down.svg'
import { Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { URLS } from '@/routes/urls'

export const columns = () => {
  const navigate = useNavigate()
  return [
    {
      key: 'key',
      dataIndex: 'key',
      title: '收藏',
      render: () => (
        <div>
          <img src={iconStarLine} />
        </div>
      )
    },
    {
      key: 'coin_name',
      dataIndex: 'coin_name',
      title: '币种',
      render: (_, record) => (
        <Space>
          {/* <img src={iconStarLine} /> */}
          <span>{record?.coin_name}</span>
        </Space>
      )
    },
    {
      key: 'price',
      dataIndex: 'price',
      title: '最新价(CNY)',
      render: (_, record) => <span>{Number(record.price).toFixed(2)}</span>
    },
    {
      key: 'high',
      dataIndex: 'high',
      title: '24小时最高价',
      render: (_, record) => <span>{Number(record.high).toFixed(2)}</span>
    },
    {
      key: 'low',
      dataIndex: 'low',
      title: '24小时最低价',
      render: (_, record) => <span>{Number(record.low).toFixed(2)}</span>
    },
    {
      key: 'rate_percent',
      dataIndex: 'rate_percent',
      title: '24小时涨跌幅',
      render: (_, record) => (
        <span>{Number(record.rate_percent).toFixed(2)}</span>
      )
    },
    {
      key: 'trend24h',
      dataIndex: 'trend24h',
      title: '24小时走势',
      render: (_, record) => (
        <div>
          <img
            src={record.rate_percent > 0 ? tendencyUp : tendencyDown}
            height={28}
          />
        </div>
      )
    },
    {
      key: '8',
      dataIndex: '8',
      title: '操作',
      render: () => (
        <button
          onClick={() => {
            navigate(URLS.carryCoin)
          }}
        >
          交易
        </button>
      )
    }
  ]
}
