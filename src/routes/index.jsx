import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '@/layouts/BaseLayout'
import ErrorPage from '@/pages/ErrorPage'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import { URLS } from './urls'

export const routes = createBrowserRouter([
  {
    path: URLS.root,
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: URLS.index,
        element: <Index />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.login,
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        path: URLS.register,
        element: <Register />,
        errorElement: <ErrorPage />
      }
    ]
  }
])

export default routes
