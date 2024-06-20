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

import NewsManager from '@/pages/app/NewsManager'
import DappManager from '@/pages/app/DappManager'
import ErrorPage from '@/pages/ErrorPage'
import NotFound from '@/pages/NotFound'
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
