import '@/assets/css/public.css'
import { useNavigate } from 'react-router-dom'
import { URLS } from '@/routes/urls'
import { Space } from 'antd'

export const assetsColumns = (setShowTotal) => {
  const navigate = useNavigate()
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

      render: (_, record) => (
        <Space>
          <button
            onClick={() => {
              setShowTotal(true)
            }}
          >
            归集
          </button>
          <button
            className="button-style"
            onClick={() => {
              navigate(URLS.carryCoin, { state: record })
            }}
          >
            提币
          </button>
        </Space>
      )
    }
  ]
}
