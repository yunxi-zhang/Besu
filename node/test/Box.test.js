const { expect } = require("chai");
const { ethers, network } = require("hardhat");

// Start test block
describe("Box", function () {
  let Box;
  let ownerBox;
  let owner;
  let addr1;
  let addr2;


  before(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    console.log("owner:", owner.address);
    console.log("addr1:", addr1.address);
    console.log("addr2:", addr2.address);

    Box = await ethers.getContractFactory("Box");
    ownerBox = await upgrades.deployProxy(Box, [owner.address], {
      initializer: "initialize", 
    });
    await ownerBox.waitForDeployment();
    console.log("Contract deployed to address:", ownerBox.target);
  });

  it("should allow owner to get a value", async function () {
    const newValue = 10;
    const tx = await ownerBox.store(newValue);
    await tx.wait();

    expect(tx).to.emit(ownerBox, newValue).withArgs(owner.address, newValue);
    const value = await ownerBox.retrieve();
    console.log('value:', value);
    expect(value).to.equal(newValue);
  });

  it("should disallow user1 to get a value", async function () {
    const newValue = 20;
    const tx = await ownerBox.store(newValue);
    await tx.wait();
    expect(tx).to.emit(ownerBox, newValue).withArgs(owner.address, newValue);
    const value = await ownerBox.connect(owner).retrieve();
    console.log('value:', value);
    await ownerBox.connect(addr1).retrieve();
    // expect(tx).to.emit(ownerBox, newValue).withArgs(owner.address, newValue);
    // try {
     
    // } catch (error) {
    //   console.log('error:', error);
    //   expect(error).to.include();
    // }
  });
});
