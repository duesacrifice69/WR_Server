import express from "express";
import {
  createCompany,
  deleteCompany,
  getAllCompanies,
} from "../controllers/Company.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/companies", getAllCompanies);
router.post("/create", createCompany);
router.post("/edit");
router.delete("/delete", deleteCompany);

export default router;
