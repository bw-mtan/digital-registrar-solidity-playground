// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Example3 is ERC20, Ownable {
    uint256 private constant _MAX_SUPPLY_TOKEN = 5000;

    constructor(uint256 initialSupply) ERC20("American Honda Company","US02665WDN83") {
        _mint(msg.sender, initialSupply);
    }
    // mint new token
    function mint(uint256 amount) external onlyOwner {
        require(totalSupply()+ amount <= _MAX_SUPPLY_TOKEN, "Exceeds maximum supply");
        _mint(msg.sender, amount);
    }
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}