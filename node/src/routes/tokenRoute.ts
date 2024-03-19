import { Router } from "express";
import fungibleToken from "../business/FungibleToken";
import fs from "fs";
import path from "path";
export const tokenRoute = Router();

const CONTRACT_DEPLOYMENT_LOGS = "contractDeploymentLog.json";
const logDir = path.join(__dirname, "../../contractLogs/");
const contractDeploymentLogFilePath = logDir + CONTRACT_DEPLOYMENT_LOGS;
let contractAddress: any;

tokenRoute.use((req, res, next) => {
  let currentContractDeploymentLogs: any;
  if (fs.existsSync(contractDeploymentLogFilePath)) {
    currentContractDeploymentLogs = JSON.parse(
      fs.readFileSync(contractDeploymentLogFilePath, "utf-8")
    );
    for (let i = 0; i < currentContractDeploymentLogs.length; i++) {
      if (currentContractDeploymentLogs[i].contract == "FungibleToken") {
        contractAddress = currentContractDeploymentLogs[i].address;
        break;
      }
    }
    fungibleToken.setContractAddress(contractAddress);
    next();
  } else {
    console.log(
      CONTRACT_DEPLOYMENT_LOGS,
      "doesn't exist, please run the deployment script to generate the contract deployment logs first."
    );
    res.status(500).send("Server breaks down!");
  }
});

tokenRoute.get("/fungibleToken/balance/:account", async (req, res) => {
  const account = req.params.account;
  const balance: any = await fungibleToken.getBalance(account);
  const response = {
    balance: balance,
  };
  res.send(response);
});

tokenRoute.post("/fungibleToken/transfer", async (req, res) => {
  const targetAccount = req.body.targetAccount;
  const amount = req.body.amount;
  const txResponse = await fungibleToken.transfer(targetAccount, amount);
  res.send(txResponse);
});
