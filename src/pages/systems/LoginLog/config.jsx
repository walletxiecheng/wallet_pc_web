import { Button } from 'antd'
import { render } from 'less'
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
      key: 'login_result',
      render: (_, record) => (
        <span>
          {resultOption.map((item) => {
            if (item.value == record.login_result) return item.label
          })}
        </span>
      )
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

export const RESULT_MENU = {
  ALL: 0,
  SUCCESS: 1,
  WARN_PASSWORD: 2,
  WARN_CODE: 3,
  NOTFOUND: 4,
  DISABLE: 5,
  WARN_SYSTEM: 6,
  NOT_BIND: 7
}

export const resultOption = [
  {
    value: RESULT_MENU.ALL,
    label: '全部'
  },
  {
    value: RESULT_MENU.SUCCESS,
    label: '登录成功'
  },
  {
    value: RESULT_MENU.WARN_PASSWORD,
    label: '密码错误'
  },
  {
    value: RESULT_MENU.WARN_CODE,
    label: '验证码错误'
  },
  {
    value: RESULT_MENU.NOTFOUND,
    label: '账户不存在'
  },
  {
    value: RESULT_MENU.DISABLE,
    label: '账户禁用'
  },
  {
    value: RESULT_MENU.WARN_SYSTEM,
    label: '系统内部错误'
  },
  {
    value: RESULT_MENU.NOT_BIND,
    label: '未绑定手机'
  }
]
