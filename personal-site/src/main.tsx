import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FinalLandingPage from './LandingPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FinalLandingPage/>
  </StrictMode>,
)
