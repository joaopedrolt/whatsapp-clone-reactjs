import React from 'react'
import ReactDOM from 'react-dom/client'

import AppContainer from './components/AppContainer/index'
import AppWindow from './components/AppWindow/index'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

import './index.scss'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <AppContainer>
      <AppWindow>
        <Sidebar />
        <Content />
      </AppWindow>
    </AppContainer>
  </React.StrictMode>,
)