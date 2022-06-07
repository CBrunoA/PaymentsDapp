import React from 'react'
import './worker.css'
import {BsArrowBarUp} from 'react-icons/bs'



const Worker = (payment) => {
    var nombre = null;
    var address = null;
    var amount = null;

    const [open, setOpen] = React.useState(false);
    const handleClick = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);

    return (
        <div>
            <form className="containerW" onSubmitCapture={(event) => {
                event.preventDefault()
                }
            }>
                <input type="text" className="inputs inputsName" placeholder="Name" ref={(input)=>nombre = input}/>
                <input type="text" className="inputs inputWallet" placeholder="Wallet" ref={(input)=>address = input}/>
                <input type="text" className="inputs inputMotive" placeholder="Motive" ref={(input)=>nombre = input}/>
                <input type="text" className="inputs inputAmount" placeholder="Amount" ref={(input)=>amount = input}/>
                <button type="submit" className="buttonPay" onSubmit={()=>{payment(nombre, address, amount.value)
                }}>Pay</button>
            </form>
        </div>
    )
}


export default Worker