import fs from "fs";
import path from "path";

const CONTRACT_DEPLOYMENT_LOGS = "contractDeploymentLog.json";
const logDir = path.join(__dirname, "../contractLogs/");
const contractDeploymentLogFilePath = logDir + CONTRACT_DEPLOYMENT_LOGS;

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

const _ = {
    getContractDeploymentLogs
};

export default _;
