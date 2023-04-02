const { expect } = require('chai');
const { ethers } = require('hardhat');

describe("Contract: BondExample3", () => {
    it('should mint token', async()=>{
        BondToken = await ethers.getContractFactory("Example3");
        const bondToken = await BondToken.deploy(4000); 

        // mint 1000 tokens
        await bondToken.mint(1000);
        expect(await bondToken.totalSupply()).to.equals(5000);
    });

    it('should revert with error token', async()=>{
        BondToken = await ethers.getContractFactory("Example3");
        const bondToken = await BondToken.deploy(4000); 

        // mint 2000 tokens
        await expect( bondToken.mint(2000)).to.be.revertedWith("Exceeds maximum supply");
        // should still be 4000 since the previous txn failed
        expect(await bondToken.totalSupply()).to.equals(4000);
    });


});