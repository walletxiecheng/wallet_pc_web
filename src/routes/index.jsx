import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '@/Layouts/BaseLayout'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import ErrorPage from '@/pages/ErrorPage'
import NotFound from '@/pages/NotFound'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/index',
        element: <Index></Index>
      }
    ],
    errorElement: ErrorPage
  },
  {
    path: '/index',
    element: <Index />,
    errorElement: ErrorPage
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: ErrorPage
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default routes
