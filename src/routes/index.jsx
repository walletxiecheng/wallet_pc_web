import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '@/Layouts/BaseLayout'
import Login from '@/pages/Login'
import ErrorPage from '@/pages/ErrorPage'
import NotFound from '@/pages/NotFound'

export const URlS = {
  root: '/',
  index: '/index',
  login: '/login',
  smsManager: '/systems/smsManager',
  warnManager: '/systems/warnManager',
  warnSetting: '/systems/warnSetting',
  notFount: '*'
}

const routes = createBrowserRouter([
  {
    path: URlS.root,
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: URlS.smsManager,
        element: <div>smsManager</div>,
        errorElement: <ErrorPage />
      },
      {
        path: URlS.warnManager,
        element: <div>warnManager</div>,
        errorElement: <ErrorPage />
      },
      {
        path: URlS.warnSetting,
        element: <div>warnSetting</div>,
        errorElement: <ErrorPage />
      }
    ]
  },
  {
    path: URlS.login,
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: URlS.notFount,
    element: <NotFound />
  }
])

export default routes
