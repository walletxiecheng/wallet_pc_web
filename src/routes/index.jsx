import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '@/layouts/BaseLayout'
import ErrorPage from '@/pages/ErrorPage'
import Index from '@/pages/Index'
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
      }
    ]
  }
])

export default routes
