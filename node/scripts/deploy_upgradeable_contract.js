const { ethers, upgrades } = require("hardhat");
const fs = require("fs");
const path = require('path');

async function main() {
  const Box = await ethers.getContractFactory("Box");
  console.log('Deploying Box...');
  const box = await upgrades.deployProxy(Box, [45], { initializer: 'store' });
  await box.waitForDeployment();
  console.log('Box deployed to:', box.target);
  const logDir = path.join(__dirname, "../contractLogs/");
  const writer = fs.createWriteStream(logDir + '/deployContractLog.json');
  writer.write('{"contract":"Box", "address":"' + box.target + '", "timeStamp":"' + Date.now() + '", "humanReadableTimeStamp":"' + new Date(Date.now() * 1000) + '"}')
}

main();
