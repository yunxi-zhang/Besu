import { Router } from "express";
import fungibleToken from "../business/FungibleToken";
import files from "../../utils/files";
export const fungileTokenRoute = Router();

let contractAddress: any;

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
  const amount = req.body.amount;
  const txResponse = await fungibleToken.transfer(targetAccount, amount);
  res.send(txResponse);
});

fungileTokenRoute.put("/fungibleToken/mint", async (req, res) => {
  const amount = req.body.amount;
  const txResponse = await fungibleToken.mint(amount);
  res.send(txResponse);
});

fungileTokenRoute.put("/fungibleToken/burn", async (req, res) => {
  const amount = req.body.amount;
  const txResponse = await fungibleToken.burn(amount);
  res.send(txResponse);
});
