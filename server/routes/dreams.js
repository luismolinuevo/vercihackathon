import { Router } from "express";
import * as dreamControllers from "../controllers/dream.js";

const router = Router();

router.post("/dream", dreamControllers.createDream);
router.put("/dream/:id", dreamControllers.editDream);
router.get("/dreams", dreamControllers.getDreams);

export default router;
