import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './homePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
        <NavLink to={'/vent'}><button className={'btn'}>Вентилятор и CO2</button></NavLink>
        <NavLink to={'/buttons'}><button className={'btn'}>Кнопки тревоги</button></NavLink>
    </div>
  )
}

export default HomePage