import CompanyDao from "../dao/company.dao.js";

class CompanyService {
  static async createCompany(companyData) {
    try {
      const company = await CompanyDao.createCompany(companyData);
      // Additional business logic or data manipulation if needed
      return company;
    } catch (error) {
      throw new Error("Failed to create company");
    }
  }

  static async getCompanyById(companyId) {
    try {
      const company = await CompanyDao.getCompanyById(companyId);
      // Additional business logic or data manipulation if needed
      return company;
    } catch (error) {
      throw new Error("Failed to retrieve company");
    }
  }

  static async getAllCompanies() {
    try {
      const company = await CompanyDao.getAllCompanies();
      // Additional business logic or data manipulation if needed
      return company;
    } catch (error) {
      console.log(error);
      //    throw new Error("Failed to retrieve company");
    }
  }

  static async getCompanyByName(companyName) {
    try {
      const company = await CompanyDao.getCompanyByName(companyName);
      // Additional business logic or data manipulation if needed
      return company;
    } catch (error) {
      throw new Error("Failed to retrieve company");
    }
  }

  static async updateCompany(companyId, companyData) {
    try {
      const company = await CompanyDao.updateCompany(companyId, companyData);
      // Additional business logic or data manipulation if needed
      return company;
    } catch (error) {
      throw new Error("Failed to update company");
    }
  }

  static async deleteCompany(companyId) {
    try {
      await CompanyDao.deleteCompany(companyId);
      // Additional business logic or data manipulation if needed
      return true;
    } catch (error) {
      throw new Error("Failed to delete company");
    }
  }
}

export default CompanyService;
