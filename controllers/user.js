import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { getUser } from "../services/userCredentials.js";
import { userValidator } from "../services/UserValidator.js";
import { getMenuItems } from "../services/menuItems.js";
import logger from "../logger.js";
import UserService from "../services/UserService.js";
import CompanyService from "../services/CompanyService.js";

export const signin = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const existingUser = await getUser(userName);
    //  const user = await UserService.getUserByName(userName);
    if (!existingUser)
      return res
        .status(401)
        .json({ success: false, error: "User doesn't exist." });

    const isPasswordCorrect = userValidator(existingUser.password, password);

    if (!isPasswordCorrect) {
      logger.info(`Sign in request by ${userName} and login unccess`);
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser.id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    logger.info(`Sign in request by ${userName} and login success`);
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    logger.error("error", `${error}`);
    res.status(500).json({ message: "SERVER ERROR" });
    return;
  }
};

export const signup = async (req, res) => {
  try {
    res.status(200).json({ message: "success", data: "Test" });
  } catch (error) {
    console.error(error);
    res.status(500).send("SERVER ERROR");
    return;
  }
};

export const getMenu = async (req, res) => {
  try {
    const { userRoleId } = req.body;
    const menuTree = await getMenuItems(userRoleId);

    res.status(200).json({ result: menuTree });
  } catch (error) {
    logger.error("error", `${error}`);
    res.status(500).json({ message: "SERVER ERROR" });
    return;
  }
};
