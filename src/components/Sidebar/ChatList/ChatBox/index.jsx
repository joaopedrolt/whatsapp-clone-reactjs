import { useEffect, useState } from 'react';

import styles from './ChatBox.module.scss'

import classNames from 'classnames';

import ArrowDown from 'src/assets/icons/arrow-down-chatbox.jsx';

function ChatBox({ chatBox, chatId, chatboxClick, index, latestChatList }) {
    const [isLoading, setLoading] = useState(true);

    const HandleTimeFormated = (date) => {
        if (date != null || undefined) {
            const d = date.toDate();
            let now = new Date();
            if (d.getDate() == now.getDate() && d.getMonth() == now.getMonth() && d.getFullYear() == now.getFullYear()) {
                let hours = d.getHours();
                let minutes = d.getMinutes();
                if (hours < 10) {
                    hours = `${0}${hours}`
                }
                if (minutes < 10) {
                    minutes = `${0}${minutes}`
                }
                return (`${hours}:${minutes}`);
            }
            else {
                return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
            }
        } else {
            return '';
        }
    }

    const HandleLoading = () => {
        setLoading(false);
    }

    useEffect(() => {
        if (!isLoading) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 500)
        }
    }, [latestChatList]);

    const time = HandleTimeFormated(chatBox.lastMessageDate);

    return (
        <div onClick={() => chatboxClick(index)} onLoad={HandleLoading} className={classNames(styles['chat-box'],
            { [styles.loading]: isLoading }, { [styles.active]: chatId == chatBox.chatId })}>
            <div className={styles.image}>
                <img src={chatBox.image} className={styles.loading}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "https://www.w3schools.com/howto/img_avatar.png";
                    }}
                />
            </div>
            <div className={classNames(styles.content, { [styles.active]: chatBox.unreadMessage })}>
                <div className={styles['top-row']}>
                    <h3>{chatBox.title}</h3>
                    <p>{time}</p>
                </div>
                {chatBox.lastMessage ? <>
                    <div className={styles['bottom-row']}>
                        {chatBox.lastMessage == '&#x1F3A8 Imagem' ?
                            <span dangerouslySetInnerHTML={{ __html: chatBox.lastMessage }}></span>
                            : <span>{chatBox.lastMessage}</span>
                        }
                        <div className={styles.icons}>
                            <span className={styles.notifications}>
                                <p>!</p>
                            </span>
                            <ArrowDown className={styles['arrow-down-icon']} />
                        </div>
                    </div>
                </> : <></>
                }
            </div>
        </div>
    )
}

export default ChatBox;