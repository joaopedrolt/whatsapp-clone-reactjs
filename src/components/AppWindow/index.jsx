import styles from './AppWindow.module.scss'

function AppWindow({ children }) {
  return (
    <div className={styles['app-window']}>
      {children}
    </div>
  )
}

export default AppWindow;