pragma solidity ^0.5.16;

contract Powerball {
    uint public winning_number;

    // You can read from a state variable without sending a transaction.
    function getWinningNumber() public view returns (uint) {
        //TODO: Implement random function to calculate
        return winning_number;
    }
} 