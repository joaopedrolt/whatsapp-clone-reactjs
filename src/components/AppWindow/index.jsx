import { useState } from 'react'

import styles from './AppWindow.module.scss'

import Sidebar from 'src/components/Sidebar'
import Content from 'src/components/Content'

import Intro from 'src/components/Content/Intro/index.jsx'
import Chat from 'src/components/Content/Chat/index.jsx'

function AppWindow() {
  const [activeChat, setActiveChat] = useState({});
  const [chatList, setChatList] = useState([
    {
      chatId: 1, title: 'Paulo', image: 'https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRVfsTr2Esrr0Im0PFhI0snHUL7maL0HTjPsD-e1b2tOA&oe=64023195',
      lastMessage: 'afrochu', lastMessageTime: '17:00', newMessages: { isThere: true, amount: 5 }
    },
    {
      chatId: 2, title: 'Olimpo Feudal', image: 'https://pps.whatsapp.net/v/t61.24694-24/289040170_24908718558773272_8872737444012245312_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdS4PVT3mmiUQbtimwdhMMvxN-drwZ3oG48pWxoAI7uz-Q&oe=63FCFF76',
      lastMessage: 'Ok', lastMessageTime: 'Quarta-Feira', newMessages: { isThere: false, amount: 0 }
    }
  ]);
  const [user, setUser] = useState({
    id: 1234,
    avatar: 'https://pps.whatsapp.net/v/t61.24694-24/321302644_734154424727929_6455365195276254063_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ3Cy6kXN59J7XLjCvwvzCyViLs6HV-Djyb32IacdEhpw&oe=6409EFDB',
    name: 'João Pedro'
  });

  return (
    <div className={styles['app-window']}>
      <Sidebar user={user} chatList={chatList} activeChat={activeChat} setActiveChat={setActiveChat} />
      <Content>
        {activeChat.chatId === undefined &&
          <Intro />
        }
        {activeChat.chatId !== undefined &&
          <Chat user={user} activeChat={activeChat}/>
        }
      </Content>
    </div>
  )
}

export default AppWindow;