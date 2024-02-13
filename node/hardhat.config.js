require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    besu: {
      url: "http://127.0.0.1:8545",
      accounts: [
        "0x0b4df1d9ac625e8a9cc2b4b8259e3849608ac34e3a02e83d7413a3c1755a6c3f",
      ],
    },
  },
  solidity: "0.8.24",
  sourcify: {
    enabled: true,
  },
};
