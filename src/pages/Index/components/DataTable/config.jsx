import iconStarFill from '@/assets/icon/light/icon-favorite-fill.svg'
import iconStarLine from '@/assets/icon/light/icon-favorite-line.svg'
import tendencyUp from '@/assets/image/tendency-up.svg'
import tendencyDown from '@/assets/image/tendency-down.svg'

import { Space } from 'antd'

export const columns = () => {
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
      key: '2',
      dataIndex: '2',
      title: '币种',
      render: () => (
        <Space>
          <img src={iconStarLine} />
          <span>BTC</span>
        </Space>
      )
    },
    {
      key: '3',
      dataIndex: '3',
      title: '最新价(CNY)'
    },
    {
      key: '4',
      dataIndex: '4',
      title: '24小时最高价'
    },
    {
      key: '5',
      dataIndex: '5',
      title: '24小时最低价'
    },
    {
      key: '6',
      dataIndex: '6',
      title: '24小时涨跌幅'
    },
    {
      key: '7',
      dataIndex: '7',
      title: '24小时走势',
      render: () => (
        <div>
          <img src={tendencyUp} height={28} />
        </div>
      )
    },
    {
      key: '8',
      dataIndex: '8',
      title: '操作',
      render: () => <button>交易</button>
    }
  ]
}
