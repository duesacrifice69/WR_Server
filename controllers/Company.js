import CompanyService from "../services/CompanyService.js";

export const getAllCompanies = async (req, res) => {
  try {
    const companies = await CompanyService.getAllCompanies();

    res.status(200).json({ result: companies });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCompany = async (req, res) => {
  try {
    const company = await CompanyService.createCompany(req.body);
    res.status(200).json({ result: company });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteCompany = async (req, res) => {
  try {
    const company = await CompanyService.deleteCompany(req.body.CompanyId);
    res.status(200).json({ result: company });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
