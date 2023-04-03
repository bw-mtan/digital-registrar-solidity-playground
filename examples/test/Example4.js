const { expect } = require('chai');
const { ethers } = require('hardhat');

describe("Contract: BondExample4", () => {
    let BondToken;
    let bondToken;
    const _ISSUERNAME="American Honda Company";
    const _ISSUERSYMBOL="US02665WDN83";
    const _MAX_SUPPLY = 2000;

    beforeEach(async () => {
        [owner] = await ethers.getSigners();
        BondToken = await ethers.getContractFactory("Example4");
        bondToken = await BondToken.deploy(_ISSUERNAME, _ISSUERSYMBOL, owner.address, _MAX_SUPPLY );
    });
    
    describe("Deployment", function(){
        it("should set the correct name", async function() {
            expect(await bondToken.name()).to.equal(_ISSUERNAME);
        });
        it("should set the correct symbol", async function() {
            expect(await bondToken.symbol()).to.equal(_ISSUERSYMBOL);
        });
        it("should set the correct total supply", async function() {
            expect(await bondToken.totalSupply()).to.equal(ethers.BigNumber.from("2000"));
        });
        it("should assign the total Supply to the owner", async function(){
            expect(await bondToken.bondBalances(owner.address)).to.equal(ethers.BigNumber.from("2000"))
        })
    });
    it('should be able to mint new token', async ()=>{
        await bondToken.mint(owner.address, 500);
        expect(await bondToken.totalBondSupply()).to.equal(ethers.BigNumber.from("2500"))
        expect(await await bondToken.totalSupply()).to.equal(ethers.BigNumber.from("2500"));
        expect(await bondToken.bondBalances(owner.address)).to.equal(ethers.BigNumber.from("2500"));
    });
    it('should be able to burn token', async ()=>{
        await expect(bondToken.burn(owner.address,2100)).to.be.revertedWith("No more tokens to burn");
         expect(await bondToken.totalSupply()).to.equal(ethers.BigNumber.from("2000"))
        expect(await bondToken.bondBalances(owner.address)).to.equal(ethers.BigNumber.from("2000"));
    });
});