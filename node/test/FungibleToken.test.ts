import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("FungibleToken", function () {
  let Contract;
  let contractInstance: any;
  let owner: HardhatEthersSigner;
  let addr1: HardhatEthersSigner;
  const tokenName = "star";
  const tokenSymbol = "*";
  const totalAmount = 1000;
  const transferAmount = 300;
  const mintAmount = 100;
  const burnAmount = 200;

  before(async () => {
    [owner, addr1] = await ethers.getSigners();
    console.log("owner:", owner.address);
    console.log("addr1:", addr1.address);
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

  it("should get a token name", async () => {
    const myTokenName = await contractInstance.name();
    console.log("myTokenName:", myTokenName);
    expect(myTokenName).to.equal(tokenName);
  });

  it("should get a token symbol", async () => {
    const myTokenSymbol = await contractInstance.symbol();
    console.log("myTokenSymbol:", myTokenSymbol);
    expect(myTokenSymbol).to.equal(tokenSymbol);
  });

  it("should get an initial total supply", async () => {
    const myTokenTotalSupply = await contractInstance.totalSupply();
    console.log("myTokenTotalSupply:", myTokenTotalSupply);
    expect(myTokenTotalSupply).to.equal(totalAmount);
  });

  it("should allow owner to get the remaining amount of the owner account", async () => {
    const tx = await contractInstance.transfer(addr1.address, transferAmount);
    await tx.wait();

    const ownerBalance = await contractInstance.balanceOf(owner.address);
    console.log("ownerBalance:", ownerBalance);
    expect(ownerBalance).to.equal(totalAmount - transferAmount);
  });

  it("should allow owner to get the remaining amount of the addr1 account", async () => {
    const addr1Balance = await contractInstance.balanceOf(addr1.address);
    console.log("addr1Balance:", addr1Balance);
    expect(addr1Balance).to.equal(transferAmount);
  });

  it("should disallow addr1 to get the remaining amount", async () => {
    try {
      await contractInstance.connect(addr1).balanceOf(addr1.address);
    } catch (error: any) {
      expect(error.message).to.equal("Execution reverted");
    }
  });

  it("should get 0 when calling allowance by default", async () => {
    const allowance = await contractInstance.allowance(
      owner.address,
      addr1.address
    );
    console.log("allowance:", allowance);
    expect(allowance).to.equal(0);
  });

  it("should get 10 when calling allowance for addr1 on behalf of owner", async () => {
    const allowance = 10;
    const tx1 = await contractInstance.approve(addr1.address, allowance);
    await tx1.wait();

    const allowanceResult = await contractInstance.allowance(
      owner.address,
      addr1.address
    );
    console.log("allowance result:", allowanceResult);
    expect(allowanceResult).to.equal(allowance);
  });

  it("should get 10 when calling allowance for addr1 on behalf of owner again without resetting approve again", async () => {
    const allowance = 10;
    const allowanceResult = await contractInstance.allowance(
      owner.address,
      addr1.address
    );
    console.log("allowance result:", allowanceResult);
    expect(allowanceResult).to.equal(allowance);
  });

  it("should expect the right balance of each account and right allowance after the addr1 transfers the right amount on behalf of the owner", async () => {
    const onBehalfTransferAmount = 10;
    const tx = await contractInstance
      .connect(addr1)
      .transferFrom(owner.address, addr1.address, onBehalfTransferAmount);
    await tx.wait();
    const allowanceResult = await contractInstance.allowance(
      owner.address,
      addr1.address
    );
    console.log("allowance result:", allowanceResult);
    expect(allowanceResult).to.equal(0);

    const ownerBalance = await contractInstance.balanceOf(owner.address);
    console.log("ownerBalance:", ownerBalance);
    expect(ownerBalance).to.equal(
      totalAmount - transferAmount - onBehalfTransferAmount
    );

    const addr1Balance = await contractInstance.balanceOf(addr1.address);
    console.log("addr1Balance:", addr1Balance);
    expect(addr1Balance).to.equal(transferAmount + onBehalfTransferAmount);
  });

  it("should expect the total supply is increased after minting", async () => {
    const tx = await contractInstance.mint(owner.address, mintAmount);
    await tx.wait();

    const myTokenTotalSupply = await contractInstance.totalSupply();
    console.log("myTokenTotalSupply:", myTokenTotalSupply);
    expect(myTokenTotalSupply).to.equal(totalAmount + mintAmount);
  });

  it("should expect the total supply is decreased after burning", async () => {
    const tx = await contractInstance.burn(owner.address, burnAmount);
    await tx.wait();

    const myTokenTotalSupply = await contractInstance.totalSupply();
    console.log("myTokenTotalSupply:", myTokenTotalSupply);
    expect(myTokenTotalSupply).to.equal(totalAmount + mintAmount - burnAmount);
  });
});
