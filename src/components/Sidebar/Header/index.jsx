import styles from './Header.module.scss'

import ChatButton from 'src/assets/icons/chat-icon.jsx';
import MenuButton from 'src/assets/icons/menu-header-icon.jsx';

function Header({ setNewchatMenuStatus, user }) {

    const HandlNewchatClick = () => {
        setNewchatMenuStatus(true);
    }

    return (
        <header className={styles['header-sidebar']}>
            <img src={user.avatar}
                alt="" className={styles.avatar} />
            <div className={styles.icons}>
                <div className={styles.icon} onClick={HandlNewchatClick}>
                    <ChatButton fill={'#54656f'} />
                </div>
                <div className={styles.icon}>
                    <MenuButton fill={'#54656f'} />
                </div>
            </div>
        </header>
    )
}

export default Header;