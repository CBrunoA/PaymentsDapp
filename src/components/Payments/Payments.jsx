import React, {Component} from 'react'
import Web3 from 'web3'
import payments_contract from '../../abis/Payments.json'
import Nav from './Nav/Nav'
import Accnav from './AccNav/Accnav'
import MainButtons from './MainButtons/MainButtons'
import './Payments.css'


class Payments extends Component{

  /**WEB3**/

  //LOAD WEB3
  async componentDidMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
    await this.balance()
    //await this.viewDeposit()
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
      currentDepositAmount: "",
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
    const depositWei = await web3.contract.methods.viewFunds.call()
    const currentDepositAmount = web3.utils.fromWei(await depositWei, 'ether') + 'ETH'
    this.setState({currentDepositAmount})
  }
  deposit = async(cantidad, mensaje)=>{
    try{
      console.log(mensaje)  
      const web3 = window.web3
      const accounts = await web3.eth.getAccounts()
      const ethers = web3.utils.toWei(this.cantidad.value, 'ether')
      await this.state.contract.methods.Deposit(cantidad).send({from: accounts[0], value: ethers})
    }catch(err){
      this.setState({errMessage: err.message})
    }finally{
      this.setState({loading:false})
    }
  }
  withdraw = async(withdrawAmount)=>{
    const web3 = window.web3
    const ethers = web3.utils.toWei(this.depositAmount.value, 'ether')
    await web3.contract.methods.Withdraw(withdrawAmount).send({from: this.account, value: ethers})
  }
  payment = async(nombre, address, amount) =>{
    const web3 = window.web3
    const ethers = web3.utils.toWei(this.amount.value, 'ether')
    await web3.contract.methods.Payment(nombre, address, amount).send({from:this.account, value: ethers})
  }

  envio = async(cantidad, mensaje) => {
    try{
        console.log(mensaje)  
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        const ethers = web3.utils.toWei(this.cantidad.value, 'ether')
        await this.state.contract.methods.CompraTokens(cantidad).send({from: accounts[0], value: ethers})
    }catch(err){
        this.setState({errMessage: err.message})
    }finally{
        this.setState({loading:false})
    }
  }
  render(){ 
    return(
      <section id="payments">

        <form onSubmitCapture={(event) => {
            event.preventDefault()
            const cantidad = this.cantidad.value
            const web3 = window.web3
            const ethers = web3.utils.toWei(this.cantidad.value, 'ether')
            const mensaje = "Deposito en ejecucion..."
            this.deposit(cantidad, ethers,mensaje)
            }
        }>
            <input type="text" 
            className='form-control mb-1' 
            placeholder="Cantidad de tokens a comprar"
            ref={(input)=>this.cantidad = input}/>

            <input type="submit" 
            className='bbtn btn-block btn-danger btn-sm' 
            value="DEPOSIT"/>
         </form>

        <form onSubmitCapture={(event) => {
            event.preventDefault()
            const cantidad = this.cantidad.value
            const web3 = window.web3
            const ethers = web3.utils.toWei(this.cantidad.value, 'ether')
            const mensaje = "Compra de tokens en ejecución..."
            this.envio(cantidad, ethers,mensaje)
            }
        }>
            <input type="text" 
            className='form-control mb-1' 
            placeholder="Cantidad de tokens a comprar"
            ref={(input)=>this.cantidad = input}/>

            <input type="submit" 
            className='bbtn btn-block btn-danger btn-sm' 
            value="COMPRAR TOKENS"/>
         </form>
        <div className="title">MANAGE YOUR PAYMENTS</div>

        <MainButtons depositAmount={this.state.depositAmount} deposit={this.deposit} 
        withdrawAmount={this.state.withdrawAmount} withdraw={this.withdraw} payment={this.payment}/>

        <Nav/>
        <Accnav account={this.state.account} balance={this.state.balance} viewDeposit={this.state.currentDepositAmount}/>
      </section>
    )
  } 
}

export default Payments