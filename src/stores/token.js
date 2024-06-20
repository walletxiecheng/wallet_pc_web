import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { LOCAL_STORAGE_KEYS } from '@/common/localStorageKeys'

// token
const store = (set, get) => ({
  token: null,

  getToken: () => get().token || null,

  setToken: (token) => set(() => ({ token })),

  removeToken: () => set(() => ({ token: null }))
})

export const useTokenStore = create(
  persist(store, { name: LOCAL_STORAGE_KEYS.TOKEN })
)
