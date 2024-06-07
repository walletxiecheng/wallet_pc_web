import { Button, Space } from 'antd'
import {
  openAdminHandler,
  disableAdminHandler,
  deleteAdminHandler
} from './utils/operate'
import { render } from 'less'
export const columns = (editAdministrator) => {
  return [
    {
      title: '编号',
      dataIndex: 'ID',
      key: 'ID',
      width: '8%',
      sorter: (a, b) => a.id - b.id
      // 排序
    },
    {
      title: '账号',
      dataIndex: 'account_number',
      key: 'account_number',
      width: '15%'
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: '10%'
    },
    {
      title: '部门',
      dataIndex: 'department',
      key: 'department',
      width: '10%'
    },
    {
      title: '岗位',
      dataIndex: 'post',
      key: 'post',
      width: '8%'
    },
    {
      title: '账号角色',
      dataIndex: 'character_name',
      key: 'character_name',
      width: '12%',
      render: (_, record) => <span>{record.character.character_name}</span>
    },
    {
      title: '联系电话',
      dataIndex: 'phone_number',
      key: 'phone_number',
      width: '15%'
    },
    {
      title: '账号状态',
      dataIndex: 'enable',
      key: 'enable',
      width: '8%',
      render: (_, record) => (
        <span>{record.enable === 1 ? '启用' : '禁用'}</span>
      )
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      width: '8%',
      render: (_, record) => (
        <Space>
          <Button type="link">编辑</Button>
          {record.enable === 2 && (
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

export const statusOptions = [
  {
    value: '0',
    label: '所有状态'
  },
  {
    value: '1',
    label: '启用'
  },
  {
    value: '2',
    label: '禁用'
  }
]
