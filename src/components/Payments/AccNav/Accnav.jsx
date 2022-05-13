import React, {Component} from 'react'
import './accnav.css'

class Accnav extends Component{
  render(){
    const{account}=this.props;
    const{balance}=this.props;
    const{deposit}=this.props;
    return (
      <container>
          <p className="accnav">
              Account:
              <p className="address">{account}</p>
          </p>
          <p className="accnav">
              Balance: {balance} 
          </p>
          <p className="accnav">
              Deposit: {deposit} 
          </p>
      </container>
    )
  }
}

export default Accnav