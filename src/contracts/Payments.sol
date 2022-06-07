pragma solidity ^0.8.0;

contract Payments{

    //INIT VARIABLES

    //Contract owner
    address private owner;
    
    //PAYMENT VARIABLES
    mapping(address => uint) balance; //balance of users wallet
    mapping(address => uint) funds; //total funds deposited by a user


    //EVENTS
    event receiverCreated(address, address, string, uint);
    event recevierModified(address, address, string, uint);
    event receiverDeleted(address, address, string, uint);
    event paymentDone(address, address, string, uint);


    //FUNCTIONS

    //----------------------------View functions---------------------------

    function viewFunds() public view returns(uint){
        return funds[msg.sender];
    }


    //---------------------------Receiver functions------------------------

    //Add new receiver
    /*function AddReceiver(address _dir, string memory _name, uint _amount) public {
        address _user = msg.sender;
        
        //Check if it is a new user 
        bool userExists = false;
        for(uint i = 0; i<users.length; i++){
            if(users[i] == _user){
                userExists = true;
                break;
            }
        }
        if(userExists = false){
            users.push(_user);
        }

        //Add the receiver
        Receiver[] storage _receiverArray = receivers[msg.sender];
        Receiver memory _receiver = Receiver(_dir, _name, _amount);
        _receiverArray.push(_receiver);
        receivers[_user] = _receiverArray;

        //emit event
        emit receiverCreated(_user, _dir, _name, _amount);
    }  */ 

    function EthPrice(uint _amount) internal pure returns (uint){
        return _amount*(1 ether);
    }

    function CompraTokens(uint _numTokens) public payable {
        // Calcular el coste de los tokens 
        uint coste = EthPrice(_numTokens);
        // Se requiere que el valor de ethers pagados sea equivalente al coste 
        require (msg.value >= coste, "Compra menos Tokens o paga con mas Ethers.");
        // Diferencia a pagar 
        uint returnValue = msg.value - coste;
        // Tranferencia de la diferencia 
        (bool success,) = payable(msg.sender).call{value: returnValue}("");
    }
    function Deposit(uint _amount) public payable{
        uint price = EthPrice(_amount);
        require(msg.value >= price, "Not enough funds");
        //funds[msg.sender] += _amount;
        //uint returnValue = msg.value - _amount;
        //(bool success,) = payable(msg.sender).call{value: returnValue}("");

    }

    function Withdraw(uint _amount) public payable{
        require(_amount <= funds[msg.sender]);
        (bool success,) = payable(msg.sender).call{value: _amount}("");
        funds[msg.sender] -= _amount;
    }

    function NormalPayment(string memory _name, address _address, uint _amount) public payable{
        require(msg.value>=_amount);
        (bool success,) = payable(_address).call{value: _amount}("");
        emit paymentDone(msg.sender, _address, _name, _amount);
    }
    //Payment automatic. Then with JS we make the payment on time.
    function PaymentWithDeposit(string memory _name, address _address, uint _amount) public payable{
        require(_amount <= funds[msg.sender]);
        (bool success,) = payable(_address).call{value: _amount}("");
        funds[msg.sender] -= _amount; 
        emit paymentDone(msg.sender, _address, _name, _amount);
    }

    function Payment(string memory _name, address _address, uint _amount) public payable{
        if(funds[msg.sender] >= _amount){
            PaymentWithDeposit(_name, _address, _amount);
        }else{            
            NormalPayment(_name, _address, _amount);
        }
    }
}