/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
const fs = require("fs");
const privateKey =
  fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
      chainId: 4,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/726047d903964037805be06d24e61517",
      accounts: [privateKey],
      chainId: 4,
    },
  },
  etherscan: {
    apiKey: "JG5SU98Z1GYVTJ12EUT4FXWWTWKVFYPRGR",
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
