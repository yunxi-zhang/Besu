require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
const ADMIN_ACCOUNT = vars.get("ADMIN_ACCOUNT");
const USER1_ACCOUNT = vars.get("USER1_ACCOUNT");
const USER2_ACCOUNT = vars.get("USER2_ACCOUNT");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    besu: {
      url: "http://127.0.0.1:8545",
      accounts: [
        `${ADMIN_ACCOUNT}`,
        `${USER1_ACCOUNT}`,
        `${USER2_ACCOUNT}`,
      ],
    },
  },
  solidity: "0.8.24",
  sourcify: {
    enabled: true,
  },
  mocha: {
    timeout: 100000000,
  }
};
