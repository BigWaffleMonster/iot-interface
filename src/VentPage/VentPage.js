import React from 'react'
import styles from './vent.module.scss'
import img from '../public/images/vent.png'

const VentPage = () => {
  return (
    <div className={styles.ventPage}>
      <div className={styles.circle}>
        <div>CO2</div>
        <div>60%</div>
      </div>
      <div>
        <img className={styles.imgCss} src={img} alt="'qq"/>
        <p>Вентилятор Работает</p>
      </div>
    </div>
  )
}

export default VentPage