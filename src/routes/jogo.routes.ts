import { Router } from "express";
import { jogoController } from "../controllers/jogos.controller.js";

export const jogosRouter = Router()

jogosRouter.get("/", jogoController.getAll)