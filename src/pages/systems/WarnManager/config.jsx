import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { URLS } from '@/routes/urls'
export const columns = () => {
  const navigate = useNavigate()
  return [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      width: '5%'
    },
    {
      title: '报警类型',
      dataIndex: 'warnType',
      key: 'warnType'
    },
    {
      title: '触发规则',
      dataIndex: 'rule',
      key: 'rule'
    },
    {
      title: '触发指标',
      dataIndex: 'index',
      key: 'index'
    },
    {
      title: '报警时间',
      dataIndex: 'time',
      key: 'time',
      width: '12%'
    },
    {
      title: '系统类型',
      dataIndex: 'sysType',
      key: 'sysType'
    },
    {
      title: '摘要',
      dataIndex: 'dsc',
      key: 'dsc',
      width: '30%'
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (record) => (
        <Button
          type="link"
          onClick={() => {
            navigate(URLS.warnDetail, record)
          }}
        >
          查看详情
        </Button>
      )
    }
  ]
}

export const systemOptions = [
  {
    value: 1,
    label: '安卓'
  },
  {
    value: 2,
    label: '鸿蒙'
  },
  {
    value: 3,
    label: 'PC'
  },
  {
    value: 4,
    label: '未知'
  }
]

export const warnOptions = [
  {
    value: 1,
    label: '崩溃'
  },
  {
    value: 2,
    label: '异常'
  }
]

export const ruleOptions = [
  {
    value: 1,
    label: '单个版本'
  },
  {
    value: 2,
    label: '单个摘要'
  }
]
