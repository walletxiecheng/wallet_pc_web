import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '@/Layouts/BaseLayout'
import Login from '@/pages/Login'
import SmsManager from '@/pages/SmsManager'
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
        element: <div>warnManager</div>,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.warnSetting,
        element: <div>warnSetting</div>,
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
