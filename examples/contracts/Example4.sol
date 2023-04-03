// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

// Supports multiple bond minting and burning
contract Example4 is ERC20, Ownable {
    uint256 public totalBondSupply;
    address public issuer;

    mapping (address => uint256) public bondBalances;
    
    constructor(string memory _name, string memory _symbol, address _issuer,uint256 _totalSupply ) ERC20(_name, _symbol) {
        totalBondSupply = _totalSupply;
        issuer = _issuer;
        bondBalances[_issuer] = _totalSupply;
        _mint(_issuer , _totalSupply);
    }

    // mint new tokeny
    // increases total bond supply
     function mint(address _account, uint256 _amount) external onlyOwner {
           totalBondSupply += _amount;
           bondBalances[_account] += _amount;
          _mint(_account, _amount);
     } 
    function burn(address _account, uint256 _amount) external {
        bool balance = false;
        unchecked {
            balance = bondBalances[_account] - _amount < 0;
        }
        require(balance, "No more tokens to burn");
        totalBondSupply -= _amount;
        bondBalances[_account] -= _amount;
        _burn(_account, _amount);
    }
    
}