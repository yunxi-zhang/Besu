const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FungibleToken", function () {
  let Contract;
  let contractInstance;
  const tokenName = "star";
  const tokenSymbol = "*";
  const totalAmount = 1000;
  const transferAmount = 300;

  before(async function () {
    [owner, addr1] = await ethers.getSigners();
    Contract = await ethers.getContractFactory("FungibleToken");
    contractInstance = await upgrades.deployProxy(
      Contract,
      [tokenName, tokenSymbol, owner.address, totalAmount],
      {
        initializer: "initialize",
      }
    );
    await contractInstance.waitForDeployment();
    console.log("Contract deployed to address:", contractInstance.target);
  });

  it("should get a token name", async function () {
    const myTokenName = await contractInstance.name();
    console.log("myTokenName:", myTokenName);
    expect(myTokenName).to.equal(tokenName);
  });

  it("should get a token symbol", async function () {
    const myTokenSymbol = await contractInstance.symbol();
    console.log("myTokenSymbol:", myTokenSymbol);
    expect(myTokenSymbol).to.equal(tokenSymbol);
  });

  it("should get an initial total supply", async function () {
    const myTokenTotalSupply = await contractInstance.totalSupply();
    console.log("myTokenTotalSupply:", myTokenTotalSupply);
    expect(myTokenTotalSupply).to.equal(totalAmount);
  });

  it("should allow owner to get the remaining amount of the owner account", async function () {
    const tx = await contractInstance.transfer(addr1.address, transferAmount);
    await tx.wait();

    const ownerBalance = await contractInstance.balanceOf(owner.address);
    console.log("ownerBalance:", ownerBalance);
    expect(ownerBalance).to.equal(totalAmount - transferAmount);
  });

  it("should allow owner to get the remaining amount of the addr1 account", async function () {
    const addr1Balance = await contractInstance.balanceOf(addr1.address);
    console.log("addr1Balance:", addr1Balance);
    expect(addr1Balance).to.equal(transferAmount);
  });

  it("should disallow addr1 to get the remaining amount", async function () {
    try {
      await contractInstance.connect(addr1).balanceOf(addr1.address);
    } catch (error) {
      expect(error.message).to.equal("Execution reverted");
    }
  });

  it("should get 0 when calling allowance by default", async function () {
    const allowance = await contractInstance.allowance(owner.address, addr1.address);
    console.log('allowance:', allowance);
    expect(allowance).to.equal(0);
  });

  it("should get 10 when calling allowance for addr1 on behalf of owner", async () => {
    const allowance = 10; 
    const tx1 = await contractInstance.approve(addr1.address, allowance);
    await tx1.wait();

    const allowanceResult = await contractInstance.allowance(owner.address, addr1.address);
    console.log('allowance result:', allowanceResult);
    expect(allowanceResult).to.equal(allowance);
  })

  it("should get 10 when calling allowance for addr1 on behalf of owner again without resetting approve again", async () => {
    const allowance = 10; 
    const allowanceResult = await contractInstance.allowance(owner.address, addr1.address);
    console.log('allowance result:', allowanceResult);
    expect(allowanceResult).to.equal(allowance);
  })

  it("should expect the right balance of each account and right allowance after the addr1 transfers the right amount on behalf of the owner", async () => {
    const onBehalfTransferAmount = 10; 
    const tx = await contractInstance.connect(addr1).transferFrom(owner.address, addr1.address, onBehalfTransferAmount);
    await tx.wait();
    const allowanceResult = await contractInstance.allowance(owner.address, addr1.address);
    console.log('allowance result:', allowanceResult);
    expect(allowanceResult).to.equal(0);
    
    const ownerBalance = await contractInstance.balanceOf(owner.address);
    console.log("ownerBalance:", ownerBalance);
    expect(ownerBalance).to.equal(totalAmount - transferAmount - onBehalfTransferAmount);

    const addr1Balance = await contractInstance.balanceOf(addr1.address);
    console.log("addr1Balance:", addr1Balance);
    expect(addr1Balance).to.equal(transferAmount + onBehalfTransferAmount);
  })
});
