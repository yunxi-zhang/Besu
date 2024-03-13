import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

// Start test block
describe("RBAC", function () {
  let RBAC;
  let adminRBAC: any;
  let admin: any;
  let addr1: any;

  before(async function () {
    [admin, addr1] = await ethers.getSigners();
    console.log("admin:", admin.address);
    console.log("addr1:", addr1.address);

    RBAC = await ethers.getContractFactory("RBAC");
    adminRBAC = await upgrades.deployProxy(RBAC, [admin.address], {
      initializer: "initialize",
    });
    await adminRBAC.waitForDeployment();
    console.log("Contract deployed to address:", adminRBAC.target);
  });

  it("should allow admin to get a value by using the admin retrieve function", async function () {
    const newValue = 10;
    const tx = await adminRBAC.store(newValue);
    await tx.wait();
    const value = await adminRBAC.retrieve();
    expect(value).to.equal(newValue);
  });

  it("should disallow a default admin to store value by using the admin store function", async function () {
    const newValue = 10;
    try {
      await adminRBAC.adminStore(newValue);
    } catch (error: any) {
      expect(error.message).to.equal("Execution reverted");
    }
  });

  it("should allow user1 to get a value by using the user retrieve function", async function () {
    const newValue = 20;
    const tx = await adminRBAC.store(newValue);
    await tx.wait();
    const userGotPermission = await adminRBAC.grantUserRole(addr1.address);
    await userGotPermission.wait();
    const value = await adminRBAC.connect(addr1).userRetrieve();
    expect(value).to.equal(newValue);
  });

  it("should disallow user1 to store a value", async function () {
    const newValue = 30;
    try {
      await adminRBAC.connect(addr1).store(newValue);
    } catch (error: any) {
      expect(error.message).to.equal("Execution reverted");
    }
  });

  it("should disallow user1 to get a value by using the admin retrieve function", async function () {
    const newValue = 40;
    const tx = await adminRBAC.store(newValue);
    await tx.wait();
    const userGotPermission = await adminRBAC.grantUserRole(addr1.address);
    await userGotPermission.wait();
    try {
      await adminRBAC.connect(addr1).retrieve();
    } catch (error: any) {
      expect(error.message).to.equal("Execution reverted");
    }
  });
});
