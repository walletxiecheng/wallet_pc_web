import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import zh from './locales/zh.json'
const resources = {
  // en:英文;fr:法文;zh:中文
  en: en,
  zh: zh
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
