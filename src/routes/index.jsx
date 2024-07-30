import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '@/layouts/BaseLayout'
import ErrorPage from '@/pages/ErrorPage'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import WalletAccount from '@/pages/WalletAccount'
import CarryCoin from '@/pages/WalletAccount/CarryCoin'
import Personal from '@/pages/Personal'
import { URLS } from './urls'
import Record from '@/pages/WalletAccount/Record'
import Reset from '@/pages/Reset'

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
  },
  {
    path: URLS.login,
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: URLS.reset,
    element: <Reset />,
    errorElement: <ErrorPage />
  },
  {
    path: URLS.register,
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: URLS.walletAccount,
    element: <WalletAccount />,
    errorElement: <ErrorPage />
  },
  {
    path: URLS.carryCoin,
    element: <CarryCoin />,
    errorElement: <ErrorPage />
  },
  {
    path: URLS.walletRecord,
    element: <Record />,
    errorElement: <ErrorPage />
  },
  {
    path: URLS.personal,
    element: <Personal />,
    errorElement: <ErrorPage />
  }
])

export default routes
