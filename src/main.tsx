import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { AuthProvider } from './contexts/AuthContext.tsx'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
      <AuthProvider><App /></AuthProvider>
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}
