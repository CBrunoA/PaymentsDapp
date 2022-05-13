import React, {Component, useState} from 'react'
import '../Payments.css'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsArrowBarUp} from 'react-icons/bs'
import {BsArrowBarDown} from 'react-icons/bs'

class MainButtons extends Component{
    constructor(){
        super()
        this.state={
            showHideDeposit: false,
            showHideWithdraw: false
        }  
    }
    
    hideComponent(name){
        switch(name){
            case "deposit":
                this.setState({showHideDeposit: !this.state.showHideDeposit})
                this.setState({showHideWithdraw: false})
             case "withdraw":
                this.setState({showHideWithdraw: !this.state.showHideWithdraw})
                this.setState({showHideDeposit: false})
        }
    }    
    render(){
        return (
            <div className="container1">
                <div className="btnP btnP-colored"><AiOutlinePlus/> Add Worker</div>
                <button className="btnP" onClick={()=>this.hideComponent("deposit")}><BsArrowBarUp/> Deposit </button>
                <div className="btnP" ><BsArrowBarDown/> Withdraw</div>
                <p className="note">*Note: deposits are not necessary, only if you 
                want automated payments or to store money here. You can withdraw
                your funds anytime.*</p>  
                {this.showHideDeposit?<form className="deposit" onSubmitCapture={(event) => {
                    event.preventDefault()
                    const depositAmount = this.depositAmount
                    this.deposit(depositAmount)
                    }
                    }>
                    <input type="text" className="inputs" placeholder="Amount to deposit" 
                    ref={(input)=>this.depositAmount = input}/>
                    <button className="btnS btnS-colored"><BsArrowBarUp/>Send</button>
                </form>:null}
            </div>
        )    
    }
}

      
/*const MainButtons = (depositAmount, deposit, withdrawAmount, withdraw) =>{
    const [showDeposit, setShowDeposit] = useState(false)
    const onClickDeposit = ()=> setShowDeposit(false)
    const [showWithdraw, setShowWithdraw] = useState(false)
    const onClickWithdraw = ()=> setShowWithdraw(false)

    return(
        <div className="container1">
            <div className="btnP btnP-colored"><AiOutlinePlus/> Add Worker</div>
            <button className="btnP" onClick={onClickDeposit}><BsArrowBarUp/> Deposit </button>
            <div className="btnP" onClick={onClickWithdraw}><BsArrowBarDown/> Withdraw</div>
            <p className="note">*Note: deposits are not necessary, only if you 
            want automated payments or to store money here. You can withdraw
            your funds anytime.*</p>  
            {showDeposit ? <Deposit depositAmount = {depositAmount} deposit = {deposit}/>: null}

            {showWithdraw ? <Withdraw withdrawAmount = {withdrawAmount} withdraw = {withdraw}/> : null}
        </div>
    )
}*/

export default MainButtons