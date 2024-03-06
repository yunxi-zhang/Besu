const { ethers, upgrades } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying Box...");
  const box = await upgrades.deployProxy(Box, [deployer.address], {
    initializer: "initialize",
  });
  await box.waitForDeployment();
  console.log("Box deployed to:", box.target);
  const logDir = path.join(__dirname, "../contractLogs/");
  const writer = fs.createWriteStream(logDir + "/deployContractLog.json");
  const timeStamp = await Date.now();
  const date = await new Date(timeStamp);
  console.log("timeStamp:", timeStamp);
  console.log("date:", date);
  await writer.write(
    '{"contract":"Box", "address":"' +
      box.target +
      '", "timeStamp":"' +
      timeStamp +
      '", "humanReadableTimeStamp":"' +
      date +
      '"}'
  );
}

main();
