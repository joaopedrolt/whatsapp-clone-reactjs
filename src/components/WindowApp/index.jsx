import styles from './AppWindow.module.scss'

function AppWindow() {
  return (
    <div className={styles['app-window']}>
      <div className={styles.sidebar}>
        teste
      </div>
      <div className={styles.content}>
        teste
      </div>
    </div>
  )
}

export default AppWindow;