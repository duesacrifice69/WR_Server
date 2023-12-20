import UserDao from "../dao/user.dao.js";

class UserService {
  static async createUser(userData) {
    try {
      const user = await UserDao.createUser(userData);
      // Additional business logic or data manipulation if needed
      return user;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }

  static async getUserById(userId) {
    try {
      const user = await UserDao.getUserById(userId);
      // Additional business logic or data manipulation if needed
      return user;
    } catch (error) {
      throw new Error("Failed to retrieve user");
    }
  }

  static async getUserByName(userName) {
    try {
      const user = await UserDao.getUserByName(userName);
      // Additional business logic or data manipulation if needed
      return user;
    } catch (error) {
      throw new Error("Failed to retrieve user");
    }
  }

  static async updateUser(userId, userData) {
    try {
      const user = await UserDao.updateUser(userId, userData);
      // Additional business logic or data manipulation if needed
      return user;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  }

  static async deleteUser(userId) {
    try {
      await UserDao.deleteUser(userId);
      // Additional business logic or data manipulation if needed
      return true;
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }
}

export default UserService;
