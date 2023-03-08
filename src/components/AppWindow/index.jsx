import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

import styles from './AppWindow.module.scss'

import App from './App';
import Login from './Login';
import Api from 'src/api';

import classNames from 'classnames';

function AppWindow() {
  const [logged, setLogingStatus] = useState(true);
  const [user, setUser] = useState({
    id: 'ImrI1hELBTYb1dCtdcPhKbe6exE2',
    name: 'Joao Pedro Lima',
    avatar: 'https://graph.facebook.com/6036314086458148/picture?height=500&access_token=EAAi8Tv2ZBhi8BAMmvGkkblJcKTNlZAjq6HQkQeDPxyV8uxpZAZCIxEl5wik9I2RdeWbus3M9jd84o3lrJ7gASvuM3ZAnGuUT5AygQlrJnD8CXpJjsrT0n4fBCgzEk3arZB6NZAFnUp06sgPPREacJdHCNbkmE18qurjveUncBF4uo26ZA7BUHt5ZA0AjTfjAYeazVpVZB2AnOKkjGhZBvLu8mFB18BVz1JqUyxBg8J96jGY79qkIsEDu6LCYKzrCMcL7KwZD'
  });
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