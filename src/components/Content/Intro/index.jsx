import styles from './Intro.module.scss'

import IntroContentImage from 'src/assets/images/intro-content-image.jsx'

function Intro() {
    return (
        <>
            <div className={styles.intro}>
                <IntroContentImage />
                <h1>WhatsApp Web</h1>
                <p>Envie e receba mensagens sem precisar manter seu celular conectado à internet.<br></br>
                    Use o WhatsApp em até quatro aparelhos conectados e um celular ao mesmo tempo.</p>
            </div>
            <div className={styles['intro-filler']}></div>
        </>
    )
}

export default Intro;