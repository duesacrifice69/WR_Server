import Company from "../models/Company.model.js";

class CompanyDao {
  static async createCompany(CompanyData) {
    try {
      const company = await Company.create(CompanyData);
      return company;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }

  static async updateCompany(companyId, CompanyData) {
    try {
      const company = await Company.findByPk(companyId);
      if (!company) {
        throw new Error("Company not found");
      }
      await company.update(userData);
      return company;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  }

  static async deleteCompany(companyId) {
    try {
      const company = await Company.findByPk(companyId);
      if (!company) {
        throw new Error("Company not found");
      }
      await company.destroy();
      return true;
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }

  static async getCompanyById(companyId) {
    try {
      const company = await Company.findByPk(companyId);
      // Additional business logic or data manipulation if needed
      return company;
    } catch (e) {
      console.log(e);
      //throw new Error("Failed to retrieve user");
    }
  }

  static async getAllCompanies() {
    try {
      const companies = await Company.findAll();
      // Additional business logic or data manipulation if needed
      return companies;
    } catch (e) {
      console.log(e);
      //throw new Error("Failed to retrieve user");
    }
  }
}

export default CompanyDao;
