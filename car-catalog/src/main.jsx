import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/style/global.css'
import Router from './assets/components/ui/Router'
import AuthProvider from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <Router/>
    </AuthProvider>
    
  </React.StrictMode>,
)
