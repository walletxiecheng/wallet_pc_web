import { RouterProvider } from 'react-router-dom'
import style from '@/App.module.less'
import routes from '@/routes'
function App() {
  return (
    <div className={style.appContainer}>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
export default App
