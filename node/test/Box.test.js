// test/Box.test.js
// Load dependencies
const { expect } = require("chai");
const hre = require("hardhat");
const { Contract, Wallet } = require("ethers");
const path = require("path");
const fs = require("fs").promises;
const url = "http://127.0.0.1:8545";

// Start test block
describe("Box", function () {
  const abi = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "ValueChanged",
      type: "event",
    },
    {
      inputs: [],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "retrieve",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "store",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "x",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const address = "0x02E5e3d63523982AD71B7866aDD7272FF6897eBB";

  // Test case
  it("retrieve a value less than 42 returns a value previously stored", async function () {
    var provider = new ethers.JsonRpcProvider(url);
    const box = new Contract(address, abi, provider);
    const data = await fs.readFile(path.join(__dirname, "/keys/adminKey"));
    const signer = new Wallet(data.toString(), provider);
    const contractSigner = box.connect(signer);
    await contractSigner.store(43);
    expect((await box.retrieve()).toString()).to.equal("43");
  });
});
