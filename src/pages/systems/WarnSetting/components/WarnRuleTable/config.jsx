import { Button } from 'antd'

export const columns = (handleEditWarn, handleDeleteWarn) => {
  return [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '电话',
      dataIndex: 'tel',
      key: 'tel'
    },
    {
      title: '备注',
      dataIndex: 'desc',
      key: 'desc'
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (record) => (
        <>
          <Button
            onClick={() => {
              handleEditWarn
            }}
            type="link"
          >
            编辑
          </Button>
          <Button
            style={{ color: '#CC2C22' }}
            onClick={() => {
              handleDeleteWarn
            }}
            type="link"
          >
            删除
          </Button>
        </>
      )
    }
  ]
}
