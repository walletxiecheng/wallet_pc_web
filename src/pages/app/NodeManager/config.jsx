import { Button } from 'antd'

export const nodeColumns = (edit) => {
  return [
    {
      key: 'time',
      dataIndex: 'time',
      title: '节点'
    },
    {
      key: 'language',
      dataIndex: 'language',
      title: '名称'
    },
    {
      key: 'version',
      dataIndex: 'version',
      title: '配置时间'
    },
    {
      key: 'version',
      dataIndex: 'version',
      title: 'URL'
    },
    {
      key: 'version',
      dataIndex: 'version',
      title: '描述'
    },
    {
      key: 'version',
      dataIndex: 'version',
      title: '状态'
    },
    {
      key: 'version',
      dataIndex: 'version',
      title: '启用状态'
    },
    {
      key: 'version',
      dataIndex: 'version',
      title: '操作',
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => {
            edit(record)
          }}
        >
          编辑
        </Button>
      )
    }
  ]
}

export const statusOption = [
  {
    value: '0',
    label: '全部'
  },
  {
    value: '1',
    label: '可用'
  },
  {
    value: '2',
    label: '不可用'
  }
]
