import express from "express";
import { fungileTokenRoute } from "./fungibleTokenRoute";

export const routes = express.Router();

routes.use(fungileTokenRoute);
