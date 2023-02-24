import styles from './AppWindow.module.scss'

import Sidebar from 'src/components/Sidebar'
import Content from 'src/components/Content'

import Intro from 'src/components/Content/Intro/index.jsx'
import Chat from 'src/components/Content/Chat/index.jsx'

function AppWindow() {
  return (
    <div className={styles['app-window']}>
      <Sidebar />
      <Content>
        <Chat />
      </Content>
    </div>
  )
}

export default AppWindow;