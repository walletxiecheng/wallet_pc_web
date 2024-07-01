import { Button } from 'antd'

export const versionColumns = (edit) => {
  return [
    {
      key: 'id',
      dataIndex: 'id',
      title: '版本ID'
    },
    {
      key: 'version',
      dataIndex: 'version',
      title: '版本号'
    },
    {
      key: 'online_time',
      dataIndex: 'online_time',
      title: '上线时间'
    },
    {
      key: 'platform',
      dataIndex: 'platform',
      title: '所属系统类型'
    },
    {
      key: 'support_system_version',
      dataIndex: 'support_system_version',
      title: '支持系统版本'
    },
    {
      key: 'is_abandon',
      dataIndex: 'is_abandon',
      title: '是否停用'
    },
    {
      key: 'is_force',
      dataIndex: 'is_force',
      title: '是否强制更新'
    },
    {
      key: 'url',
      dataIndex: 'url',
      title: '相关链接'
    },
    {
      key: 'content',
      dataIndex: 'content',
      title: '更新提示词描述'
    },
    {
      key: 'operate',
      dataIndex: 'operate',
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

// 是否停用
export const abandonOptions = [
  {
    value: 1,
    label: '启用'
  },
  {
    value: 2,
    label: '停用'
  }
]

// 是否强制更新
export const forceOptions = [
  {
    value: 0,
    label: '否'
  },
  {
    value: 1,
    label: '是'
  }
]

// 所属系统类型
export const platOptions = [
  {
    value: 1,
    label: '安卓'
  },
  {
    value: 2,
    label: 'ios'
  }
]
