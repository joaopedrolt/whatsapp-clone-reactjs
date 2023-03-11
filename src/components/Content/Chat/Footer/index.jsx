import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import classNames from 'classnames';

import styles from './Footer.module.scss'
import './EmojiPickerStyle.scss'

import EmojiCloseButton from 'src/assets/icons/emojipicker-close-icon.jsx';
import EmojiButton from 'src/assets/icons/emoji-icon.jsx';
import ClipButton from 'src/assets/icons/clip-icon.jsx';

import Input from './Input';

function Footer({ user, activeChat, users }) {
    const [emojiPickerActive, setEmojiPickerStatus] = useState(false);
    const [emoji, setEmoji] = useState({ emoji: '', key: 0 });

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
        <>
            <EmojiPicker onEmojiClick={HandleEmojiClick} width={'100%'} height={emojiPickerActive ? 320 : 0} searchDisabled skinTonesDisabled previewConfig={{ showPreview: false }} />
            <footer className={styles['chat-header']}>
                <footer className={styles['chat-inputbar']}>
                    <div className={classNames(styles['emoji-clip-buttons'], { [styles['active']]: emojiPickerActive })}>
                        <EmojiCloseButton className={styles['emojipicker-close-button']} onClick={HandleEmojiCloseButtonClick} />
                        <EmojiButton className={styles['emoji-button']} onClick={HandleEmojiButtonClick} />
                        <ClipButton className={styles['clip-button']} />
                    </div>
                    <Input users={users} closeEmokiPicker={HandleEmojiCloseButtonClick} activeChat={activeChat} user={user} emoji={emoji} />
                </footer>
            </footer>
        </>
    )
}

export default Footer;