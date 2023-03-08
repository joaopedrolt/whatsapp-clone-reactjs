import { useState } from 'react'

import Sidebar from 'src/components/Sidebar'
import Content from 'src/components/Content'
import Intro from 'src/components/Content/Intro/index.jsx'
import Chat from 'src/components/Content/Chat/index.jsx'

function App({ user }) {
  const [activeChat, setActiveChat] = useState({});
  
  return (
    <>
      <Sidebar user={user} activeChat={activeChat} setActiveChat={setActiveChat} />
      <Content>
        {activeChat.chatId === undefined &&
          <Intro />
        }
        {activeChat.chatId !== undefined &&
          <Chat user={user} activeChat={activeChat} />
        }
      </Content>
    </>
  )
}

export default App;