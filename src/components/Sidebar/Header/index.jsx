import styles from './Header.module.scss'

import StatusIcon from 'src/assets/icons/status-icon.jsx';
import ChatIcon from 'src/assets/icons/chat-icon.jsx';
import MenuIcon from 'src/assets/icons/menu-icon.jsx';

function Header() {
    return (
        <header>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/321302644_734154424727929_6455365195276254063_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdR3bC_p0_r4LuJ4btzLd0IqsNutB6LEkzzHGCK2lErePA&oe=63FAC69B"
                alt="" className={styles.avatar} />
            <div className={styles.icons}>
                <div className={styles.icon}>
                    <StatusIcon fill={'#54656f'} />
                </div>
                <div className={styles.icon}>
                    <ChatIcon fill={'#54656f'} />
                </div>
                <div className={styles.icon}>
                    <MenuIcon fill={'#54656f'} />
                </div>
            </div>
        </header>
    )
}

export default Header;