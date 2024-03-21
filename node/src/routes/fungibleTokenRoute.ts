import { Router } from "express";
import fungibleToken from "../business/FungibleToken";
import files from "../../utils/files";
export const fungileTokenRoute = Router();

let contractAddress: any;
const contractName = "FungibleToken";

fungileTokenRoute.use((req, res, next) => {
  let currentContractDeploymentLogs: any = files.getContractDeploymentLogs();
  for (let i = 0; i < currentContractDeploymentLogs.length; i++) {
    if (currentContractDeploymentLogs[i].contract == "FungibleToken") {
      contractAddress = currentContractDeploymentLogs[i].address;
      break;
    }
  }
  fungibleToken.setContractAddress(contractAddress);
  fungibleToken.setUserRole(req.body.role);
  fungibleToken.setABI(files.getABI(contractName));
  next();
});

fungileTokenRoute.get("/fungibleToken/balance/:account", async (req, res) => {
  const account = req.params.account;
  const balance: any = await fungibleToken.getBalance(account);
  const response = {
    balance: balance,
  };
  res.send(response);
});

fungileTokenRoute.put("/fungibleToken/transfer", async (req, res) => {
  const targetAccount = req.body.targetAccount;
  const value = req.body.value;
  const txResponse = await fungibleToken.transfer(targetAccount, value);
  res.send(txResponse);
});

fungileTokenRoute.put("/fungibleToken/mint", async (req, res) => {
  const value = req.body.value;
  const txResponse = await fungibleToken.mint(value);
  res.send(txResponse);
});

fungileTokenRoute.put("/fungibleToken/burn", async (req, res) => {
  const value = req.body.value;
  const txResponse = await fungibleToken.burn(value);
  res.send(txResponse);
});
