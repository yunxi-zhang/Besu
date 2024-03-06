// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const logDir = path.join(__dirname, "../contractLogs/");
  const contracts = JSON.parse(
    fs.readFileSync(logDir + "/deployContractLog.json", "utf-8")
  );
  console.log("contract:", contracts.contract);
  const contract = await ethers.getContractFactory(contracts.contract);
  console.log(
    "Upgrading contract",
    contracts.contract,
    "at address:",
    contracts.address,
    "..."
  );
  await upgrades.upgradeProxy(contracts.address, contract);
  console.log("Contract", contracts.contract, "upgraded");
}

main();
