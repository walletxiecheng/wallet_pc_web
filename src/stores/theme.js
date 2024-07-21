import { create } from 'zustand'
import { LOCAL_STORAGE_KEYS } from '@/common/localStorageKeys'
import { persist } from 'zustand/middleware'

const DARK = 'dark'
const LIGHT = 'light'

const DEFAULT_THEME = DARK

const setTheme2HtmlData = (theme) => {
  document.querySelector('html').dataset.theme = theme || DEFAULT_THEME
}

const store = (set, get) => ({
  theme: DEFAULT_THEME,

  getTheme: () => get().theme || DEFAULT_THEME,

  setTheme: (theme) =>
    set(() => {
      setTheme2HtmlData(theme)

      return { theme }
    }),

  toggleTheme: () =>
    set((state) => {
      const theme = state.theme === LIGHT ? DARK : LIGHT
      setTheme2HtmlData(theme)

      return { theme }
    })
})

export const useThemeStore = create(
  persist(store, { name: LOCAL_STORAGE_KEYS.THEME })
)

// 初始化useThemeStore时，需要手动执行一下setTheme2HtmlData使得theme生效
setTheme2HtmlData(useThemeStore?.getState()?.theme)
