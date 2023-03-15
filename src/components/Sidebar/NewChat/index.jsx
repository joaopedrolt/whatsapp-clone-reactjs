import { useState, useRef, useEffect } from 'react';

import styles from './NewChat.module.scss'

import ArrowBackButton from 'src/assets/icons/arrow-back-newchat-icon.jsx';
import ArrowSearchButton from 'src/assets/icons/arrow-back-search-icon.jsx';
import SearchCloseButton from 'src/assets/icons/search-close-icon.jsx';
import SearchButton from 'src/assets/icons/search-sidebar-icon.jsx';

import Api from 'src/api';

import classNames from 'classnames';

function NewChat({ user, newChatMenu, setNewchatMenuStatus }) {
    const [inputFocus, setInputFocus] = useState(false);
    const [inputValue, setValue] = useState('');
    const [contacts, setContacts] = useState([]);
    var results = false;

    useEffect(() => {
        const getContactList = async () => {
            if (user !== null) {
                let results = await Api.getContactList(user.id);
                setContacts(results);
            }
        }
        getContactList();
    }, [user])

    const AddNewChat = async (user2) => {
        await Api.addNewChat(user, user2);
        setNewchatMenuStatus(false);
    }

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
                        if (contact.name.toLowerCase().includes(inputValue.toLowerCase())) {
                            results = true;
                            return (<div key={key} className={styles['contact-box']}>
                                <div className={styles.image}>
                                    <img src={contact.avatar} className={styles.loading} 
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = "https://www.w3schools.com/howto/img_avatar.png";
                                        }}
                                    />
                                </div>
                                <div className={styles.content}>
                                    <div className={styles['row']}>
                                        <h3>{contact.name}</h3>
                                    </div>
                                </div>
                            </div>)
                        }
                    })}
                </> :
                    <>
                        {contacts.map((contact, key) => (
                            <div onClick={() => { AddNewChat(contact) }} key={key} className={styles['contact-box']}>
                                <div className={styles.image}>
                                    <img src={contact.avatar} className={styles.loading}
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = "https://www.w3schools.com/howto/img_avatar.png";
                                        }}
                                    />
                                </div>
                                <div className={styles.content}>
                                    <div className={styles['row']}>
                                        <h3>{contact.name}</h3>
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