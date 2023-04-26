//const sql = require("msnodesqlv8");
import express from "express";
//const express = require("express");
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";

//const appPool = new sql.ConnectionPool(sqlConfig);
const app = express();

dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoute);

var port = process.env.PORT || 5000;
app.listen(port);
console.log("Water Reclamation Backend Server is Running at : %s", port);
