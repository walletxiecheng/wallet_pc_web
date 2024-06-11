import { Button, Space } from 'antd'
import {
  openAdminHandler,
  disableAdminHandler,
  deleteAdminHandler
} from './utils/operate'

export const columns = (editAdministrator) => {
  return [
    {
      key: 'ID',
      width: '8%',
      title: '编号',
      dataIndex: 'ID',
      // 排序
      sorter: (a, b) => a.id - b.id
    },
    {
      width: '15%',
      title: '账号',
      key: 'account_number',
      dataIndex: 'account_number'
    },
    {
      key: 'name',
      width: '10%',
      title: '姓名',
      dataIndex: 'name'
    },
    {
      title: '部门',
      width: '10%',
      key: 'department',
      dataIndex: 'department'
    },
    {
      width: '8%',
      key: 'post',
      title: '岗位',
      dataIndex: 'post'
    },
    {
      width: '12%',
      title: '账号角色',
      key: 'character_name',
      dataIndex: 'character_name',
      render: (_, record) => <span>{record.character.character_name}</span>
    },
    {
      width: '15%',
      title: '联系电话',
      key: 'phone_number',
      dataIndex: 'phone_number'
    },
    {
      width: '8%',
      key: 'enable',
      title: '账号状态',
      dataIndex: 'enable',
      render: (_, record) => (
        <span>{record.enable === STATUS_ENUM.ENABLE ? '启用' : '禁用'}</span>
      )
    },
    {
      width: '12%',
      title: '操作',
      key: 'operate',
      dataIndex: 'operate',
      render: (_, record) => (
        <Space>
          <Button type="link">编辑</Button>
          {record.enable === STATUS_ENUM.DISABLE && (
            <Button
              type="link"
              onClick={() => {
                openAdminHandler(record)
              }}
            >
              启用
            </Button>
          )}
          {record.enable === 1 && (
            <Button
              type="link"
              style={{ color: '#ff3b30' }}
              onClick={() => {
                disableAdminHandler(record)
              }}
            >
              禁用
            </Button>
          )}
          <Button
            type="link"
            style={{ color: '#ff3b30' }}
            onClick={() => {
              deleteAdminHandler(record)
            }}
          >
            删除
          </Button>
        </Space>
      )
    }
  ]
}

export const STATUS_ENUM = {
  ALL: 3,
  ENABLE: 1,
  DISABLE: 2
}

export const statusOptions = [
  {
    value: STATUS_ENUM.ALL,
    label: '所有状态'
  },
  {
    value: STATUS_ENUM.ENABLE,
    label: '启用'
  },
  {
    value: STATUS_ENUM.DISABLE,
    label: '禁用'
  }
]
