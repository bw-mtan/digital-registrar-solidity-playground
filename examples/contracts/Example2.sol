// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Example2 is ERC20 {
    constructor(uint256 initialSupply) ERC20("American Honda Company","US02665WDN83") {
        _mint(msg.sender, initialSupply);
    }
}