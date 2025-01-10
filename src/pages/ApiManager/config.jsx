import '@/assets/css/public.css'
import { timesTampDate } from '@/common/method'
import { Button } from 'antd'
import { useUserStore } from '@/stores'

export const apiColumns = (
  setShowEdit,
  setCurrentData,
  showTips,
  setUid,
  setShowGoogleToast,
  t
) => {
  const { userInfo } = useUserStore()
  const googleStatus = userInfo?.google_verify_status
  // 谷歌状态
  const has_fund_password = userInfo?.has_fund_password

  const checkKey = (uid) => {
    setUid(uid)
    // 查看是否有资金密码和谷歌验证码 没有提示
    if (!googleStatus || !has_fund_password) {
      showTips(true)
    }
    // 有展示谷歌验证码弹窗
    setShowGoogleToast(true)
  }

  return [
    {
      key: 'create_time',
      dataIndex: 'create_time',
      title: t('apiManager.Creation time'),
      render: (_, record) => <span>{timesTampDate(record.create_time)}</span>
    },
    {
      key: 'remark',
      dataIndex: 'remark',
      title: t('apiManager.Remarks')
    },
    {
      key: 'usage',
      dataIndex: 'usage',
      title: t('apiManager.purpose')
    },
    {
      key: 'auth',
      dataIndex: 'auth',
      title: t('apiManager.jurisdiction')
    },
    {
      key: 'content',
      dataIndex: 'content',
      title: t('apiManager.Access Key'),

      render: (_, record) => (
        <div style={{ width: 150 }} className="text-ellipsis">
          <div> {record.content}</div>
          <Button
            type="link"
            style={{ marginTop: '5px', border: 'none' }}
            onClick={() => {
              checkKey(record.uid)
            }}
          >
            查看密钥
          </Button>
        </div>
      )
    },
    {
      key: 'bind_ip',
      dataIndex: 'bind_ip',
      title: t('apiManager.Bind IP address'),

      render: (_, record) => (
        <div style={{ width: 100 }} className="text-ellipsis">
          {record.bind_ip}
        </div>
      )
    },
    {
      key: 'status',
      dataIndex: 'status',
      title: t('apiManager.State'),
      render: (_, record) => (
        <span>{record.status === 0 ? 'success' : 'fail'}</span>
      )
    },
    {
      key: 'exchangeable',
      dataIndex: 'exchangeable',
      title: t('apiManager.Tradable')
    },
    {
      key: 'operate',
      dataIndex: 'operate',
      title: t('apiManager.Operation'),

      render: (_, record) => (
        <button
          className="button-style"
          onClick={() => {
            setShowEdit(true)
            setCurrentData(record)
          }}
        >
          编辑
        </button>
      )
    }
  ]
}

// 权限类型
export const authorityOptions = [
  {
    label: '读取',
    value: 0
  },
  {
    label: '提取',
    value: 1
  },
  {
    label: '交易',
    value: 2
  }
]
