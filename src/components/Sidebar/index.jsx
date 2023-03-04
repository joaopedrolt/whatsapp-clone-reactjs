import { useState } from 'react';

import styles from './Sidebar.module.scss'

import Header from './Header/index';
import Search from './Search/index';
import ChatList from './ChatList';
import NewChat from './NewChat/index';

function Sidebar({ chatList, setActiveChat, activeChat, user }) {
  const [newChatMenu, setNewchatMenuStatus] = useState(false);
  const [inputSearchValue, setSearchValue] = useState('');

  return (
    <div className={styles.sidebar}>
      <NewChat newChatMenu={newChatMenu} setNewchatMenuStatus={setNewchatMenuStatus} />
      <Header user={user} setNewchatMenuStatus={setNewchatMenuStatus} />
      <Search inputValue={inputSearchValue} setValue={setSearchValue} />
      <ChatList inputValue={inputSearchValue} chatList={chatList} setActiveChat={setActiveChat} activeChat={activeChat} />
    </div>
  )
}

export default Sidebar;