import express from "express";
import { getAllCompanies } from "../controllers/Company.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/companies", getAllCompanies);

export default router;
