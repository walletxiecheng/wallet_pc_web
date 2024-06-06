import { Button, Space } from 'antd'

export const columns = () => {
  return [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      width: '8%',
      sorter: (a, b) => a.id - b.id
      // 排序
    },
    {
      title: '账号',
      dataIndex: 'account',
      key: 'account',
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
      dataIndex: 'role',
      key: 'role',
      width: '12%'
    },
    {
      title: '联系电话',
      dataIndex: 'tel',
      key: 'tel',
      width: '15%'
    },
    {
      title: '账号状态',
      dataIndex: 'status',
      key: 'status',
      width: '8%'
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      width: '8%',
      render: (_, record) => (
        <Space>
          <Space.Compact>
            <Button type="link">编辑</Button>
          </Space.Compact>
          <Space.Compact>
            <Button type="link">启用</Button>
          </Space.Compact>
          <Space.Compact>
            <Button type="link" style={{ color: '#FF3B30' }}>
              删除
            </Button>
          </Space.Compact>
        </Space>
      )
    }
  ]
}
