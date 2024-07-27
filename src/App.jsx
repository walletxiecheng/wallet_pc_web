import { RouterProvider } from 'react-router-dom'
import style from '@/App.module.less'
import routes from '@/routes'
import { getHealth } from './service'

export default function App() {
  const test = async () => {
    getHealth()
  }
  test()
  return (
    <div className={style.appContainer}>
      <RouterProvider router={routes} />
    </div>
  )
}
