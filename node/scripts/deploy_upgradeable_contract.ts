import { ethers, upgrades } from "hardhat";
import fs from "fs";
import path from "path";

async function main() {
  const CONTRACT_DEPLOYMENT_LOGS = "contractDeploymentLog.json";
  const CONTRACT_CONFIG_FILE = "contract_config.json";
  const logDir = path.join(__dirname, "../contractLogs/");
  const contractDeploymentLogFilePath = logDir + CONTRACT_DEPLOYMENT_LOGS;
  const contractConfigDir = path.join(__dirname, "./config/");
  const contractConfigFilePath = contractConfigDir + CONTRACT_CONFIG_FILE;

  let contractNames = getAllContractNames();
  if (contractNames != undefined) {
    const currentContractDeploymentLogs = getContractDeploymentLogs();
    const nonDeployedContracts = getNonDeployedContractNames(
      currentContractDeploymentLogs,
      contractNames
    );
    const contractDeploymentResult: any = await deployContracts(
      nonDeployedContracts
    );
    if (contractDeploymentResult != undefined) {
      await writeContractDeployLogs(
        currentContractDeploymentLogs,
        contractDeploymentResult
      );
    } else {
      return;
    }
  } else {
    return;
  }

  function getAllContractNames() {
    if (fs.existsSync(contractConfigFilePath)) {
      const contractConfig = JSON.parse(
        fs.readFileSync(contractConfigFilePath, "utf-8")
      );
      if (contractConfig.length == 0) {
        console.log(
          "No contract names detected, please add at least one contract name to the contractNames."
        );
        return;
      } else {
        return contractConfig;
      }
    } else {
      console.log(
        CONTRACT_CONFIG_FILE,
        "doesn't exist, can't continue. This config file must be manually created as a pre-req for this deployment script to run!!!"
      );
      return;
    }
  }

  function getContractDeploymentLogs() {
    let currentContractDeploymentLogs: any;
    if (fs.existsSync(contractDeploymentLogFilePath)) {
      currentContractDeploymentLogs = JSON.parse(
        fs.readFileSync(contractDeploymentLogFilePath, "utf-8")
      );
      return currentContractDeploymentLogs;
    } else {
      console.log(
        CONTRACT_DEPLOYMENT_LOGS,
        "doesn't exist, will create a new one soon"
      );
      return;
    }
  }

  function getNonDeployedContractNames(
    currentContractDeploymentLogs: any,
    contractNames: any
  ) {
    // Compare contractNames against the existing contract deploy logs to find out which contract has not been deployed once yet
    if (currentContractDeploymentLogs == undefined) {
      return contractNames;
    } else {
      for (let i = 0; i < currentContractDeploymentLogs.length; i++) {
        for (let j = 0; j < contractNames.length; j++) {
          if (
            contractNames[j].contract ==
            currentContractDeploymentLogs[i].contract
          ) {
            const index = contractNames.indexOf(contractNames[j]);
            contractNames.splice(index, 1);
            break;
          }
        }
      }
      return contractNames;
    }
  }

  async function deployContracts(nonDeployedContracts: any) {
    // If the above comparision finds out any contract(s) that has/have not been deployed for once yet, deploy it/them
    if (nonDeployedContracts.length > 0) {
      const [deployer] = await ethers.getSigners();
      console.log("Deploying contracts with the account:", deployer.address);
      const promises = nonDeployedContracts.map(async (contractObject: any) => {
        if (contractObject.options.length == 0) {
          const contract = await ethers.getContractFactory(
            contractObject.contract
          );
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
            contractObject.contract,
            "deployed to:",
            contractInstance.target
          );
          const timeStamp = Date.now();
          const date = new Date(timeStamp);
          console.log("timeStamp:", timeStamp);
          console.log("date:", date);
          const contractDeploymentLogs = {
            contract: contractObject.contract,
            address: contractInstance.target,
            timeStamp: timeStamp,
            humanReadableTimeStamp: date,
          };
          return contractDeploymentLogs;
        } else {
          const contract = await ethers.getContractFactory(
            contractObject.contract
          );
          const contractInstance = await upgrades.deployProxy(
            contract,
            [deployer.address, contractObject.options.tokenName, contractObject.options.tokenSymbol, contractObject.options.totalAmount],
            {
              initializer: "initialize",
            }
          );
          await contractInstance.waitForDeployment();
          console.log(
            "contract",
            contractObject.contract,
            "deployed to:",
            contractInstance.target
          );
          const timeStamp = Date.now();
          const date = new Date(timeStamp);
          console.log("timeStamp:", timeStamp);
          console.log("date:", date);
          const contractDeploymentLogs = {
            contract: contractObject.contract,
            address: contractInstance.target,
            timeStamp: timeStamp,
            humanReadableTimeStamp: date,
          };
          return contractDeploymentLogs;
        }
      });
      return Promise.all(promises);
    } else {
      console.log(
        "All the contracts have been deployed once, please run the upgrade.js to upgrade all the contracts"
      );
      return;
    }
  }

  async function writeContractDeployLogs(
    currentContractDeploymentLogs: any,
    contractDeploymentResult: any
  ) {
    if (currentContractDeploymentLogs == undefined) {
      currentContractDeploymentLogs = [];
      contractDeploymentResult.forEach((newLogs: any) => {
        currentContractDeploymentLogs.push(newLogs);
      });
    } else {
      contractDeploymentResult.forEach((newLogs: any) => {
        currentContractDeploymentLogs.push(newLogs);
      });
    }
    console.log(
      "currentContractDeploymentLogs:",
      currentContractDeploymentLogs
    );
    const newContractDeploymentLogs = currentContractDeploymentLogs;
    const writer = fs.createWriteStream(logDir + CONTRACT_DEPLOYMENT_LOGS);
    await writer.write(JSON.stringify(newContractDeploymentLogs));
  }
}

main();
