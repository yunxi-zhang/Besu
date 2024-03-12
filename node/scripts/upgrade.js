// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const logDir = path.join(__dirname, "../contractLogs/");
  const contracts = JSON.parse(
    fs.readFileSync(logDir + "/contractDeploymentLog.json", "utf-8")
  );

  const promises = contracts.map(async (contractObject) => {
    console.log(
      "Upgrading contract",
      contractObject.contract,
      "at address:",
      contractObject.address,
      "..."
    );
    const contract = await ethers.getContractFactory(contractObject.contract);
    return await upgrades.upgradeProxy(contractObject.address, contract);
  });

  const contractUpgradeResult = await Promise.all(promises);
  contractUpgradeResult.forEach((result) => {
    if (result.target) {
      for (i = 0; i < contracts.length; i++) {
        if (contracts[i].address == result.target) {
          console.log(
            "Contract",
            contracts[i].contract,
            "upgraded successfully"
          );
          break;
        }
      }
    } else {
      console.log("There're failures in contract upgrade, please check");
    }
  });
}

main();
