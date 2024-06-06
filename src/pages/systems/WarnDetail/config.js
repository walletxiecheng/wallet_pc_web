import { useNavigate } from 'react-router-dom'
export const columns = () => {
  return [
    {
      title: '影响用户数',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '影响用户ID',
      dataIndex: 'warnType',
      key: 'warnType'
    },
    {
      title: '影响用户次数',
      dataIndex: 'rule',
      key: 'rule'
    },
    {
      title: '影响设备数',
      dataIndex: 'index',
      key: 'index'
    },
    {
      title: '载体型号',
      dataIndex: 'time',
      key: 'time'
    },
    {
      title: '影响载体次数',
      dataIndex: 'sysType',
      key: 'sysType'
    },
    {
      title: '影响系统版本号',
      dataIndex: 'dsc',
      key: 'dsc'
    },
    {
      title: '影响版本次数',
      dataIndex: 'operate',
      key: 'operate'
    }
  ]
}
