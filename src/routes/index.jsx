import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '@/Layouts/BaseLayout'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import ErrorPage from '@/pages/ErrorPage'
import NotFound from '@/pages/NotFound'

export const URlS = {
  home: '/',
  index: '/index',
  login: '/login',
  smsManager: '/systems/sms',
  notFount: '*'
}

const routes = createBrowserRouter([
  {
    path: URlS.home,
    element: <BaseLayout />,
    errorElement: ErrorPage
  },
  {
    path: URlS.index,
    element: <Index />,
    errorElement: ErrorPage
  },
  {
    path: URlS.login,
    element: <Login />,
    errorElement: ErrorPage
  },
  {
    path: URlS.smsManager,
    element: <div>smsManager</div>,
    errorElement: ErrorPage
  },
  {
    path: URlS.notFount,
    element: <NotFound />
  }
])
console.log(routes)
export default routes
