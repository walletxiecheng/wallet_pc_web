import { Result } from 'antd'

export const columns = () => {
  return [
    {
      title: '操作ID',
      dataIndex: 'operation_id',
      key: 'operation_id'
    },
    {
      title: '影响表名称',
      dataIndex: 'effect_table_name',
      key: 'effect_table_name'
    },
    {
      title: '操作账号',
      dataIndex: 'account',
      key: 'account'
    },
    {
      title: '操作时间',
      dataIndex: 'operation_time',
      key: 'operation_time'
    },
    {
      title: '操作类型',
      dataIndex: 'operation_type',
      key: 'operation_type'
    },
    {
      title: '操作结果',
      dataIndex: 'operation_result',
      key: 'operation_result'
    },
    {
      title: 'IP地址',
      dataIndex: 'ip',
      key: 'ip'
    }
  ]
}

export const RESULT_MENU = {
  SUCCESS: 1,
  FAIL: 2
}
export const TYPE_MENU = {
  ADD: 2,
  EDIT: 3,
  DELETE: 4
}

export const resultOption = [
  {
    label: '成功',
    value: RESULT_MENU.SUCCESS
  },
  {
    label: '失败',
    value: RESULT_MENU.FAIL
  }
]

export const typeOption = [
  {
    label: '新增',
    value: TYPE_MENU.ADD
  },
  {
    label: '编辑',
    value: TYPE_MENU.EDIT
  },
  {
    label: '删除',
    value: TYPE_MENU.DELETE
  }
]
