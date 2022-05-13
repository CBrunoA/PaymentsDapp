import React from 'react'
import {FaDiscord} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'


const Social = () => {
  return (
    <div className="socials">
        <a href="https://discord.gg"><FaDiscord color="#8c00ff"/></a>
        <a href="https://linkedin.com"><FaLinkedinIn color="8c00ff"/></a>
    </div>
  )
}

export default Social