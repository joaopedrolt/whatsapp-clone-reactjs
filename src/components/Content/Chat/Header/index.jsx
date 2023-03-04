import styles from './Header.module.scss'

import SearchButton from 'src/assets/icons/search-chat-icon.jsx';
import MenuButton from 'src/assets/icons/menu-chat-icon.jsx';

function Header({ activeChat }) {
    return (
        <header className={styles['chat-header']}>
            <div className={styles.avatar}>
                <img src={activeChat.image} alt="" />
            </div>
            <div className={styles.user}>
                <span className={styles.name}>{activeChat.title}</span>
            </div>
        </header>
    )
}

export default Header;