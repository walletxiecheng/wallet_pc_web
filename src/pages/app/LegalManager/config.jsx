import { Button } from 'antd'

export const legalColumns = (editLegal) => {
  return [
    {
      key: 'id',
      dataIndex: 'id',
      title: '法币ID'
    },
    {
      key: 'name',
      dataIndex: 'name',
      title: '法币名称'
    },
    {
      key: 'symbol',
      dataIndex: 'symbol',
      title: '单位符号'
    },
    {
      key: 'creator',
      dataIndex: 'creator',
      title: '创建人',
      render: (_, record) => <span>{record?.creator?.character_name}</span>
    },
    {
      key: 'time',
      dataIndex: 'time',
      title: '创建时间'
    },
    {
      key: 'rate',
      dataIndex: 'rate',
      title: '汇率'
    },
    {
      key: 'addr',
      dataIndex: 'addr',
      title: '参考地址'
    },
    {
      key: 'correct',
      dataIndex: 'correct',
      title: '汇率修正'
    },
    {
      key: 'operate',
      dataIndex: 'operate',
      title: '操作',
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => {
            editLegal(record)
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
    value: 1,
    label: '启用'
  },
  {
    value: 2,
    label: '禁用'
  }
]
