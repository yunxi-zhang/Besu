import { Router } from "express";
import fungibleToken from "../business/FungibleToken";
export const defaultRoute = Router();

defaultRoute.get("/fungibleToken/balance/:account", async (req, res) => {
  const account = req.params.account;
  const balance: any = await fungibleToken.getBalance(account);
  const response = {
    "balance": balance
  }
  res.send(response);
});
