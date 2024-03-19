import express from "express";
import { tokenRoute } from "./defaultRoute";

export const routes = express.Router();

routes.use(tokenRoute);
