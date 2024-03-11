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

    const timeStamp = Date.now();
    const date = new Date(timeStamp);
    console.log("timeStamp:", timeStamp);
    console.log("date:", date);
    const contractDeploymentLogs = {
      contract: contratName,
      address: contractInstance.target,
      timeStamp: timeStamp,
      humanReadableTimeStamp: date,
    };
    return contractDeploymentLogs;
  });

  const contractDeploymentLogs = await Promise.all(promises);
  const logDir = path.join(__dirname, "../contractLogs/");
  const writer = fs.createWriteStream(logDir + "/contractDeploymentLogs.json");
  await writer.write(JSON.stringify(contractDeploymentLogs));
}

main();
