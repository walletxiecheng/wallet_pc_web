import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '@/Layouts/BaseLayout'
import Login from '@/pages/Login'
import SmsManager from '@/pages/systems/SmsManager'
import WarnManager from '@/pages/systems/WarnManager'
import WarnDetail from '@/pages/systems/WarnDetail'
import WarnSetting from '@/pages/systems/WarnSetting'
import HandleRule from '@/pages/systems/WarnSetting/pages/HandleRule'
import AdminSetting from '@/pages/systems/AdminSetting'
import OperateLog from '@/pages/systems/OperateLog'
import LoginLog from '@/pages/systems/LoginLog'
import LanguageManager from '@/pages/app/LanguageManager'
import NewsManager from '@/pages/app/NewsManager'
import DappManager from '@/pages/app/DappManager'
import NodeManager from '@/pages/app/NodeManager'
import CoinManager from '@/pages/app/CoinManager'
import LegalManager from '@/pages/app/LegalManager'
import Advertisement from '@/pages/app/AdvertManager'
import VersionManager from '@/pages/app/VersionManager'
import ErrorPage from '@/pages/ErrorPage'
import NotFound from '@/pages/NotFound'
import AccountManager from '@/pages/commer/AccountManager'
import BalanceManager from '@/pages/commer/BalanceManager'
import RealNameManager from '@/pages/commer/RealNameManager'
import AccountDetail from '@/pages/commer/AccountDetail'
import { URLS } from './urls'

export const routes = createBrowserRouter([
  {
    path: URLS.root,
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      // 系统管理
      {
        path: URLS.smsManager,
        element: <SmsManager />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.warnManager,
        element: <WarnManager />,
        errorElement: <ErrorPage />
      },
      // 商户管理
      {
        path: URLS.accountManager,
        element: <AccountManager />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.accountDetail,
        element: <AccountDetail />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.realNameManager,
        element: <RealNameManager />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.balanceManager,
        element: <BalanceManager />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.warnDetail,
        element: <WarnDetail />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.warnSetting,
        element: <WarnSetting />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.handleRule,
        element: <HandleRule />,
        errorElement: <HandleRule />
      },
      {
        path: URLS.adminSetting,
        element: <AdminSetting />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.operateLogSetting,
        element: <OperateLog />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.loginLogManager,
        element: <LoginLog />,
        errorElement: <ErrorPage />
      },
      // 应用端管理
      {
        path: URLS.dappManager,
        element: <DappManager />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.newsManager,
        element: <NewsManager />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.languageManager,
        element: <LanguageManager />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.nodeManager,
        element: <NodeManager />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.coinManager,
        element: <CoinManager />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.legalManager,
        element: <LegalManager />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.advertManager,
        element: <Advertisement />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.versionManager,
        element: <VersionManager />,
        errorElement: <ErrorPage />
      }
    ]
  },
  {
    path: URLS.login,
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: URLS.notFount,
    element: <NotFound />
  }
])

export default routes
