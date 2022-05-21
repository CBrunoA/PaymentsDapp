import React, {Component} from 'react'
import Web3 from 'web3'
import payments_contract from '../../abis/Payments.json'
import Nav from './Nav/Nav'
import Accnav from './AccNav/Accnav'
import MainButtons from './MainButtons/MainButtons'
import Worker from './Workers/Worker'
import './Payments.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsArrowBarUp} from 'react-icons/bs'
import {BsArrowBarDown} from 'react-icons/bs'

class Payments extends Component{

  /**WEB3**/

  //LOAD WEB3
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
    await this.balance()
    await this.viewDeposit()
  }

  async loadWeb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else{
      window.alert("No Web3 provider detected")
    }
  }

  async loadBlockchainData(){
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    console.log('Account:', this.state.account)
    const networkId = '5777' //Ganache -> 5777
    console.log('networkId:',networkId)
    const networkData = payments_contract.networks[networkId]
    console.log('NetworkData', networkData)

    if(networkData){
      const abi = payments_contract.abi
      console.log('abi', abi)
      const address = networkData.address
      console.log('address:', address)
      const contract = new web3.eth.Contract(abi,address)
      this.setState({contract})
    }else{
      window.alert('Smart contract has not been deployed')
    }
  }

  /* Setting the state of the component. */
  constructor(props){
    super(props)
    this.state = {
      contract: null,
      loading: false,
      errMessage: "",
      account: "",
      balance: "",
      constructor: "",
      depositAmount: "",
      withdrawAmount: "",
    }
  }

  //Balance 
  balance = async() => {
    const web3 = window.web3
    const balanceWei = await web3.eth.getBalance(this.state.account)
    const balance = web3.utils.fromWei(await balanceWei, 'ether') + ' ETH'
    this.setState({balance})
  }

  //Deposit
  viewDeposit = async() =>{
    const web3 = window.web3
    const depositWei = await web3.payments_contract.methods.viewFunds.call()
    const depositAmount = web3.utils.fromWei(await depositWei, 'ether') + 'ETH'
    this.setState({depositAmount})
  }
  deposit = async(depositAmount)=>{
    const web3 = window.web3
    const ethers = web3.utils.toWei(this.depositAmount.value, 'ether')
    await web3.payments_contract.methods.Deposit(depositAmount).send({from: this.account, value: ethers})
  }
  withdraw = async(withdrawAmount)=>{
    const web3 = window.web3
    const ethers = web3.utils.toWei(this.depositAmount.value, 'ether')
    await web3.payments_contract.methods.Withdraw(withdrawAmount).send({from: this.account, value: ethers})
  }
  payment = async(nombre, address, amount) =>{
    const web3 = window.web3
    const ethers = web3.utils.toWei(this.amount.value, 'ether')
    await web3.payments_contract.methods.Payment(nombre, address, amount).send({from:this.account, value: ethers})
  }
  
  render(){ 
    return(
      <section id="payments">
        <div className="title">MANAGE YOUR PAYMENTS</div>

        <MainButtons depositAmount={this.state.depositAmount} deposit={this.deposit} 
        withdrawAmount={this.state.withdrawAmount} withdraw={this.withdraw} payment={this.payment}/>

        <Nav/>
        <Accnav account={this.state.account} balance={this.state.balance}/>
      </section>
    )
  } 
}

export default Payments