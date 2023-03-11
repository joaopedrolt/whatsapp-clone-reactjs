import { useEffect, useState } from 'react';
import styles from './ChatBody.module.scss'

import Api from 'src/api';

import classNames from 'classnames';

function ChatBody({ user, activeChat, setUsers }) {
    const [messagesList, setMessagesList] = useState([]);

    useEffect(() => {
        let unsub = Api.onChatMessagesUpdate(activeChat.chatId, setMessagesList, setUsers);
        return unsub;
    }, [activeChat]);

    useEffect(() => {
        Api.updateNotificationsStatus(user.id, activeChat.chatId);
    }, [messagesList]);

    const HandleTimeFormated = (date) => {
        if (date != null || undefined) {
            let d = new Date(date.seconds * 1000);
            let hours = d.getHours();
            let minutes = d.getMinutes();
            hours = hours < 10 ? '0' + hours : hours;
            return (`${hours}:${minutes}`);
        } else {
            return '';
        }
    }

    return (
        <div className={styles['chat-body']}>
            <div className={styles['messages-container']}>
                {messagesList.map((message, key) => {
                    let time = HandleTimeFormated(message.sentDate);
                    let type = message.type;
                    let formattedDate = '';

                    if (type == 'timeStamp') {
                        let dateString = message.sentDate.toDate();
                        let date = new Date(dateString);
                        formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                    }

                    return (
                        <div key={key} className={`${styles[`message-row`]} ${message.authorId === user.id ?
                            styles.out : type == 'timeStamp' ? styles.timestamp : styles.in}`}>

                            {type == 'text' ?
                                <div className={styles['message-box-container']}>
                                    <div className={styles['message-box']}>
                                        <span className={styles.message}>
                                            {message.body}
                                            <span className={styles['time-filler']}>______</span>
                                        </span>
                                        <span className={styles.time}>{time}</span>
                                    </div>
                                </div> :
                                <div className={classNames(styles['timestamp-container'])}>
                                    <span>{formattedDate}</span>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ChatBody;