import React from 'react'
import ReactDOM from 'react-dom/client' //ReactDOM is used to render React components into the DOM
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx' //AppContextProvider is a context provider for managing global state

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
)
