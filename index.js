//const sql = require("msnodesqlv8");
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import companyRoute from "./routes/Company.js";
import dashboardRoute from "./routes/DashboardRoute.js";

const app = express();

dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoute);
app.use("/company", companyRoute);
app.use("/dashboard", dashboardRoute);

var port = process.env.PORT || 5000;
app.listen(port);
console.log("Water Reclamation Backend Server is Running at : %s", port);

process.once("SIGUSR2", function () {
  process.kill(process.pid, "SIGUSR2");
});

process.on("SIGINT", function () {
  // this is only called on ctrl+c, not restart
  process.kill(process.pid, "SIGINT");
});
