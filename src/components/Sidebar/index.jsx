import styles from './Sidebar.module.scss'

import Header from './Header/index';
import Search from './Search/index';
import ChatList from './ChatList';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Header />
      <Search />
      <ChatList />
    </div>
  )
}

export default Sidebar;