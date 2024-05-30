import { useUserStore } from '@/store/use'
// 首页组件
export default function Index() {
  const newInfo = {
    name: 'lisi',
    age: 18
  }
  const { userInfo, changeInfo, removeUserInfo } = useUserStore((state) => ({
    userInfo: state.userInfo,
    changeInfo: state.changeInfo,
    removeUserInfo: state.removeUserInfo
  }))
  return (
    <div>
      <h3>{userInfo.name}</h3>

      <button
        onClick={() => {
          changeInfo(newInfo)
        }}
      >
        重置
      </button>

      <button
        onClick={() => {
          removeUserInfo()
        }}
      >
        重置
      </button>
    </div>
  )
}
