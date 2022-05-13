import React from 'react'
import {BsArrowBarUp} from 'react-icons/bs'

const Withdraw = (withdrawAmount, withdraw) => {
  return (
    <div className="container1">
        <form className="deposit" onSubmitCapture={(event) => {
            event.preventDefault()
            withdraw(withdrawAmount.value)
            }
        }>
            <input type="text" className="inputs" placeholder="Amount to deposit" 
            ref={(input)=>withdrawAmount = input}/>
            <button className="btnS btnS-colored"><BsArrowBarUp/>Withdraw</button>
        </form>
    </div>
  )
}

export default Withdraw