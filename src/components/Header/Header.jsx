import React from 'react'
import BTN from './BTN'
import './header.css'

const Header = () => {
  return (
    <div className="header__container">
      <h4>Explore the ultimate</h4>
      <h1>Crypto Payment Platform</h1>
      <h6>Time is valuable</h6>
      <BTN/>
    </div>
  )
}

export default Header