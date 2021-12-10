import React, {useState} from 'react'
import styles from './buttons.module.scss'

const Buttons = () => {
  const [level, setLevel] = useState(100)
  const [isActive, setIsActive] = useState(true)

  const volumePlus = () => {
    setIsActive(true)
    setLevel(200)
  }

  const volumeMinus = () => {
    setIsActive(true)
    setLevel(100)
  }

  return (
    <div className={styles.qq}>
      <div className={styles.buttonsText}>
        { isActive ?
          <p>Звук: включён</p>
          :
          <p>Звук: выключен</p>
        }
        <p>{`Уровень громкости: ${level}`}</p>
      </div>
      <div className={styles.buttonsPage}>
        <button className={'btn'} onClick={volumePlus}>Громко</button>
        <button className={'btn'} onClick={volumeMinus}>Тихо</button>
        <button className={'btn'} onClick={() => setIsActive(false)}>Выключить</button>
      </div>
    </div>
  )
}

export default Buttons