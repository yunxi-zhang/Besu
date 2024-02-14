// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory('Box');
  console.log("Upgrading Box...");
  const address = "0xE392C8245e278fe9D1d4d10A0e80fc743fe74393";
  await upgrades.upgradeProxy(address, Box);
  console.log("Box upgraded");
}

main();