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
    const [contacts, setContacts] = useState([
        {
            title: 'Paulo',
            avatar: 'https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRVfsTr2Esrr0Im0PFhI0snHUL7maL0HTjPsD-e1b2tOA&oe=64023195'
        },
        {
            title: 'Costa',
            avatar: 'https://pps.whatsapp.net/v/t61.24694-24/311895978_1215356046080479_6046584892484298882_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRDof0iaD68kgAJcfe65nAxC62Vyqf_yx6FGJjp_akU1g&oe=640FEBB8'
        }
    ]);
    var results = false;

    const ref = useRef(null);

    const HandeInputFocus = () => {
        setInputFocus(true);
    }

    const HandeInputFocusOut = () => {
        if (inputValue.length <= 0) {
            setInputFocus(false);
        }
    }

    const HandleInputChange = (e) => {
        setValue(e.target.value);
    }

    const HandleCloseButtonClick = () => {
        setValue('');
        ref.current.focus();
    }

    const HandleSearcButtonClick = () => {
        ref.current.focus();
    }

    const HandleArrowBackClick = () => {
        ref.current.blur();
        setInputFocus(false);
        setValue('');
    }

    const HandleBackNewchatMenu = () => {
        setNewchatMenuStatus(false);
        setValue('');
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
                    <input ref={ref} onFocus={HandeInputFocus} onBlur={HandeInputFocusOut} value={inputValue} onChange={HandleInputChange} placeholder='Pesquisar contato' />
                    {inputValue.length > 0 ? <span onClick={HandleCloseButtonClick}><SearchCloseButton className={styles['search-close-icon']} /></span> : <></>}
                </div>
            </div>
            <div className={styles['contacts-list']}>
                <div className={styles.heading}>
                    <h1>Contatos no WhatsApp</h1>
                </div>
                {inputValue.length > 0 ? <>
                    {contacts.map((contact, key) => {
                        if (contact.title.toLowerCase().includes(inputValue.toLowerCase())) {
                            results = true;
                            return (<div key={key} className={styles['contact-box']}>
                                <div className={styles.image}>
                                    <img src={contact.avatar} />
                                </div>
                                <div className={styles.content}>
                                    <div className={styles['row']}>
                                        <h3>{contact.title}</h3>
                                    </div>
                                </div>
                            </div>)
                        }
                    })}
                </> :
                    <>
                        {contacts.map((contact, key) => (
                            <div key={key} className={styles['contact-box']}>
                                <div className={styles.image}>
                                    <img src={contact.avatar} />
                                </div>
                                <div className={styles.content}>
                                    <div className={styles['row']}>
                                        <h3>{contact.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                }
                {inputValue.length > 0 && !results &&
                    <div className={styles.notfound}>
                        <span>Nenhum contato encontrado para '{inputValue}'</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default NewChat;