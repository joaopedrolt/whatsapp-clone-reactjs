import styles from './ChatList.module.scss'
import classNames from 'classnames';

import ArrowDown from 'src/assets/icons/arrow-down-chatbox.jsx';

function ChatList({ chatList, setActiveChat, activeChat }) {

  const HandleChatboxClick = (index) => {
    setActiveChat(chatList[index]);
  }

  return (
    <div className={styles['chat-list']}>
      {chatList.map((chatBox, key) => (
        <div onClick={() => HandleChatboxClick(key)} key={key} className={classNames(styles['chat-box'], {[styles.active]:
          activeChat.chatId == chatBox.chatId})}>
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
    </div>
  )
}

export default ChatList;