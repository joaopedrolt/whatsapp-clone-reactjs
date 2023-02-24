import styles from './Header.module.scss'

import StatusButton from 'src/assets/icons/status-icon.jsx';
import ChatButton from 'src/assets/icons/chat-icon.jsx';
import MenuButton from 'src/assets/icons/menu-header-icon.jsx';

function Header() {
    return (
        <header className={styles['header-sidebar']}>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/321302644_734154424727929_6455365195276254063_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdR3bC_p0_r4LuJ4btzLd0IqsNutB6LEkzzHGCK2lErePA&oe=63FAC69B"
                alt="" className={styles.avatar} />
            <div className={styles.icons}>
                <div className={styles.icon}>
                    <StatusButton fill={'#54656f'} />
                </div>
                <div className={styles.icon}>
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