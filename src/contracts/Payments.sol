pragma solidity >=0.4.22 <0.9.0;

contract Payments{

    //INIT VARIABLES

    //Contract owner
    address private owner;
    
    //USER VARIABLES
    address[] users;
    struct Receiver{
        address dir;
        string name;
        uint amount;
    }
    mapping(address => Receiver[]) receivers;
    mapping(address => address[]) adminAddresses;   

    //PAYMENT VARIABLES
    mapping(address => uint) balance; //balance of users wallet
    mapping(address => uint) funds; //total funds deposited by a user


    //EVENTS
    event receiverCreated(address, address, string, uint);
    event recevierModified(address, address, string, uint);
    event receiverDeleted(address, address, string, uint);
    event paymentDone(address, address, string, uint);


    //CONTRACT VARIABLES
    
    constructor(){
        owner = msg.sender;
    }

    //FUNCTIONS

    //----------------------------View functions---------------------------

    function viewBalance() public view returns(uint){
        return msg.sender.balance;
    }

    function viewFunds() public view returns(uint){
        return funds[msg.sender];
    }

    //--------------------------Other functions----------------------------


    //---------------------------Receiver functions------------------------

    //Add new receiver
    function AddReceiver(address _dir, string memory _name, uint _amount) public {
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
    }   

    //Modify receiver
    function ModifyReceiver(uint _index, address _dir, string memory _name, uint _amount) public {

    }

    //REVISAR
    //Delete receiver
    function DeleteReceiver(uint _index) public{
        Receiver[] storage _receiverArray = receivers[msg.sender];
        delete _receiverArray[_index];
        //HACER
    }

    //--------------------Payment functions------------------------
    
    //Function payment
    /*function Payment(uint _index) payable public{
        Receiver[] storage _receiverArray = receivers[msg.sender];
        //Enviar al contrato
        require(msg.value == _receiverArray[_index].amount);
        //Del contrato al usuario
        (bool success,) = payable(_receiverArray[_index].dir).call{value: _receiverArray[_index].amount}("");
        emit paymentDone(msg.sender, _receiverArray[_index].dir, _receiverArray[_index].name, _receiverArray[_index].amount);
    }*/


    function Deposit(uint _amount) payable public{
        require(msg.value == _amount);
        funds[msg.sender] += _amount;
    }

    function Withdraw(uint _amount) payable public{
        require(_amount <= funds[msg.sender]);
        (bool success,) = payable(msg.sender).call{value: _amount}("");
        funds[msg.sender] -= _amount;
    }

    function NormalPayment(string memory _name, address _address, uint _amount) payable public{
        require(msg.value==_amount);
        (bool success,) = payable(_address).call{value: _amount}("");
        emit paymentDone(msg.sender, _address, _name, _amount);
    }
    //Payment automatic. Then with JS we make the payment on time.
    function PaymentWithDeposit(string memory _name, address _address, uint _amount) payable public{
        require(_amount <= funds[msg.sender]);
        (bool success,) = payable(_address).call{value: _amount}("");
        funds[msg.sender] -= _amount; 
        emit paymentDone(msg.sender, _address, _name, _amount);
    }

    function Payment(string memory _name, address _address, uint _amount) payable public{
        if(funds[msg.sender] >= _amount){
            PaymentWithDeposit(_name, _address, _amount);
        }else{            
            NormalPayment(_name, _address, _amount);
        }
    }

}