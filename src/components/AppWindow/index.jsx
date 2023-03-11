import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

import styles from './AppWindow.module.scss'

import App from './App';
import Login from './Login';
import Api from 'src/api';

import classNames from 'classnames';

function AppWindow() {
  const [logged, setLogingStatus] = useState(false);
  const [user, setUser] = useState(null/* {
    id: 'OTv3OCqo4fn7cyDf42Oi',
    name: 'Test',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  } */);
  const transition = useTransition(logged, {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 }
  });

  const HandleLoginData = async (u, accessToken) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL + "?height=500&access_token=" + accessToken
    }
    Api.addUser(newUser);
    setUser(newUser);
    setLogingStatus(true);
  }

  return (
    <div className={classNames(styles['app-window'], { [styles['not-logged']]: !logged })}>
      {transition((style, item) =>
        item && user !== undefined || null ? <animated.div style={style} className={styles.app}><App user={user} /></animated.div> : <Login onReceive={HandleLoginData} setLogingStatus={setLogingStatus} />
      )}
    </div>
  )
}

export default AppWindow;