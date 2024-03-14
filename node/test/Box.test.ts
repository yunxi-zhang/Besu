import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { expect } from "chai";
import { ContractFactory } from "ethers/contract";
import { ethers, upgrades } from "hardhat";

// Start test block
describe("Box", () => {
  let Box: ContractFactory;
  let ownerBox: any;
  let owner: HardhatEthersSigner;
  let addr1: HardhatEthersSigner;
  let addr2: HardhatEthersSigner;

  before(async () => {
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

  it("should allow owner to get a value", async () => {
    const newValue: string = "10";
    const tx = await ownerBox.store(newValue);
    await tx.wait();

    expect(tx).to.emit(ownerBox, newValue).withArgs(owner.address, newValue);
    const value = await ownerBox.retrieve();
    expect(value).to.equal(newValue);
  });

  it("should disallow user1 to get a value", async () => {
    const newValue: string = "20";
    const tx = await ownerBox.store(newValue);
    await tx.wait();
    expect(tx).to.emit(ownerBox, newValue).withArgs(owner.address, newValue);
    const value = await ownerBox.connect(owner).retrieve();
    try {
      await ownerBox.connect(addr1).retrieve();
    } catch (error: any) {
      expect(error.message).to.equal("Execution reverted");
    }
  });
});
