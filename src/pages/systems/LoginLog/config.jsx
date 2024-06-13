import { Button } from 'antd'
const headerStyle = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '200px'
}

export const columns = (showDetail) => {
  return [
    {
      title: '登录ID',
      dataIndex: 'account_number',
      key: 'account_number'
    },
    {
      title: '账号权限',
      dataIndex: 'authority',
      key: 'authority'
    },
    {
      title: '提交验证码',
      dataIndex: 'verification_code',
      key: 'verification_code'
    },
    {
      title: '登录时间',
      dataIndex: 'login_time',
      key: 'login_time'
    },
    {
      title: '登录结果',
      dataIndex: 'login_result',
      key: 'login_result'
    },
    {
      title: '地区&IP',
      dataIndex: 'region_and_ip',
      key: 'region_and_ip'
    },
    {
      title: '请求头',
      dataIndex: 'request_header',
      key: 'request_header',
      width: '12%',
      render: (_, record) => (
        <div style={headerStyle}>{record.request_header}</div>
      )
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => {
            showDetail(record)
          }}
        >
          查看详情
        </Button>
      )
    }
  ]
}
