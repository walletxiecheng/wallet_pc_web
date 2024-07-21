import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@/index.css'
import '@/i18n/i18n.js'
import '@/assets/css/theme.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
