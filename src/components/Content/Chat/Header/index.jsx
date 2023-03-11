import styles from './Header.module.scss'
import { useTransition, animated } from 'react-spring';

function Header({ activeChat }) {
    const transition = useTransition(activeChat, {
        from: { opacity: 0 },
        enter: { opacity: 1 }
    });

    return (
        <header className={styles['chat-header']}>
            <div className={styles.avatar}>
                {transition((style) => <animated.img style={style} src={activeChat.image} alt=""
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "https://www.w3schools.com/howto/img_avatar.png";
                    }}
                />)}
            </div>
            <div className={styles.user}>
                <span className={styles.name}>{activeChat.title}</span>
            </div>
        </header>
    )
}

export default Header;