import React from 'react'
import {BsArrowBarUp} from 'react-icons/bs'

const Deposit = (depositAmount, deposit) => {
  return (
    <div className="container1">
        <form className="deposit" onSubmitCapture={(event) => {
            event.preventDefault()
            deposit(depositAmount.value)
            }
        }>
            <input type="text" className="inputs" placeholder="Amount to deposit" 
            ref={(input)=>depositAmount = input}/>
            <button className="btnS btnS-colored"><BsArrowBarUp/>Send</button>
        </form>
    </div>
  )
}

export default Deposit