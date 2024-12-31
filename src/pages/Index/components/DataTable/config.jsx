import iconStarFill from '@/assets/icon/light/icon-favorite-fill.svg'
import iconStarLine from '@/assets/icon/light/icon-favorite-line.svg'
import tendencyUp from '@/assets/image/tendency-up.svg'
import tendencyDown from '@/assets/image/tendency-down.svg'
import { Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { URLS } from '@/routes/urls'
import { useTokenStore } from '@/stores'
import { favoriteCoin } from '@/service'
import { showError, showSuccess, showWarning } from '@/common/message'
import { useUserStore } from '@/stores'
import { pageParams } from '@/common/config'

export const columns = (runMarket, column, t) => {
  const navigate = useNavigate()
  // 收藏代币
  const starCoin = async (id, status) => {
    if (!useUserStore?.getState()?.userInfo?.commercial_id) {
      return showWarning('请登录后再执行此操作')
    }
    const req = { coin_id: id, action: status }

    try {
      await favoriteCoin(req)
      runMarket({ column: column, ...pageParams })
    } catch (err) {
      showError(err.msg)
    }
  }
  return [
    {
      key: 'is_collected',
      dataIndex: 'is_collected',
      title: t('banner.Collection'),
      render: (_, record) => (
        <div>
          {record.is_collected && (
            <img
              onClick={() => {
                starCoin(record.id, 2)
              }}
              src={iconStarFill}
            />
          )}
          {!record.is_collected && (
            <img
              onClick={() => {
                starCoin(record.id, 1)
              }}
              src={iconStarLine}
            />
          )}
        </div>
      )
    },
    {
      key: 'coin_name',
      dataIndex: 'coin_name',
      title: t('banner.Crypto'),
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
      title: t('banner.Last Price (USD)'),
      render: (_, record) => <span>{Number(record.price).toFixed(2)}</span>
    },
    {
      key: 'high',
      dataIndex: 'high',
      title: t('banner.24h high'),

      render: (_, record) => <span>{Number(record.high).toFixed(2)}</span>
    },
    {
      key: 'low',
      dataIndex: 'low',
      title: t('banner.24h low'),
      render: (_, record) => <span>{Number(record.low).toFixed(2)}</span>
    },
    {
      key: 'rate_percent',
      dataIndex: 'rate_percent',
      title: t('banner.Change'),
      render: (_, record) => (
        <span>{Number(record.rate_percent).toFixed(2)}</span>
      )
    },
    {
      key: 'trend24h',
      dataIndex: 'trend24h',
      title: t('banner.Last 24h'),
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
      title: t('banner.Action'),

      render: () => (
        <button
          style={{
            color: 'var(--color-text-pri)'
          }}
          onClick={() => {
            if (useTokenStore?.getState()?.token) {
              navigate(URLS.carryCoin)
            } else {
              navigate(URLS.login)
            }
          }}
        >
          {t('banner.Trade')}
        </button>
      )
    }
  ]
}
