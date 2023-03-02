import { useState, useRef } from 'react';

import styles from './NewChat.module.scss'

import ArrowBackButton from 'src/assets/icons/arrow-back-newchat-icon.jsx';
import ArrowSearchButton from 'src/assets/icons/arrow-back-search-icon.jsx';
import SearchCloseButton from 'src/assets/icons/search-close-icon.jsx';
import SearchButton from 'src/assets/icons/search-sidebar-icon.jsx';

import classNames from 'classnames';

function NewChat({ newChatMenu, setNewchatMenuStatus }) {
    const [inputFocus, setInputFocus] = useState(false);
    const [inputValue, setValue] = useState('');

    const ref = useRef(null);

    const HandeInputFocus = () => {
        setInputFocus(true);
    }

    const HandeInputFocusOut = () => {
        setInputFocus(false);
    }

    const HandleInputChange = (e) => {
        setValue(e.target.value);
    }

    const HandleCloseButtonClick = () => {
        setValue('');
    }

    const HandleSearcButtonClick = () => {
        ref.current.focus();
    }

    const HandleArrowBackClick = () => {
        ref.current.blur();
        setValue('');
    }

    const HandleBackNewchatMenu = () => {
        setNewchatMenuStatus(false);
    }

    return (
        <div className={classNames(styles.newchat, { [styles['active']]: newChatMenu })}>
            <header>
                <div className={styles.content}>
                    <div className={styles["arrowback-container"]}>
                        <ArrowBackButton onClick={HandleBackNewchatMenu} className={styles["arrowback-button"]} />
                    </div>
                    <div className={styles["title-container"]}>
                        <h1 className={styles.title}>Nova conversa</h1>
                    </div>
                </div>
            </header>
            <div className={classNames(styles['search-container'], { [styles['active']]: inputFocus })}>
                <div className={styles['input-container']}>
                    <SearchButton onClickFunction={HandleSearcButtonClick} className={styles['search-button']} />
                    <ArrowSearchButton onClickFunction={HandleArrowBackClick} className={styles['arrow-search-button']} />
                    <input ref={ref} onFocus={HandeInputFocus} onBlur={HandeInputFocusOut} value={inputValue} onChange={HandleInputChange} placeholder='Pesquisar ou começar uma nova conversa' />
                    {inputValue.length > 0 ? <span onClick={HandleCloseButtonClick}><SearchCloseButton className={styles['search-close-icon']} /></span> : <></>}
                </div>
            </div>
            <div className={styles['chat-list']}>
                <div className={styles.heading}>
                    <h1>Contatos no WhatsApp</h1>
                </div>
                <div className={styles['chat-box']}>
                    <div className={styles.image}>
                        <img src='https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRVfsTr2Esrr0Im0PFhI0snHUL7maL0HTjPsD-e1b2tOA&oe=64023195' />
                    </div>
                    <div className={styles.content}>
                        <div className={styles['row']}>
                            <h3>Paulo</h3>
                        </div>
                    </div>
                </div>
                <div className={styles['chat-box']}>
                    <div className={styles.image}>
                        <img src='https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRVfsTr2Esrr0Im0PFhI0snHUL7maL0HTjPsD-e1b2tOA&oe=64023195' />
                    </div>
                    <div className={styles.content}>
                        <div className={styles['row']}>
                            <h3>Paulo</h3>
                        </div>
                    </div>
                </div>
                <div className={styles['chat-box']}>
                    <div className={styles.image}>
                        <img src='https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRVfsTr2Esrr0Im0PFhI0snHUL7maL0HTjPsD-e1b2tOA&oe=64023195' />
                    </div>
                    <div className={styles.content}>
                        <div className={styles['row']}>
                            <h3>Paulo</h3>
                        </div>
                    </div>
                </div>
                <div className={styles['chat-box']}>
                    <div className={styles.image}>
                        <img src='https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRVfsTr2Esrr0Im0PFhI0snHUL7maL0HTjPsD-e1b2tOA&oe=64023195' />
                    </div>
                    <div className={styles.content}>
                        <div className={styles['row']}>
                            <h3>Paulo</h3>
                        </div>
                    </div>
                </div>
                <div className={styles['chat-box']}>
                    <div className={styles.image}>
                        <img src='https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRVfsTr2Esrr0Im0PFhI0snHUL7maL0HTjPsD-e1b2tOA&oe=64023195' />
                    </div>
                    <div className={styles.content}>
                        <div className={styles['row']}>
                            <h3>Paulo</h3>
                        </div>
                    </div>
                </div>
                <div className={styles['chat-box']}>
                    <div className={styles.image}>
                        <img src='https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRVfsTr2Esrr0Im0PFhI0snHUL7maL0HTjPsD-e1b2tOA&oe=64023195' />
                    </div>
                    <div className={styles.content}>
                        <div className={styles['row']}>
                            <h3>Paulo</h3>
                        </div>
                    </div>
                </div>
                <div className={styles['chat-box']}>
                    <div className={styles.image}>
                        <img src='https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRVfsTr2Esrr0Im0PFhI0snHUL7maL0HTjPsD-e1b2tOA&oe=64023195' />
                    </div>
                    <div className={styles.content}>
                        <div className={styles['row']}>
                            <h3>Paulo</h3>
                        </div>
                    </div>
                </div>
                <div className={styles['chat-box']}>
                    <div className={styles.image}>
                        <img src='https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRVfsTr2Esrr0Im0PFhI0snHUL7maL0HTjPsD-e1b2tOA&oe=64023195' />
                    </div>
                    <div className={styles.content}>
                        <div className={styles['row']}>
                            <h3>Paulo</h3>
                        </div>
                    </div>
                </div>
                <div className={styles['chat-box']}>
                    <div className={styles.image}>
                        <img src='https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRVfsTr2Esrr0Im0PFhI0snHUL7maL0HTjPsD-e1b2tOA&oe=64023195' />
                    </div>
                    <div className={styles.content}>
                        <div className={styles['row']}>
                            <h3>Paulo</h3>
                        </div>
                    </div>
                </div>
                <div className={styles['chat-box']}>
                    <div className={styles.image}>
                        <img src='https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRVfsTr2Esrr0Im0PFhI0snHUL7maL0HTjPsD-e1b2tOA&oe=64023195' />
                    </div>
                    <div className={styles.content}>
                        <div className={styles['row']}>
                            <h3>Paulo</h3>
                        </div>
                    </div>
                </div>
                <div className={styles['chat-box']}>
                    <div className={styles.image}>
                        <img src='https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRVfsTr2Esrr0Im0PFhI0snHUL7maL0HTjPsD-e1b2tOA&oe=64023195' />
                    </div>
                    <div className={styles.content}>
                        <div className={styles['row']}>
                            <h3>Paulo</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewChat;