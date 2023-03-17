pragma solidity ^0.7.4;

contract SimpleStorage {
    // State variable to store a number
    uint public num;

    // You need to send a transaction to write to a state variable.
    function set(uint _num) public {
        num = _num;
    }

    // You can read from a state variable without sending a transaction.
    function get() public view returns (uint) {
        return num;
    }
} // https://mumbai.polygonscan.com/address/0x8Fb4AFDA5F9eaB08e86bf101B00f95Fb41463bd7