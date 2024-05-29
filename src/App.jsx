import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import {
  getSupportChainList,
  uploadSupportChain,
  deleteSupportChain,
  updateSupportChain
} from '@/service/coin'
import routes from '@/routes'

function AppRoutes() {
  return useRoutes(routes)
}
function App() {
  const add = async () => {
    const headers = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const req = {
      id: 6,
      name: 'test',
      description: 'test',
      website:
        'http://18.143.170.163:9996/swagger/index.html#/%E4%BB%A3%E5%B8%81%E7%AE%A1%E7%90%86%E7%9B%B8%E5%85%B3%E6%8E%A5%E5%8F%A3/post_back_appPageManagement_coins_uploadSupportChain',
      types: 'Bitcoin',
      path: "m/44'/0'/0'/0/0",
      network: 'MAINNET',
      status: 3,
      file: ''
    }
    const res = await uploadSupportChain(req, headers)
    console.log(res)
  }

  const put = async () => {
    const req = {
      id: 7,
      name: 'dddd',
      description: 'ddd',
      website:
        'http://18.143.170.163:9996/swagger/index.html#/%E4%BB%A3%E5%B8%81%E7%AE%A1%E7%90%86%E7%9B%B8%E5%85%B3%E6%8E%A5%E5%8F%A3/post_back_appPageManagement_coins_uploadSupportChain',
      types: 'Bitcoin',
      path: "m/44'/0'/0'/0/0",
      network: 'MAINNET',
      status: 3,
      file: ''
    }
    const headers = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const res = await updateSupportChain(req, headers)
    console.log(res)
  }

  const del = async () => {
    const req = { id: 7 }
    const res = await deleteSupportChain(req)
    console.log(res)
  }
  const query = async () => {
    const req = { page: 1, size: 10 }
    const res = await getSupportChainList(req)
    console.log(res)
  }
  return (
    <Router>
      <AppRoutes />
      {/* <div>
        <button onClick={add}>新增</button>
        <button onClick={del}>删除</button>
        <button onClick={put}>修改</button>
        <button onClick={query}>查询</button>
        <input type="text" />
      </div> */}
    </Router>
  )
}

export default App
