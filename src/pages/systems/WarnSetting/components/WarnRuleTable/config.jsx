import { Button, Space, Popconfirm } from 'antd'

export const columns = (handleEditWarn) => {
  // 确定删除逻辑
  const confirm = (e) => {
    console.log(e)
    // TODO 调用删除接口
  }
  return [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      width: '25%'
    },
    {
      title: '电话',
      dataIndex: 'tel',
      key: 'tel',
      width: '25%'
    },
    {
      title: '备注',
      dataIndex: 'desc',
      key: 'desc',
      width: '25%'
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      width: '25%',
      render: (_, record) => (
        <>
          <Space>
            <Space.Compact>
              <Button
                onClick={() => {
                  handleEditWarn()
                }}
                type="link"
              >
                编辑
              </Button>
            </Space.Compact>

            <Space.Compact>
              <Popconfirm
                title="你确定要删除这条数据吗？"
                okText="确定"
                cancelText="取消"
                onConfirm={() => {
                  confirm(record)
                }}
              >
                <Button
                  style={{ color: '#CC2C22' }}
                  onClick={() => {}}
                  type="link"
                >
                  删除
                </Button>
              </Popconfirm>
            </Space.Compact>
          </Space>
        </>
      )
    }
  ]
}
