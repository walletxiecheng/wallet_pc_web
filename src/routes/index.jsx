import { createBrowserRouter } from 'react-router-dom'
// import Layout from '@/pages/Layout'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import ErrorPage from '@/pages/ErrorPage'
import NotFound from '@/pages/NotFound'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
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
