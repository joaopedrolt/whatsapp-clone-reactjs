import { useEffect, useState } from 'react';
import styles from './ChatList.module.scss'

import ChatBox from './ChatBox';

import classNames from 'classnames';
import { ClipLoader } from 'react-spinners';
import { useDebounce } from 'use-debounce';

function ChatList({ inputValue, chatList, setActiveChat, activeChat }) {
  const [isLoading, setLoading] = useState(false);
  const [value] = useDebounce(inputValue, 1000);
  const [latestChatList, setLatestChatList] = useState(chatList);
  const [firstLoad, setFirstLoad] = useState(true);
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
          minutes = `${0}${minutes}`
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
  }, [inputValue]);

  useEffect(() => {
    if (chatList.length > 0 && firstLoad) {
      setLatestChatList(chatList);
      setFirstLoad(false);
    }
  }, [chatList]);

  useEffect(() => {
    if (latestChatList.length > 0) {
      for (let i in chatList) {
        if (chatList[i].chatId != latestChatList[i].chatId) {
          setLatestChatList(chatList);
          break;
        }
      }
    }
  }, [latestChatList, chatList]);

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
                  <div className={styles['key-container']} key={key}>
                    <ChatBox chatBox={chatBox}
                      index={key}
                      chatId={activeChat.chatId}
                      latestChatList={latestChatList}
                      chatboxClick={HandleChatboxClick} />
                  </div>
                )
              }
            })}
        </> :
        <>
          {!isLoading && chatList.map((chatBox, key) => (
            <div key={key}>
              <ChatBox chatBox={chatBox}
                index={key}
                chatId={activeChat.chatId}
                latestChatList={latestChatList}
                chatboxClick={HandleChatboxClick} />
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