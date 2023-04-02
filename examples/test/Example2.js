const {expect} = require('chai');

describe("Contract: BondExample2", ()=>{
    const ISSUERNAME="American Honda Company";
    const ISSUERSYMBOL="US02665WDN83";
    it("should create a new token with name, symbol and initial supply", async ()=>{
        BondToken = await ethers.getContractFactory("Example2");
        const bondToken = await BondToken.deploy(3000);
        await bondToken.deployed();

        expect (await bondToken.name()).to.equal(ISSUERNAME);
        expect (await bondToken.symbol()).to.equal(ISSUERSYMBOL);
        expect (await bondToken.totalSupply()).to.equal(3000);
    });
});