import { useState } from 'react';
import styles from './Chat.module.scss'

import Header from './Header';
import ChatBody from './ChatBody';
import Footer from './Footer';

function Chat({ activeChat, user }) {
    const [users, setUsers] = useState([]);

    return (
        <div className={styles.chat}>
            <Header activeChat={activeChat} />
            <ChatBody setUsers={setUsers} activeChat={activeChat} user={user} />
            <Footer users={users} activeChat={activeChat} user={user} />
        </div>
    )
}

export default Chat;