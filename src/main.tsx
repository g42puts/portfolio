import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "main.css"

const scrictMode = false;

if (scrictMode) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
  )
}
