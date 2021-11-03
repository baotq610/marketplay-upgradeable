// scripts/upgrade.js
require("dotenv").config();
const { ethers, upgrades } = require("hardhat");

const nftMarketAddress = "";

async function main() {
  if (nftMarketAddress == "") {
    console.log("not found the NFTMarket address to upgrade");
    return;
  }

  console.log("NFTMarket address", nftMarketAddress);
  const NFTMarketV2Fac = await ethers.getContractFactory("NFTMarketV2");
  await upgrades.upgradeProxy(nftMarketAddress, NFTMarketV2Fac);
  console.log("NFTMarket upgraded");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
