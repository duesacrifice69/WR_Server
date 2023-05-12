import express from "express";
import { signin, signup, getMenu } from "../controllers/user.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/signin", signin);
router.get("/signup", signup);
router.post("/menus", getMenu);

export default router;
