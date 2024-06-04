import { create } from 'zustand'

export const useUserStore = create((set) => ({
  userInfo: {},
  changeInfo: (newInfo) => set(() => ({ userInfo: newInfo })),
  removeUserInfo: () => set({ userInfo: {} })
}))
