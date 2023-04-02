const {expect} = require('chai');

describe('Contract: BondExample1', function(){
    let BondToken;
    let bondToken;
    let owner;
    
    const ISSUERNAME="American Honda Company";
    const ISSUERSYMBOL="US02665WDN83";
    
    beforeEach(async function(){
        BondToken = await ethers.getContractFactory("Example1");
        [owner] = await ethers.getSigners();

        bondToken= await BondToken.deploy(ISSUERNAME, ISSUERSYMBOL, 18, ethers.utils.parseEther("2000"));
    })
    
    describe("Deployment", function(){
        it("should set the correct name", async function() {
            expect(await bondToken.name()).to.equal(ISSUERNAME);
        });
        it("should set the correct symbol", async function() {
            expect(await bondToken.symbol()).to.equal(ISSUERSYMBOL);
        });
        it("should set the correct decimals", async function() {
            expect(await bondToken.decimals()).to.equal(18);
        });
        it("should set the correct total supply", async function() {
            expect(await bondToken.totalSupply()).to.equal(ethers.utils.parseEther("2000"));
        });
        it("should assign the total Supply to the owner", async function(){
            expect(await bondToken.balanceOf(owner.address)).to.equal(ethers.utils.parseEther("2000"))
        })
    });

});