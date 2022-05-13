import React from 'react'
import './nav.css'
import Social from './Social'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {

  const [activeNav, setActive] = useState('#')

  return (
    <nav>
      <Link to="/payments" className="btn btn-colored">Launch Dapp</Link>
      <a href="#about" onClick={()=>setActive('#about')} className= {activeNav === '#about' ? 'active BTN_sec' : 'BTN_sec'}>
        <p>About</p>
      </a>
      <a href="#faq" onClick={()=>setActive('#faq')} className= {activeNav === '#faq' ? 'active BTN_sec' : 'BTN_sec'}>
        <p>FAQ</p>
      </a>
      <a href="#contact" onClick={()=>setActive('#contact')} className= {activeNav === '#contact' ? 'active BTN_sec' : 'BTN_sec'}>
        <p>Contact</p>
      </a>
      <Social/>
    </nav>
  )
}

export default Nav