import { useState } from 'react';

import styles from './Header.module.scss'

import ChatButton from 'src/assets/icons/chat-icon.jsx';
import MenuButton from 'src/assets/icons/menu-header-icon.jsx';
import classNames from 'classnames';

function Header({ setNewchatMenuStatus, user, logout }) {
    const [logoutMenu, setLogoutMenuStatus] = useState(false);

    const HandleNewchatClick = () => {
        setNewchatMenuStatus(true);
    }

    const HandleLogoutMenuClick = () => {
        setLogoutMenuStatus(logoutMenu => !logoutMenu);
    }

    const HandleLogoutClick = () =>{
        logout();
    }

    return (
        <header className={styles['header-sidebar']}>
            <img src={user.avatar}
                alt="" className={`${styles.avatar} ${styles.loading}`}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "https://www.w3schools.com/howto/img_avatar.png";
                }}
            />
            <div className={styles.icons}>
                <div className={styles.icon} onClick={HandleNewchatClick}>
                    <ChatButton fill={'#54656f'} />
                </div>
                <div className={classNames(styles.icon, { [styles.active]: logoutMenu })} onClick={HandleLogoutMenuClick}>
                    <MenuButton fill={'#54656f'} />
                </div>
            </div>
            <div className={classNames(styles['logout-menu'], { [styles.active]: logoutMenu })}>
                <ul>
                    <li onClick={HandleLogoutClick}>Desconectar</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;