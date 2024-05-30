import { create } from 'zustand'

export const useUserStore = create((set) => ({
  userInfo: {
    name: 'zhangsan',
    age: 18
  },
  changeInfo: (newInfo) => set(() => ({ userInfo: newInfo })),
  removeUserInfo: () => set({ userInfo: {} })
}))
