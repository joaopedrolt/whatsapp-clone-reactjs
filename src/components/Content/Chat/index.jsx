import styles from './Chat.module.scss'

import Header from './Header';
import ChatBody from './ChatBody';
import Footer from './Footer';

function Chat({ activeChat, user }) {
    return (
        <div className={styles.chat}>
            <Header activeChat={activeChat} />
            <ChatBody user={user} />
            <Footer />
        </div>
    )
}

export default Chat;