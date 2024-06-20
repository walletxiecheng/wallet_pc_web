import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { LOCAL_STORAGE_KEYS } from '@/common/localStorageKeys'

const store = (set, get) => ({
  userInfo: null,

  getUserInfo: () => get().userInfo || null,

  setUserInfo: (userInfo) => set(() => ({ userInfo })), // 设置用户信息

  removeUserInfo: () => set({ userInfo: null }) // 删除用户信息
})

export const useUserStore = create(
  persist(store, { name: LOCAL_STORAGE_KEYS.USER })
)
