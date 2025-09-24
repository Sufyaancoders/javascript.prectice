import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import themes from './theme.ts'
import { CssBaseline } from '@mui/material'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
