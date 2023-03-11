import { useState, useRef, useEffect } from 'react';

import styles from './Input.module.scss'

import MicrophoneButton from 'src/assets/icons/microphone-icon.jsx';
import SendButton from 'src/assets/icons/send-icon.jsx';

import Api from 'src/api';

function Input({ closeEmokiPicker, emoji, user, activeChat, users }) {

    const [inputValue, setInputValue] = useState('');
    const [listening, setListening] = useState(false);
    const inputRef = useRef();

    let recognition = null;
    let SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
        recognition.lang = 'pt-BR'
    }

    useEffect(() => {
        setInputValue(inputValue + emoji.emoji);
        inputRef.current.innerHTML = inputValue + emoji.emoji;
    }, [emoji.key]);

    const HandleInputChange = (e) => {
        const maxStringLength = 500;

        if (inputRef.current.children.length > 0) {
            inputRef.current.innerHTML = e.currentTarget.textContent;
        }

        if (inputRef.current.innerHTML.length >= maxStringLength) {
            const insideString = inputRef.current.innerHTML;
            const trimmedString = insideString.substring(0, maxStringLength);
            inputRef.current.innerHTML = trimmedString;
            inputRef.current.blur();
        }

        setInputValue(e.currentTarget.textContent);
    }

    const HandleMicClick = () => {
        if (recognition !== null) {

            recognition.onstart = () => {
                setListening(true);
            }

            recognition.onend = () => {
                setListening(false);
            }

            recognition.onresult = (e) => {
                setInputValue(e.results[0][0].transcript);
                inputRef.current.innerHTML = e.results[0][0].transcript;
            }

            recognition.start();
        };
    }

    const HandleInputKeyUp = (e) => {
        if (e.keyCode == 13) {
            HandleSendClick();
        }
    }

    const HandleSendClick = async () => {
        inputRef.current.innerHTML = '';
        await Api.sendMessage(activeChat.chatId, user.id, inputValue, users);
        closeEmokiPicker();
        setInputValue('');
    }

    return (
        <>
            <span data-placeholder='Mensagem' onKeyUp={HandleInputKeyUp} ref={inputRef} className={styles.input} onInput={HandleInputChange} contentEditable="true" data-max-length="1"></span>
            {inputValue.length > 0 ? <SendButton onClick={HandleSendClick} className={styles['send-button']} /> :
                <MicrophoneButton onClick={HandleMicClick} fill={listening ? 'red' : ''} className={styles['microphone-button']} />}
        </>
    )
}

export default Input;