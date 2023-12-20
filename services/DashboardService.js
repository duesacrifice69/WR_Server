import config from "../dbconfig.js";
import BookingService from "../services/BookingService.js";

class DashboardService {
  static dashboardBookings = async () => {
    const fromDate = new Date();
    const toDate = new Date();
    const fromDateft = fromDate.setHours(0, 0, 0, 0);
    const toDateft = toDate.setHours(23, 59, 59, 999);
    return BookingService.getBookingsByDate(fromDateft, toDateft);
  };
}

export default DashboardService;
