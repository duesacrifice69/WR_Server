import CompanyService from "../services/CompanyService.js";

export const getAllCompanies = async (req, res) => {
  try {
    const companies = await CompanyService.getAllCompanies();

    res.status(200).json({ result: companies });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
