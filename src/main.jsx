import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import firebaseConfig from './firebaseConfig.js'
import ContextApi from './ContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApi />
  </StrictMode>,
)
