import '@/assets/css/public.css'
import { useNavigate } from 'react-router-dom'
import { URLS } from '@/routes/urls'
import { Space } from 'antd'
import { useTranslation } from 'react-i18next'

export const assetsColumns = (setShowTotal) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return [
    {
      key: 'token',
      dataIndex: 'token',
      title: t('account.column1'),
      width: '15%'
    },
    {
      key: 'available_balance',
      dataIndex: 'available_balance',
      title: t('account.column2'),
      width: '18%'
    },
    {
      key: 'frozen_balance',
      dataIndex: 'frozen_balance',
      title: t('account.column3'),
      width: '18%'
    },
    {
      key: 'valuation',
      dataIndex: 'valuation',
      title: t('account.column4'),
      width: '18%'
    },
    {
      key: 'lock_balance',
      dataIndex: t('account.column5'),
      title: '锁仓',
      width: '18%'
    },
    {
      key: 'operate',
      dataIndex: 'operate',
      title: t('account.column6'),

      render: (_, record) => (
        <Space>
          <button
            onClick={() => {
              setShowTotal(true)
            }}
          >
            {t('account.Payment')}
          </button>
          <button
            className="button-style"
            onClick={() => {
              navigate(URLS.carryCoin, { state: record })
            }}
          >
            {t('account.Withdrawal')}
          </button>
        </Space>
      )
    }
  ]
}
