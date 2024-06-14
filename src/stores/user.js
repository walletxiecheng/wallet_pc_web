import { create } from 'zustand'
// import { devtools, persist } from 'zustand/middleware'

// export const useUserStore = create(
//   devtools(
//     persist((set, get) => ({
//       userInfo: { id: '1', name: 'zs' },
//       setUserInfo: (newInfo) => {
//         set(() => ({ userInfo: newInfo }))
//       }, //设置用户信息
//       getUserInfo: () => {
//         return get().userInfo
//       }
//     }))
//   )
// )
export const useUserStore = create((set, get) => ({
  userInfo: { id: '1', name: 'zs' },
  token: '',
  setUserInfo: (newInfo) => set(() => ({ userInfo: newInfo })), //设置用户信息
  setToken: (newToken) => set(() => ({ token: newToken })), //设置token
  removeUserInfo: () => set({ userInfo: {} }), //删除用户信息
  getUserInfo: () => {
    return get().userInfo
  }
}))
