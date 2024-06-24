export const languageColumns = () => {
  return [
    {
      key: 'id',
      dataIndex: 'id',
      title: 'ID'
    },
    {
      key: 'language',
      dataIndex: 'language',
      title: '语言'
    },
    {
      key: 'version',
      dataIndex: 'version',
      title: '版本'
    },
    {
      key: 'remark',
      dataIndex: 'remark',
      title: '备注'
    }
  ]
}

export const recordColumns = () => {
  return [
    {
      key: 'time',
      dataIndex: 'time',
      title: '时间'
    },
    {
      key: 'language',
      dataIndex: 'language',
      title: '行为'
    },
    {
      key: 'version',
      dataIndex: 'version',
      title: '内容',
      width: '50%'
    }
  ]
}
