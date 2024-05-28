import { getCoinList } from './service/coinAdmin'
// import './App.css'

function App() {
  const test = async () => {
    const req = { page: 1, size: 10 }
    const data = await getCoinList(req)
    console.log(data)
  }
  return (
    <>
      <div>
        <button onClick={test}>测试</button>
      </div>
    </>
  )
}

export default App
