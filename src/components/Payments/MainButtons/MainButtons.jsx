import React, {Component, useState} from 'react'
import '../Payments.css'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import Worker from '../Workers/Worker'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsArrowBarUp} from 'react-icons/bs'
import {BsArrowBarDown} from 'react-icons/bs'
import {MdPictureAsPdf} from 'react-icons/md'
import './mainbuttons.css'

class MainButtons extends Component{
    constructor(props){
        super(props)
        this.state={
            showHideDeposit: false,
            showHideWithdraw: false,
            showHideWorker: false
        }  
    }
    
    hideComponent(name){
        switch(name){
            case "deposit":
                this.setState({showHideWithdraw: false})
                this.setState({showHideWorker: false})
                this.setState({showHideDeposit: !this.state.showHideDeposit})
                break;
            case "withdraw":
                this.setState({showHideDeposit: false})
                this.setState({showHideWorker: false})
                this.setState({showHideWithdraw: !this.state.showHideWithdraw})
                break;
            case "worker":
                this.setState({showHideWithdraw: false})
                this.setState({showHideDeposit: false})
                this.setState({showHideWorker: !this.state.showHideWorker})
                break;
            case "close":
                this.setState({showHideWithdraw: false})
                this.setState({showHideDeposit: false})
                this.setState({showHideWorker: false})
                break;
        }
    }    
    render(){
        const {showHideDeposit, showHideWithdraw, showHideWorker} = this.state
        return (
            <div className="container1">
                <div className="btnP btnP-colored" onClick={()=>this.hideComponent("worker")}><AiOutlinePlus/> Add Worker</div>
                <button className="btnP" onClick={()=>this.hideComponent("deposit")}><BsArrowBarUp/> Deposit </button>
                <button className="btnP" onClick={()=>this.hideComponent("withdraw")}><BsArrowBarDown/> Withdraw</button>
                <button className="btnP" onClick={""}><MdPictureAsPdf/> Payments History</button>
                <p className="note">*Note: deposits are not necessary, only if you 
                want to store funds here to make your payments, but you can pay directly from your wallet *</p>  
                {showHideDeposit ? <Deposit depositAmount = {this.depositAmount} deposit = {this.deposit}/> : null}               
                {showHideWithdraw && <Withdraw withdrawAmount = {this.withdrawAmount} withdraw = {this.withdraw}/>}
                {showHideWorker ? <Worker payment={this.payment}/>:null}
            </div>
        )    
    }
}
/*
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
*/
      
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