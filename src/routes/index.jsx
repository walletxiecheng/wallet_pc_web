import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '@/layouts/BaseLayout'
import ErrorPage from '@/pages/ErrorPage'
import { URLS } from './urls'
export const routes = createBrowserRouter([
  {
    path: URLS.root,
    element: <BaseLayout />,
    errorElement: <ErrorPage />
  }
])

export default routes
