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
      render: () => (
        <Button
          type="link"
          onClick={() => {
            navigate(URLS.warnDetail)
          }}
        >
          查看详情
        </Button>
      )
    }
  ]
}
