import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './Routes/Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>

<App />
<RouterProvider router={routers}>
</RouterProvider>
</AuthProvider>
  </React.StrictMode>,
)
