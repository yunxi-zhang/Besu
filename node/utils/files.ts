import fs from "fs";
import path from "path";

const CONTRACT_DEPLOYMENT_LOGS = "contractDeploymentLog.json";
const logDir = path.join(__dirname, "../contractLogs/");
const contractDeploymentLogFilePath = logDir + CONTRACT_DEPLOYMENT_LOGS;
const contractArtifactsDir = path.join(__dirname, "../artifacts/contracts/");
const SOLIDITY_EXTENTION = ".sol";
const JSON_EXTENSION = ".json";

const getContractDeploymentLogs = () => {
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
};

const getABI = (contractName: string) => {
  let abi: any;
  const contractFilePath =
    contractArtifactsDir +
    contractName +
    SOLIDITY_EXTENTION +
    "/" +
    contractName +
    JSON_EXTENSION;
  if (fs.existsSync(contractFilePath)) {
    abi = JSON.parse(fs.readFileSync(contractFilePath, "utf-8")).abi;
    return abi;
  } else {
    console.log(contractName, "doesn't exist");
    return;
  }
};

const _ = {
  getContractDeploymentLogs,
  getABI,
};

export default _;
