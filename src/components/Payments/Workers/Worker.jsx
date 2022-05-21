import React from 'react'
import './worker.css'
import {BsArrowBarUp} from 'react-icons/bs'
import {/* A component from the `react-icons` library. */
/* A component from the `react-icons` library. */
IoMdClose} from 'react-icons/io'


const Worker = (payment) => {
    const nombre = null;
    const address = null;
    const amount = null;
    return (
        <div>
            <form className="containerW" onSubmitCapture={(event) => {
                event.preventDefault()
                }
            }>
                <button type="submit" className="close"> <IoMdClose/></button>
                <input type="text" className="inputs inputsName" placeholder="Name" ref={(input)=>nombre = input}/>
                <input type="text" className="inputs inputWallet" placeholder="Wallet" ref={(input)=>address = input}/>
                <input type="text" className="inputs inputMotive" placeholder="Motive" ref={(input)=>nombre = input}/>
                <input type="text" className="inputs inputAmount" placeholder="Amount" ref={(input)=>amount = input}/>
                <button type="submit" className="buttonPay" onSubmit={()=>{
                    payment(nombre, address, amount.value)
                }}>Pay</button>
            </form>
        </div>
    )
}


export default Worker