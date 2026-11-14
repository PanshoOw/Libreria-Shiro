import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

async function iniciarAplicacion() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser.js')
    await worker.start()
  }

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  )
}

iniciarAplicacion()