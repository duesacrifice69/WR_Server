import BookingsDao from "../dao/Bookings.dao.js";
class BookingService {
  static getBookingsByDate = async (fromDate, toDate) => {
    return BookingsDao.getBookingsByDate(fromDate, toDate);
  };
}

export default BookingService;
