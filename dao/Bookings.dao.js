import config from "../dbconfig.js";
import sql from "mssql";

class BookingDao {
  static getBookingsByDate = async (fromDate, toDate) => {
    try {
      const pool = await sql.connect(config);

      const bookingResults = await pool
        .request()
        .input("fromDate", sql.Date, fromDate)
        .input("toDate", sql.Date, toDate)
        .query(
          "SELECT Bookings.*, vh.VehicleNo, com.CompanyName FROM" +
            " Bookings " +
            "INNER JOIN GullyPoints p ON p.PointId = Bookings.PointId " +
            "INNER JOIN Vehicles vh ON vh.VehicleId = Bookings.VehicleId " +
            "INNER JOIN Companies com ON com.CompanyId = vh.CompanyId " +
            "WHERE Bookings.BookingDate between @fromDate and @toDate"
        );

      let bookings = bookingResults.recordset.map((result) => {
        return {
          bookingId: result.BookingId,
          vehicleId: result.VehicleId,
          pointId: result.PointId,
          refNo: result.RefNo,
          amount: result.Amount,
          vat: result.Vat,
          bkgStatus: result.Status,
          unloadStatus: result.UnloadStatus,
          vehicleNo: result.VehicleNo,
          companyName: result.companyName,
        };
      });

      return bookings;
    } catch (error) {
      console.log(error);
    }
  };
}
export default BookingDao;
