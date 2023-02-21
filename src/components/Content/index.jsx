import styles from './Content.module.scss'

import IntroContentImage from 'src/assets/images/intro-content-image.jsx'

function Content() {
  return (
    <div className={styles.content}>
      <IntroContentImage />
    </div>
  )
}

export default Content;