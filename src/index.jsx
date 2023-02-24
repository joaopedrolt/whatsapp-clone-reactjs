import React from 'react'
import ReactDOM from 'react-dom/client'

import AppContainer from './components/AppContainer/index'
import AppWindow from './components/AppWindow/index'

import './index.scss'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <AppContainer>
      <AppWindow />
    </AppContainer>
  </React.StrictMode>,
)