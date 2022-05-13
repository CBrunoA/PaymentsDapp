import React from 'react'
import './nav.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'

const Nav = () => {

  const [activeNav, setActive] = useState('#')

  return (
    <nav>
      <Link to="/" className="btn btn-colored"><AiOutlineHome color="dark"/></Link>
      <Link to="/home" className="btn btn-colored">Change account</Link>
    </nav>
  )
}

export default Nav