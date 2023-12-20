import express from "express";
import { getDashboardStat } from "../controllers/Dashboard.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getDashboardStat);

export default router;
