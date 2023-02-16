import styles from './Sidebar.module.scss'

import Header from './Header/index';
import Search from './Search/index';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Header />
      <Search />
    </div>
  )
}

export default Sidebar;