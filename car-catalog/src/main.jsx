import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/style/global.css'
import Home from './assets/components/screens/home/Home.jsx'
import AuthProvider from './assets/providers/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <Home />
    </AuthProvider>
  </React.StrictMode>,
)
