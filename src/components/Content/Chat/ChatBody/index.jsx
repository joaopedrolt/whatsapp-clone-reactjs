import { useEffect, useState } from 'react';
import styles from './ChatBody.module.scss'

import Api from 'src/api';
import ImgMessageType from './ImageMessageType';

import classNames from 'classnames';
import { ClipLoader } from 'react-spinners';

function ChatBody({ user, activeChat, setUsers }) {
    const [messagesList, setMessagesList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let unsub = Api.onChatMessagesUpdate(activeChat.chatId, setMessagesList, setUsers);
        return unsub;
    }, [activeChat]);

    useEffect(() => {
        const isNewChat = async () => { await Api.newMessageStatus(activeChat.chatId, setLoading, isLoading, messagesList.length); }
        const updateNotificationsStatus = async () => { await Api.updateNotificationsStatus(user.id, activeChat.chatId); }
        updateNotificationsStatus();
        isNewChat();
    }, [messagesList]);

    const HandleTimeFormated = (date) => {
        if (date != null || undefined) {
            const d = date.toDate();
            let hours = d.getHours();
            let minutes = d.getMinutes();
            if (hours < 10) {
                hours = `${0}${hours}`
            }
            if (minutes < 10) {
                minutes = `${0}${minutes}`
            }
            return (`${hours}:${minutes}`);
        } else {
            return '';
        }
    }

    return (
        <div className={classNames(styles['chat-body'], { [styles.loading]: isLoading })}>
            {isLoading &&
                <ClipLoader
                    color={'#18af8f'}
                    loading={true}
                    size={70}
                />
            }
            <div className={classNames(styles['messages-container'], { [styles.loading]: isLoading })}>
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
                                type == 'timeStamp' ?
                                    <div className={classNames(styles['timestamp-container'])}>
                                        <span>{formattedDate}</span>
                                    </div> :
                                    <div className={styles['message-box-container']}>
                                        <div className={`${styles['message-box']} ${styles.image}`}>
                                            <span className={styles.message}>
                                                <ImgMessageType src={message.body} imgClass={styles.img} />
                                            </span>
                                            <span className={styles.time}>{time}</span>
                                        </div>
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