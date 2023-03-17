import { useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import classNames from 'classnames';

import styles from './Footer.module.scss'
import './EmojiPickerStyle.scss'

import Api from 'src/api';

import EmojiCloseButton from 'src/assets/icons/emojipicker-close-icon.jsx';
import EmojiButton from 'src/assets/icons/emoji-icon.jsx';
import ClipButton from 'src/assets/icons/clip-icon.jsx';
import ImgInputFile from 'src/assets/icons/img-file-input-icon.jsx';

import Input from './Input';

function Footer({ user, activeChat, users }) {
    const [emojiPickerActive, setEmojiPickerStatus] = useState(false);
    const [inputImgActive, setInputImgActiveStatus] = useState(false);
    const [fileDialogOpened, setfileDialogStatus] = useState(false);
    const [emoji, setEmoji] = useState({ emoji: '', key: 0 });

    const buttonSubmitRef = useRef();
    const fileInputRef = useRef();

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

        if (inputImgActive) {
            setInputImgActiveStatus(false);
        }
        setEmojiPickerStatus(true);
    }

    const HandleEmojiCloseButtonClick = () => {
        setEmojiPickerStatus(false);
    }

    const HandleClipButtonClick = () => {
        if (emojiPickerActive) {
            setEmojiPickerStatus(false);
        }
        setInputImgActiveStatus(inputImgActive => !inputImgActive);
        if (!inputImgActive) {
            fileInputRef.current.focus();
        }
    }

    const HandleInputImgBlur = () => {
        setTimeout(() => {
            if (inputImgActive && !fileDialogOpened) {
                setInputImgActiveStatus(false);
            }
        }, 130);
    }

    const HandleInputImgClick = () => {
        setfileDialogStatus(true);
        fileInputRef.current.focus();
        setTimeout(() => {
            setfileDialogStatus(false);
        }, 500);
    }

    const HandleFormSubmit = (e) => {
        e.preventDefault();
        const file = e.target[0]?.files[0];
        Api.sendImageMessage(file, activeChat.chatId, user.id, users);
    }

    const HandleInputImgChange = (e) => {
        const file = e.target.files[0];

        if (e.target.files.length <= 1) {
            if (file) {
                if (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png") {
                    const fileSizeInMB = file.size / (1024 * 1024);
                    if (fileSizeInMB <= 3) {
                        buttonSubmitRef.current.click();
                        HandleInputImgBlur();
                    } else {
                        alert('Por favor insira um arquivo menor que 1MB.');
                        fileInputRef.current.value = null;
                    }
                } else {
                    alert('Formato não suportado!');
                    fileInputRef.current.value = null;
                }
            } else {
                alert('Arquivo inválido!');
                fileInputRef.current.value = null;
                HandleInputImgBlur();
            }
        } else {
            alert('Apenas um arquivo por vez!');
            fileInputRef.current.value = null;
        }
    }

    return (
        <>
            <EmojiPicker onEmojiClick={HandleEmojiClick} width={'100%'} height={emojiPickerActive ? 320 : 0} searchDisabled skinTonesDisabled previewConfig={{ showPreview: false }} />
            <footer className={styles['chat-footer']} >
                <div className={styles['chat-inputbar']}>
                    <form onSubmit={HandleFormSubmit} className={classNames(styles['inputs-container'], { [styles['active']]: !emojiPickerActive && inputImgActive })}>
                        <label>
                            <ImgInputFile className={styles['input-file-button']} />
                            <input accept="image/png, image/jpeg, image/jpg" multiple={false} type="file" name='file' ref={fileInputRef} onClick={HandleInputImgClick} onBlur={HandleInputImgBlur} onChange={HandleInputImgChange} />
                        </label>
                        <button style={{ display: 'none' }} ref={buttonSubmitRef} type='submit'></button>
                    </form>
                    <div className={classNames(styles['emoji-clip-buttons'], { [styles['active']]: emojiPickerActive })}>
                        <EmojiCloseButton className={styles['emojipicker-close-button']} onClick={HandleEmojiCloseButtonClick} />
                        <EmojiButton className={styles['emoji-button']} onClick={HandleEmojiButtonClick} />
                        <ClipButton onClick={HandleClipButtonClick} className={classNames(styles['clip-button'], { [styles.active]: inputImgActive })} />
                    </div>
                    <Input users={users} closeEmokiPicker={HandleEmojiCloseButtonClick} activeChat={activeChat} user={user} emoji={emoji} />
                </div>
            </footer>
        </>
    )
}

export default Footer;