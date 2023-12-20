import CompanyService from "../services/CompanyService.js";

import DashboardService from "../services/DashboardService.js";

export const getDashboardStat = async (req, res) => {
  try {
    const bookings = DashboardService.dashboardBookings();
    res.status(200).json({ result: bookings });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
