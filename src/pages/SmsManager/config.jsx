import { Button } from 'antd'

export const columns = (handleEditSms) => {
  return [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      width: '10%'
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      width: '20%'
    },
    {
      title: '唯一标识',
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
      width: '30%'
    },
    {
      title: '发送上限',
      dataIndex: 'sendMax',
      key: 'sendMax'
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (_, record) => (
        <Button
          style={{ padding: 0 }}
          onClick={() => {
            handleEditSms(record)
          }}
          type="link"
        >
          编辑
        </Button>
      )
    }
  ]
}
