import config from "../dbconfig.js";
import sql from "mssql";

export const getUser = async (userName) => {
  try {
    const pool = await sql.connect(config);
    //console.log("connected", pool.size);
    const userList = await pool
      .request()
      .input("UserName", sql.VarChar, userName)
      .query("SELECT * FROM Credentials where UserName = @UserName");

    let users = userList.recordset.map((result) => {
      return {
        id: result.UserId,
        userName: result.UserName,
        password: result.Password,
        employeeNo: result.EmployeeNo,
        UserRoleId: result.UserRoleId,
      };
    });

    return users[0];
  } catch (error) {
    console.log(error);
  }
};
