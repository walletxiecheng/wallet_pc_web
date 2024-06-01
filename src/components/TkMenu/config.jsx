import { UserOutlined } from '@ant-design/icons'
import { URLS } from '@/routes/urls'

export const menuKeys = {
  systems: 'systems',
  smsManager: 'smsManager',
  warnManager: 'warnManager',
  warnSetting: 'warnSetting',
  adminSetting: 'adminSetting',
  operateLogSetting: 'operateLogSetting',
  loginLogManager: 'loginLogManager',
  merchantManager: 'merchantManager',
  accountManager: 'accountManager',
  realNameManager: 'realNameManager',
  balanceManager: 'balanceManager'
}

export const menuItems = [
  {
    key: menuKeys.systems,
    icon: <UserOutlined />,
    label: '系统管理',
    children: [
      {
        label: '短信管理',
        key: menuKeys.smsManager,
        path: URLS.smsManager
      },
      {
        label: '报警管理',
        key: menuKeys.warnManager,
        path: URLS.warnManager
      },
      {
        label: '报警设置',
        key: menuKeys.warnSetting,
        path: URLS.warnSetting
      },
      {
        label: '管理员设置',
        key: menuKeys.adminSetting
      },
      {
        label: '操作日志设置',
        key: menuKeys.operateLogSetting
      },
      {
        label: '登陆日志管理',
        key: menuKeys.loginLogManager
      }
    ]
  },
  {
    key: menuKeys.merchantManager,
    icon: <UserOutlined />,
    label: '商户管理',
    children: [
      {
        label: '账户管理',
        key: menuKeys.accountManager
      },
      {
        label: '实名管理',
        key: menuKeys.realNameManager
      },
      {
        label: '余额管理',
        key: menuKeys.balanceManager
      }
    ]
  }
]
