import { useState } from 'react';

import styles from './Chat.module.scss'
import './EmojiPickerStyle.scss'

import SearchButton from 'src/assets/icons/search-chat-icon.jsx';
import MenuButton from 'src/assets/icons/menu-chat-icon.jsx';
import EmojiCloseButton from 'src/assets/icons/emojipicker-close-icon.jsx';
import EmojiButton from 'src/assets/icons/emoji-icon.jsx';
import ClipButton from 'src/assets/icons/clip-icon.jsx';

import Input from './Input';

import classNames from 'classnames';
import EmojiPicker from 'emoji-picker-react';

function Chat({ activeChat, user }) {

    const [emojiPickerActive, setEmojiPickerStatus] = useState(false);
    const [emoji, setEmoji] = useState({ emoji: '', key: 0 });
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

    const HandleEmojiClick = (emojiObject) => {
        setTimeout(() => {
            let key;
            do {
                key = Math.random();
            } while (key == emoji.key);
            setEmoji({ emoji: emojiObject.emoji, key });
        }, 20)
    }

    const HandleEmojiButtonClick = () => {
        setEmojiPickerStatus(true);
    }

    const HandleEmojiCloseButtonClick = () => {
        setEmojiPickerStatus(false);
    }

    return (
        <div className={styles.chat}>
            <header className={styles['chat-header']}>
                <div className={styles.avatar}>
                    <img src={activeChat.image} alt="" />
                </div>
                <div className={styles.user}>
                    <span className={styles.name}>{activeChat.title}</span>
                </div>
                <div className={styles.icons}>
                    <SearchButton className={styles['search-button']} />
                    <MenuButton className={styles['menu-button']} />
                </div>
            </header>
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
            <EmojiPicker onEmojiClick={HandleEmojiClick} width={'100%'} height={emojiPickerActive ? 320 : 0} searchDisabled skinTonesDisabled previewConfig={{ showPreview: false }} />
            <footer className={styles['chat-inputbar']}>
                <div className={classNames(styles['emoji-clip-buttons'], { [styles['active']]: emojiPickerActive })}>
                    <EmojiCloseButton className={styles['emojipicker-close-button']} onClick={HandleEmojiCloseButtonClick} />
                    <EmojiButton className={styles['emoji-button']} onClick={HandleEmojiButtonClick} />
                    <ClipButton className={styles['clip-button']} />
                </div>
                <Input emoji={emoji} />
            </footer>
        </div>
    )
}

export default Chat;