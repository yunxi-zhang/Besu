// test/Box.test.js
// Load dependencies
const { expect } = require("chai");
const hre = require("hardhat");
const { Contract, Wallet } = require("ethers");
const path = require("path");
const fs = require('fs').promises;

// Start test block
describe("Box", function () {
  var url = "http://127.0.0.1:8545";
  const abi = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
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
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
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
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  const address = "0xBBb828336c7e0c0D5b43c61e1568f4B10C9B0eD8";
  before(async function () {
    this.Box = await hre.ethers.deployContract("Box");
  });

  beforeEach(async function () {
    this.box = await this.Box.waitForDeployment();
  });

  // Test case
  it("retrieve returns a value previously stored", async function () {
    var provider = new ethers.JsonRpcProvider(url);
    const box = new Contract(address, abi, provider);
    const data = await fs.readFile(path.join(__dirname, "/key"))
    const signer = new Wallet(data.toString(), provider);
    const contractSigner = box.connect(signer);
    const tx = await contractSigner.store(42);
    hash = tx.hash;
    expect((await box.retrieve()).toString()).to.equal("42");
  });
});
