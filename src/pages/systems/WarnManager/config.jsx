import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { URLS } from '@/routes/urls'
export const columns = (editRule) => {
  const navigate = useNavigate()
  return [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      width: '5%'
    },
    {
      title: '报警类型',
      dataIndex: 'warn_type',
      key: 'warn_type',
      render: (_, record) => (
        <span>{record.trigger_rule === WARN_MENU.CRASH ? '崩溃' : '异常'}</span>
      )
    },
    {
      title: '触发规则',
      dataIndex: 'trigger_rule',
      key: 'trigger_rule',
      render: (_, record) => (
        <span>{record.trigger_rule.warning_rule_name}</span>
      )
    },
    {
      title: '触发指标',
      dataIndex: 'trigger_indication',
      key: 'trigger_indication'
    },
    {
      title: '报警时间',
      dataIndex: 'warning_time',
      key: 'warning_time',
      width: '12%'
    },
    {
      title: '系统类型',
      dataIndex: 'system_type',
      key: 'system_type',
      render: (_, record) => (
        <span>
          {record.system_type == 1 ? 'Android' : ''}
          {record.system_type == 2 ? 'HarmonyOS' : ''}
          {record.system_type == 3 ? 'PC' : ''}
          {record.system_type == 4 ? 'Undefined' : ''}
        </span>
      )
    },
    {
      title: '摘要',
      dataIndex: 'abstract',
      key: 'abstract',
      width: '30%'
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => {
            navigate(URLS.warnDetail, { state: record })
          }}
        >
          查看详情
        </Button>
      )
    }
  ]
}

// 系统类型列表
export const SYS_MENU = {
  Android: 1,
  HarmonyOS: 2,
  PC: 3,
  Undefined: 4
}

// 系统类型选择项
export const systemOptions = [
  {
    value: SYS_MENU.Android,
    label: '安卓'
  },
  {
    value: SYS_MENU.HarmonyOS,
    label: '鸿蒙'
  },
  {
    value: SYS_MENU.PC,
    label: 'PC'
  },
  {
    value: SYS_MENU.Undefined,
    label: '未知'
  }
]

// 报警类型列表
export const WARN_MENU = {
  CRASH: 1,
  ERROR: 2
}

// 报警类型选择项
export const warnOptions = [
  {
    value: WARN_MENU.CRASH,
    label: '崩溃'
  },
  {
    value: WARN_MENU.ERROR,
    label: '异常'
  }
]

// 版本类型列表
export const VERSION_MENU = {
  AVERSION: 1, //单个版本
  ASUMMARY: 2 //单个摘要
}
export const ruleOptions = [
  {
    value: VERSION_MENU.AVERSION,
    label: '单个版本'
  },
  {
    value: VERSION_MENU.ASUMMARY,
    label: '单个摘要'
  }
]
