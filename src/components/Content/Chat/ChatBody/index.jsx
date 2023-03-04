import { useState } from 'react';
import styles from './ChatBody.module.scss'

function ChatBody({ user }) {
    const [messagesList, setMessagesList] = useState([
        { authorId: 1234, body: 'Mandei', sentTime: '17:23' },
        { authorId: 12345, body: 'Chegou', sentTime: '17:23' },
        { authorId: 1234, body: 'Mandei', sentTime: '17:23' },
        { authorId: 12345, body: 'Chegou', sentTime: '17:23' },
        { authorId: 1234, body: 'Mandei', sentTime: '17:23' },
        { authorId: 12345, body: 'Chegou', sentTime: '17:23' },
        { authorId: 1234, body: 'Mandei', sentTime: '17:23' },
        { authorId: 12345, body: 'Chegou', sentTime: '17:23' },
        { authorId: 1234, body: 'Mandei', sentTime: '17:23' },
        { authorId: 12345, body: 'Chegou', sentTime: '17:23' },
        { authorId: 1234, body: 'Mandei', sentTime: '17:23' },
        { authorId: 12345, body: 'Chegou', sentTime: '17:23' },
        { authorId: 1234, body: 'Mandei', sentTime: '17:23' },
        { authorId: 12345, body: 'Chegou', sentTime: '17:23' },
        { authorId: 1234, body: 'Mandei', sentTime: '17:23' },
        { authorId: 12345, body: 'Chegou', sentTime: '17:23' },
        { authorId: 1234, body: 'Mandei', sentTime: '17:23' },
        { authorId: 12345, body: 'Chegou', sentTime: '17:23' },
        { authorId: 1234, body: 'Mandei', sentTime: '17:23' },
        { authorId: 12345, body: 'Chegou', sentTime: '17:23' },
        { authorId: 1234, body: 'Mandei', sentTime: '17:23' },
        { authorId: 12345, body: 'Chegou', sentTime: '17:23' },
        { authorId: 1234, body: 'Mandei', sentTime: '17:23' },
        { authorId: 12345, body: 'Chegou', sentTime: '17:23' }
    ]);

    return (
        <div className={styles['chat-body']}>
        {messagesList.map((message, key) => (
            <div key={key} className={`${styles[`message-row`]} ${message.authorId === user.id ? styles.out : styles.in}`}>
                <div className={styles['message-box-container']}>
                    <div className={styles['message-box']}>
                        <span className={styles.message}>
                            {message.body}
                            <span className={styles['time-filler']}>______</span>
                        </span>
                        <span className={styles.time}>{message.sentTime}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
}

export default ChatBody;