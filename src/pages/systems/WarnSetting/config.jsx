import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
export const columns = () => {
  const navigate = useNavigate()
  return [
    {
      key: 'id',
      title: '编号',
      dataIndex: 'id'
    },
    {
      key: 'warning_rule_name',
      title: '调用规则',
      dataIndex: 'warning_rule_name'
    },
    {
      key: 'appear_times',
      title: '触发指标',
      dataIndex: 'appear_times'
    },
    {
      key: 'enable_notify',
      title: '是否启用通知',
      dataIndex: 'enable_notify',
      render: (_, record) => <span>{record.enable_notify ? '是' : '否'}</span>
    },
    {
      key: 'member',
      title: '通知人数',
      dataIndex: 'member',
      render: (_, record) => <span>{record?.member.length}</span>
    },
    {
      key: 'sms_content',
      title: '短信内容',
      dataIndex: 'sms_content'
    },
    {
      key: 'operate',
      title: '操作',
      dataIndex: 'operate',
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => {
            navigate('/systems/warnSetting/handleRule', {
              state: { type: 2, ...record }
            })
          }}
        >
          编辑
        </Button>
      )
    }
  ]
}

export const STATE_MENU = {
  ALL: 0,
  ENABLE: 1,
  DISABLE: 2
}

export const stateOption = [
  {
    label: '全部',
    value: STATE_MENU.ALL
  },
  {
    label: '启用',
    value: STATE_MENU.ENABLE
  },
  {
    label: '禁用',
    value: STATE_MENU.DISABLE
  }
]
