import { useState, useRef, useEffect } from 'react';

import styles from './Input.module.scss'

import MicrophoneButton from 'src/assets/icons/microphone-icon.jsx';
import SendButton from 'src/assets/icons/send-icon.jsx';

function Input({ emoji }) {

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

    return (
        <>
            <span data-placeholder='Mensagem' ref={inputRef} className={styles.input} onInput={HandleInputChange} contentEditable="true" data-max-length="1"></span>
            {inputValue.length > 0 ? <SendButton className={styles['send-button']} /> :
                <MicrophoneButton onClick={HandleMicClick} fill={listening ? 'red' : ''} className={styles['microphone-button']} />}
        </>
    )
}

export default Input;