// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

async function main() {
  /*
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );

  */
  const ISSUERNAME="American Honda Company";
    const ISSUERSYMBOL="US02665WDN83";

  const Example1 = await ethers.getContractFactory("Example1");
  const example1 = await Example1.deploy(ISSUERNAME,ISSUERSYMBOL,18, 2500);
  console.log("Contract BondExample1 deployed to: ", example1.address);

  const Example2 = await ethers.getContractFactory("Example2");
  const example2 = await Example2.deploy(1000);
  console.log("Contract BondExample2 deployed to: ", example2.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
