import { createBrowserRouter } from 'react-router-dom'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default routes
