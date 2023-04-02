// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Example1 {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor(string memory _name, string memory _symbol, uint8 _decimals, uint256 _totalSupply){
        name=_name;
        symbol=_symbol;
        decimals=_decimals; // can be moved to constants
        totalSupply = _totalSupply;
        balanceOf[msg.sender] = _totalSupply;
    }
}
