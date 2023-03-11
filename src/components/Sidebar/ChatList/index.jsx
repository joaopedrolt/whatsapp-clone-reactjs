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

  const HandleTimeFormated = (date) => {
    if (date != null || undefined) {
      let d = new Date(date.seconds * 1000);
      let hours = d.getHours();
      let minutes = d.getMinutes();
      hours = hours < 10 ? '0' + hours : hours;
      return (`${hours}:${minutes}`);
    } else {
      return '';
    }
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
                let time = HandleTimeFormated(chatBox.lastMessageDate);
                results = true;
                return (
                  <div onClick={() => HandleChatboxClick(key)} key={key} className={classNames(styles['chat-box'],
                    { [styles.active]: activeChat.chatId == chatBox.chatId })}>
                    <div className={styles.image}>
                      <img src={chatBox.image}
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
                      <div className={styles['bottom-row']}>
                        <span>{chatBox.lastMessage}</span>
                        <div className={styles.icons}>
                          <span className={styles.notifications}>
                            <p>!</p>
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
          {chatList.map((chatBox, key) => {
            let time = HandleTimeFormated(chatBox.lastMessageDate);
            return (<div onClick={() => HandleChatboxClick(key)} key={key} className={classNames(styles['chat-box'],
              { [styles.active]: activeChat.chatId == chatBox.chatId })}>
              <div className={styles.image}>
                <img src={chatBox.image}
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
                <div className={styles['bottom-row']}>
                  <span>{chatBox.lastMessage}</span>
                  <div className={styles.icons}>
                    <span className={styles.notifications}>
                      <p>!</p>
                    </span>
                    <ArrowDown className={styles['arrow-down-icon']} />
                  </div>
                </div>
              </div>
            </div>)
          })}
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