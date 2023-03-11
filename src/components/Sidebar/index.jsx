import { useEffect, useState } from 'react';

import styles from './Sidebar.module.scss'

import Header from './Header/index';
import Search from './Search/index';
import ChatList from './ChatList';
import NewChat from './NewChat/index';

import Api from 'src/api';

function Sidebar({ user, setActiveChat, activeChat }) {
  const [newChatMenu, setNewchatMenuStatus] = useState(false);
  const [inputSearchValue, setSearchValue] = useState('');
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    if (user !== null) {
      let unsub = Api.onChatListUpdate(user.id, setChatList);
      return unsub;
    }
  }, [user]);

  return (
    <div className={styles.sidebar}>
      <NewChat user={user} newChatMenu={newChatMenu} setNewchatMenuStatus={setNewchatMenuStatus} />
      <Header user={user} setNewchatMenuStatus={setNewchatMenuStatus} />
      <Search inputValue={inputSearchValue} setValue={setSearchValue} />
      <ChatList inputValue={inputSearchValue} chatList={chatList} setActiveChat={setActiveChat} activeChat={activeChat} />
    </div>
  )
}

export default Sidebar;