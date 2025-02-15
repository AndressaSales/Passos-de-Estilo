import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Shop from './shop/Shop.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shop>
      <App/>
    </Shop>
  </StrictMode>,
)
