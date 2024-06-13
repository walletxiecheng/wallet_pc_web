export const columns = () => {
  return [
    {
      title: '操作ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '影响表名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '操作账号',
      dataIndex: 'account',
      key: 'account'
    },
    {
      title: '操作时间',
      dataIndex: 'time',
      key: 'time'
    },
    {
      title: '操作类型',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: '操作结果',
      dataIndex: 'result',
      key: 'result'
    },
    {
      title: 'IP地址',
      dataIndex: 'address',
      key: 'address'
    }
  ]
}
