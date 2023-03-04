import { useEffect, useState } from 'react';
import styles from './ChatList.module.scss'

import ArrowDown from 'src/assets/icons/arrow-down-chatbox.jsx';

import classNames from 'classnames';
import { ClipLoader } from 'react-spinners';
import { useDebounce } from 'use-debounce';

function ChatList({ inputValue, chatList, setActiveChat, activeChat }) {
  const [isLoading, setLoading] = useState(false);
  const [value] = useDebounce(inputValue, 1000);
  var results = false;

  const HandleChatboxClick = (index) => {
    setActiveChat(chatList[index]);
  }

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false)
    }, 1500)

    if (inputValue.length > 0) {
      setLoading(true);
      return () => clearTimeout(loadingTimeout)
    }
  }, [inputValue])

  return (
    <div className={classNames(styles['chat-list'], { [styles.loading]: isLoading })}>
      {inputValue.length > 0 ?
        <>
          {
            chatList.map((chatBox, key) => {
              if (chatBox.title.toLowerCase().includes(inputValue.toLowerCase())) {
                results = true;
                return (
                  <div onClick={() => HandleChatboxClick(key)} key={key} className={classNames(styles['chat-box'],
                    { [styles.active]: activeChat.chatId == chatBox.chatId })}>
                    <div className={styles.image}>
                      <img src={chatBox.image} />
                    </div>
                    <div className={classNames(styles.content, { [styles.active]: chatBox.newMessages.isThere })}>
                      <div className={styles['top-row']}>
                        <h3>{chatBox.title}</h3>
                        <p>{chatBox.lastMessageTime}</p>
                      </div>
                      <div className={styles['bottom-row']}>
                        <span>{chatBox.lastMessage}</span>
                        <div className={styles.icons}>
                          <span className={styles.notifications}>
                            <p>{chatBox.newMessages.amount}</p>
                          </span>
                          <ArrowDown className={styles['arrow-down-icon']} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
        </> :
        <>
          {chatList.map((chatBox, key) => (
            <div onClick={() => HandleChatboxClick(key)} key={key} className={classNames(styles['chat-box'],
              { [styles.active]: activeChat.chatId == chatBox.chatId })}>
              <div className={styles.image}>
                <img src={chatBox.image} />
              </div>
              <div className={classNames(styles.content, { [styles.active]: chatBox.newMessages.isThere })}>
                <div className={styles['top-row']}>
                  <h3>{chatBox.title}</h3>
                  <p>{chatBox.lastMessageTime}</p>
                </div>
                <div className={styles['bottom-row']}>
                  <span>{chatBox.lastMessage}</span>
                  <div className={styles.icons}>
                    <span className={styles.notifications}>
                      <p>{chatBox.newMessages.amount}</p>
                    </span>
                    <ArrowDown className={styles['arrow-down-icon']} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      }
      {isLoading &&
        <ClipLoader
          color={'#18af8f'}
          loading={true}
          size={20}
        />
      }
      {value.length > (inputValue.length - 1) && inputValue.length > 0 && !results && !isLoading &&
        <div className={styles.notfound}>
          <span>Nenhuma conversa, contato ou mensagem encontrada</span>
        </div>
      }
    </div>
  )
}

export default ChatList;