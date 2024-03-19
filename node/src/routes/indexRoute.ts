import express from "express";
import { tokenRoute } from "./tokenRoute";

export const routes = express.Router();

routes.use(tokenRoute);
