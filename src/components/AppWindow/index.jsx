import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

import styles from './AppWindow.module.scss'

import App from './App';
import Login from './Login';
import Api from 'src/api';

import classNames from 'classnames';

function AppWindow() {
  const [logged, setLogingStatus] = useState(false);
  const [user, setUser] = useState(null);
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

  const HandleLogout = () => {
    setUser(null);
    setLogingStatus(false);
  }

  return (
    <div className={classNames(styles['app-window'], { [styles['not-logged']]: !logged })}>
      {transition((style, item) =>
        item && user !== undefined || null ? <animated.div style={style} className={styles.app}><App user={user} logout={HandleLogout} /></animated.div> : <Login onReceive={HandleLoginData} />
      )}
    </div>
  )
}

export default AppWindow;