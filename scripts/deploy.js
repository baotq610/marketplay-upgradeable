// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers, upgrades } = require("hardhat");

async function main() {
  const NFTMarketFactory = await ethers.getContractFactory("NFTMarket");
  console.log("Deploying NFTMarket...");
  const nftMarket = await upgrades.deployProxy(NFTMarketFactory, []);
  await nftMarket.deployed();
  console.log("NFTMarket deployed to:", nftMarket.address);

  // const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  // const nftMarket = await NFTMarket.deploy();
  // await nftMarket.deployed();
  // console.log("nftMarket deployed to:", nftMarket.address);

  const NFT = await ethers.getContractFactory("NFT");
  // const nft = await NFT.deploy(nftMarket.address);
  const nft = await upgrades.deployProxy(NFT, []);
  await nft.deployed();
  console.log("nft deployed to:", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
