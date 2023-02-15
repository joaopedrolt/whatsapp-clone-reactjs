import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContainer from './components/AppContainer/index'
import WindowApp from './components/WindowApp/index'
import './index.scss'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <AppContainer>
      <WindowApp />
    </AppContainer>
  </React.StrictMode>,
)