import styles from './ChatList.module.scss'
import classNames from 'classnames';

import ArrowDown from 'src/assets/icons/arrow-down-chatbox.jsx';

function ChatList() {

  const unreadMessage = true;
  const readMessage = false;

  return (
    <div className={styles['chat-list']}>

      <div className={styles['chat-box']}>
        <div className={styles.image}>
          <img src='https://pps.whatsapp.net/v/t61.24694-24/289040170_24908718558773272_8872737444012245312_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdS4PVT3mmiUQbtimwdhMMvxN-drwZ3oG48pWxoAI7uz-Q&oe=63FCFF76' />
        </div>
        <div className={classNames(styles.content, { [styles.active]: unreadMessage })}>
          <div className={styles['top-row']}>
            <h3>Olimpo Feudal</h3>
            <p>17:00</p>
          </div>
          <div className={styles['bottom-row']}>
            <span>Murilo: afrochuaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddda</span>
            <div className={styles.icons}>
              <span className={styles.notifications}>
                <p>7</p>
              </span>
              <ArrowDown className={styles['arrow-down-icon']} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles['chat-box']}>
        <div className={styles.image}>
          <img src='https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRVfsTr2Esrr0Im0PFhI0snHUL7maL0HTjPsD-e1b2tOA&oe=64023195' />
        </div>
        <div className={classNames(styles.content, { [styles.active]: readMessage })}>
          <div className={styles['top-row']}>
            <h3>Paulo</h3>
            <p>Quarta-Feira</p>
          </div>
          <div className={styles['bottom-row']}>
            <span>afrochuaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddda</span>
            <div className={styles.icons}>
              <span className={styles.notifications}>
                <p>7</p>
              </span>
              <ArrowDown className={styles['arrow-down-icon']} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ChatList;