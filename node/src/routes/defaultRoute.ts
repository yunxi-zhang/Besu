import { Router } from "express";

export const defaultRoute = Router();

defaultRoute.get('/', (req, res) => {
  res.send("send from default route!")
});

defaultRoute.get('/fungibleToken/balance', (req, res) => {
  res.send("balance api for fungible token!");
});