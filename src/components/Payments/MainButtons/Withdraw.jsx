import React from 'react'
import {BsArrowBarUp} from 'react-icons/bs'

const Withdraw = (withdrawAmount, withdraw, hideComponent) => {
  return (
    <div className="">
        <form className="deposit" onSubmitCapture={(event) => {
            event.preventDefault()
            withdraw(withdrawAmount.value)
            }
        }>
            <input type="text" className="inputs" placeholder="Amount to deposit" 
            ref={(input)=>withdrawAmount = input}/>
            <button type="submit" className="buttonPay"><BsArrowBarUp/> Withdraw</button>
        </form>
    </div>
  )
}

export default Withdraw