import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '@/Layouts/BaseLayout'
import Login from '@/pages/Login'
import SmsManager from '@/pages/systems/SmsManager'
import WarnManager from '@/pages/systems/WarnManager'
import WarnDetail from '@/pages/systems/WarnDetail'
import WarnSetting from '@/pages/systems/WarnSetting'
import AdminSetting from '@/pages/systems/AdminSetting'
import OperateLog from '@/pages/systems/OperateLog'
import LoginLog from '@/pages/systems/LoginLog'
import ErrorPage from '@/pages/ErrorPage'
import NotFound from '@/pages/NotFound'
import { URLS } from './urls'

export const routes = createBrowserRouter([
  {
    path: URLS.root,
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
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
