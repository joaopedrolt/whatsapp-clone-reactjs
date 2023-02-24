import { useState } from 'react';

import styles from './Chat.module.scss'

import SearchButton from 'src/assets/icons/search-chat-icon.jsx';
import MenuButton from 'src/assets/icons/menu-chat-icon.jsx';
import EmojiButton from 'src/assets/icons/emoji-icon.jsx';
import ClipButton from 'src/assets/icons/clip-icon.jsx';
import MicrophoneButton from 'src/assets/icons/microphone-icon.jsx';
import SendButton from 'src/assets/icons/send-icon.jsx';

function Chat() {

    const [inputValue, setValue] = useState('');

    const HandleInputChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className={styles.chat}>
            <header className={styles['chat-header']}>
                <div className={styles.avatar}>
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/119455190_768019937074475_8940386468603441667_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSYA4ukysFylbnKXAjDfrNs3_NKNrPV1Hxo_xUhmLQ_xQ&oe=640269D5" alt="" />
                </div>
                <div className={styles.user}>
                    <span className={styles.name}>Paulo</span>
                </div>
                <div className={styles.icons}>
                    <SearchButton className={styles['search-button']} />
                    <MenuButton className={styles['menu-button']} />
                </div>
            </header>
            <div className={styles['chat-body']}>
                <div className={`${styles[`message-row`]} ${styles.out}`}>
                    <div className={styles['message-box-container']}>
                        <div className={styles['message-box']}>
                            <span className={styles.message}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id pretium turpis. Quisque in arcu in elit suscipit aliquam sed nec sapien. Nam vitae enim vulputate, gravida tortor sit amet, convallis enim. Maecenas non ultricies ante. Duis vulputate rhoncus nisi at suscipit. Vivamus blandit urna et lorem porttitor cursus. Mauris quis nisl suscipit, pretium magna vitae, scelerisque ligula. Cras venenatis sit amet ex vel volutpat. Nam iaculis vel risus vel gravida.
                                <span className={styles['time-filler']}>______</span>
                            </span>
                            <span className={styles.time}>17:23</span>
                        </div>
                    </div>
                </div>
                <div className={`${styles[`message-row`]} ${styles.in}`}>
                    <div className={styles['message-box-container']}>
                        <div className={styles['message-box']}>
                            <span className={styles.message}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id pretium turpis. Quisque in arcu in elit suscipit aliquam sed nec sapien. Nam vitae enim vulputate, gravida tortor sit amet, convallis enim. Maecenas non ultricies ante. Duis vulputate rhoncus nisi at suscipit. Vivamus blandit urna et lorem porttitor cursus. Mauris quis nisl suscipit, pretium magna vitae, scelerisque ligula. Cras venenatis sit amet ex vel volutpat. Nam iaculis vel risus vel gravida.
                                <span className={styles['time-filler']}>______</span>
                            </span>
                            <span className={styles.time}>17:23</span>
                        </div>
                    </div>
                </div>
                <div className={`${styles[`message-row`]} ${styles.in}`}>
                    <div className={styles['message-box-container']}>
                        <div className={styles['message-box']}>
                            <span className={styles.message}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id pretium turpis. Quisque in arcu in elit suscipit aliquam sed nec sapien. Nam vitae enim vulputate, gravida tortor sit amet, convallis enim. Maecenas non ultricies ante. Duis vulputate rhoncus nisi at suscipit. Vivamus blandit urna et lorem porttitor cursus. Mauris quis nisl suscipit, pretium magna vitae, scelerisque ligula. Cras venenatis sit amet ex vel volutpat. Nam iaculis vel risus vel gravida.
                                <span className={styles['time-filler']}>______</span>
                            </span>
                            <span className={styles.time}>17:23</span>
                        </div>
                    </div>
                </div>
                <div className={`${styles[`message-row`]} ${styles.in}`}>
                    <div className={styles['message-box-container']}>
                        <div className={styles['message-box']}>
                            <span className={styles.message}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id pretium turpis. Quisque in arcu in elit suscipit aliquam sed nec sapien. Nam vitae enim vulputate, gravida tortor sit amet, convallis enim. Maecenas non ultricies ante. Duis vulputate rhoncus nisi at suscipit. Vivamus blandit urna et lorem porttitor cursus. Mauris quis nisl suscipit, pretium magna vitae, scelerisque ligula. Cras venenatis sit amet ex vel volutpat. Nam iaculis vel risus vel gravida.
                                <span className={styles['time-filler']}>______</span>
                            </span>
                            <span className={styles.time}>17:23</span>
                        </div>
                    </div>
                </div>
                <div className={`${styles[`message-row`]} ${styles.out}`}>
                    <div className={styles['message-box-container']}>
                        <div className={styles['message-box']}>
                            <span className={styles.message}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id pretium turpis. Quisque in arcu in elit suscipit aliquam sed nec sapien. Nam vitae enim vulputate, gravida tortor sit amet, convallis enim. Maecenas non ultricies ante. Duis vulputate rhoncus nisi at suscipit. Vivamus blandit urna et lorem porttitor cursus. Mauris quis nisl suscipit, pretium magna vitae, scelerisque ligula. Cras venenatis sit amet ex vel volutpat. Nam iaculis vel risus vel gravida.
                                <span className={styles['time-filler']}>______</span>
                            </span>
                            <span className={styles.time}>17:23</span>
                        </div>
                    </div>
                </div>
                <div className={`${styles[`message-row`]} ${styles.out}`}>
                    <div className={styles['message-box-container']}>
                        <div className={styles['message-box']}>
                            <span className={styles.message}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id pretium turpis. Quisque in arcu in elit suscipit aliquam sed nec sapien. Nam vitae enim vulputate, gravida tortor sit amet, convallis enim. Maecenas non ultricies ante. Duis vulputate rhoncus nisi at suscipit. Vivamus blandit urna et lorem porttitor cursus. Mauris quis nisl suscipit, pretium magna vitae, scelerisque ligula. Cras venenatis sit amet ex vel volutpat. Nam iaculis vel risus vel gravida.
                                <span className={styles['time-filler']}>______</span>
                            </span>
                            <span className={styles.time}>17:23</span>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={styles['chat-inputbar']}>
                <EmojiButton className={styles['emoji-button']} />
                <ClipButton className={styles['clip-button']} />
                <input onChange={HandleInputChange} value={inputValue} placeholder='Mensagem' />
                {inputValue.length > 0 ? <SendButton className={styles['send-button']} /> :
                    <MicrophoneButton className={styles['microphone-button']} />}
            </footer>
        </div>
    )
}

export default Chat;