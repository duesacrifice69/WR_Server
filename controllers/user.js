import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { getUser } from "../services/userCredentials.js";
import { userValidator } from "../services/UserValidator.js";

export const signin = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const existingUser = await getUser(userName);

    if (!existingUser)
      return res
        .status(401)
        .json({ success: false, error: "User doesn't exist." });

    // const isPasswordCorrect = await bcrypt.compare(
    //   password,
    //   existingUser.password
    // );
    const isPasswordCorrect = userValidator(existingUser.password, password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser.id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "SERVER ERROR" });
    return;
  }
};

export const signup = async (req, res) => {
  console.log("HIT");
  try {
    res.status(200).json({ message: "success", data: "Test" });
  } catch (error) {
    console.error(error);
    res.status(500).send("SERVER ERROR");
    return;
  }
};
