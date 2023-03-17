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
      const d = date.toDate();
      let now = new Date();
      if (d.getDate() == now.getDate() && d.getMonth() == now.getMonth() && d.getFullYear() == now.getFullYear()) {
        let hours = d.getHours();
        let minutes = d.getMinutes();
        if (hours < 10) {
          hours = `${0}${hours}`
        }
        if (minutes < 10) {
          minutes = `${minutes}${0}`
        }
        return (`${hours}:${minutes}`);
      }
      else {
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
      }
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
                      {chatBox.lastMessage != '' ? <>
                        <div className={styles['bottom-row']}>
                          {chatBox.lastMessage == '&#x1F3A8 Imagem' ?
                            <span dangerouslySetInnerHTML={{ __html: chatBox.lastMessage }}></span>
                            : <span>{chatBox.lastMessage}</span>
                          }
                          <div className={styles.icons}>
                            <span className={styles.notifications}>
                              <p>!</p>
                            </span>
                            <ArrowDown className={styles['arrow-down-icon']} />
                          </div>
                        </div>
                      </> : <></>
                      }
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
                <img src={chatBox.image} className={styles.loading}
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
                {chatBox.lastMessage != '' ? <>
                  <div className={styles['bottom-row']}>
                    {chatBox.lastMessage == '&#x1F3A8 Imagem' ?
                      <span dangerouslySetInnerHTML={{ __html: chatBox.lastMessage }}></span>
                      : <span>{chatBox.lastMessage}</span>
                    }
                    <div className={styles.icons}>
                      <span className={styles.notifications}>
                        <p>!</p>
                      </span>
                      <ArrowDown className={styles['arrow-down-icon']} />
                    </div>
                  </div>
                </> : <></>
                }
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