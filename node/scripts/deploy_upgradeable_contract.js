const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");
  console.log('Deploying Box...');
  const box = await upgrades.deployProxy(Box, [45], { initializer: 'store' });
  await box.waitForDeployment();
  console.log('Box deployed to:', box.target);
}

main();
