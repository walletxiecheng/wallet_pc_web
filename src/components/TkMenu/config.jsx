import { UserOutlined } from '@ant-design/icons'
import { URLS } from '@/routes/urls'

// 菜单列表
export const menuKeys = {
  systems: 'systems', //系统管理
  smsManager: 'smsManager', //短信
  warnManager: 'warnManager', //报警管理
  warnSetting: 'warnSetting', //报警设置
  adminSetting: 'adminSetting', //管理员设置
  operateLogSetting: 'operateLogSetting', //操作日志
  loginLogManager: 'loginLogManager', //登录日志

  merchantManager: 'merchantManager', //商户管理
  accountManager: 'accountManager', //
  realNameManager: 'realNameManager',
  balanceManager: 'balanceManager',

  app: 'app', // 应用端管理
  dappManager: 'dappManager', //dapp
  newsManager: 'newsManager', //咨讯
  languageManager: 'languageManager', //语言
  nodeManager: 'nodeManager', //节点
  coinManager: 'coinManager', //代币
  tenderManager: 'tenderManager', //法币
  advertisement: 'advertisement', //广告版
  versionManager: 'versionManager' //版本管理
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
        key: menuKeys.adminSetting,
        path: URLS.adminSetting
      },
      {
        label: '操作日志设置',
        key: menuKeys.operateLogSetting,
        path: URLS.operateLogSetting
      },
      {
        label: '登陆日志管理',
        key: menuKeys.loginLogManager,
        path: URLS.loginLogManager
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
  },
  {
    key: menuKeys.app,
    icon: <UserOutlined />,
    label: '应用端管理',
    children: [
      {
        label: 'DApp管理',
        key: menuKeys.dappManager,
        path: URLS.dappManager
      },
      {
        label: '资讯管理',
        key: menuKeys.newsManager,
        path: URLS.newsManager
      },
      {
        label: '语言管理',
        key: menuKeys.languageManager,
        path: URLS.languageManager
      },
      {
        label: '节点管理',
        key: menuKeys.nodeManager,
        path: URLS.nodeManager
      },
      {
        label: '代币管理',
        key: menuKeys.coinManager,
        path: URLS.coinManager
      },
      {
        label: '法币管理',
        key: menuKeys.tenderManager
      },
      {
        label: '广告版管理',
        key: menuKeys.advertisement
      },
      {
        label: '版本管理',
        key: menuKeys.versionManager
      }
    ]
  }
]
