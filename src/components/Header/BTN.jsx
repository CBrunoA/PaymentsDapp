import React from 'react'
import {IoMdDownload} from 'react-icons/io'
import {MdOutlineOpenInNew} from 'react-icons/md'
import { Link } from 'react-router-dom'

const BTN = () => {
  return (
    <div>
      <p className="BTN">
        <Link to="/payments" className="btn btn-colored"><h5><MdOutlineOpenInNew/>Launch Dapp</h5></Link>
        <a href="#dapp" className="btn"><h5><IoMdDownload/>Guide</h5></a>
      </p>
    </div>
  )
}

export default BTN