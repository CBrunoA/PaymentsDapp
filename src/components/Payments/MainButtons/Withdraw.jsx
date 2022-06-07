import React from 'react'
import {BsArrowBarUp} from 'react-icons/bs'

const Withdraw = (withdrawAmount, withdraw) => {
  return (
    <div className="">
        <form className="deposit">
            <input type="text" className="inputs" placeholder="Amount to deposit" 
            ref={(input)=>withdrawAmount = input}/>
            <button type="submit" className="buttonPay" onSubmit={(event) => {
            event.preventDefault()
            withdraw(withdrawAmount.value)
            }}><BsArrowBarUp/> Withdraw</button>
        </form>
    </div>
  )
}

export default Withdraw