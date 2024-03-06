const { ethers, upgrades } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const contractNames = ["Box", "RBAC"];
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const promises = contractNames.map(async (contratName) => {
    const contract = await ethers.getContractFactory(contratName);
    const contractInstance = await upgrades.deployProxy(
      contract,
      [deployer.address],
      {
        initializer: "initialize",
      }
    );
    await contractInstance.waitForDeployment();
    console.log(
      "contract",
      contratName,
      "deployed to:",
      contractInstance.target
    );

    const timeStamp = await Date.now();
    const date = await new Date(timeStamp);
    console.log("timeStamp:", timeStamp);
    console.log("date:", date);
    const contractLog = {
      contract: contratName,
      address: contractInstance.target,
      timeStamp: timeStamp,
      humanReadableTimeStamp: date,
    };
    return contractLog;
  });

  const contractLogs = await Promise.all(promises);
  const logDir = path.join(__dirname, "../contractLogs/");
  const writer = fs.createWriteStream(logDir + "/deployContractLog.json");
  await writer.write(JSON.stringify(contractLogs));
}

main();
