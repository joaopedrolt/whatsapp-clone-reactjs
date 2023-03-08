import styles from './AppContainer.module.scss'
import AppWindow from '../AppWindow/index'

function AppContainer() {
  return (
    <div className={styles['app-container']}>
      <AppWindow />
    </div>
  )
}

export default AppContainer;