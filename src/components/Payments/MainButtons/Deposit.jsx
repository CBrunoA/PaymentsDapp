import React from 'react'
import {BsArrowBarUp} from 'react-icons/bs'

const Deposit = (depositAmount, deposit) => {
  return (
    <div className="">
        <form className="deposit">
            <input type="text" className="inputs" placeholder="Amount to deposit" 
            ref={(input)=>depositAmount = input}/>
            <button type="submit" className="buttonPay" onSubmit={(event) => {
            event.preventDefault()
            deposit(depositAmount.value)
            }}><BsArrowBarUp/> Send</button>
        </form>
    </div>
  )
}

export default Deposit