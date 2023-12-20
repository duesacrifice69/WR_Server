import User from "../models/user.model.js";

class UserDao {
  static async createUser(userData) {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }

  static async updateUser(userId, userData) {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error("User not found");
      }
      await user.update(userData);
      return user;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  }

  static async deleteUser(userId) {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error("User not found");
      }
      await user.destroy();
      return true;
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }

  static async getUserById(userId) {
    try {
      const user = await User.findByPk(userId);
      // Additional business logic or data manipulation if needed
      return user;
    } catch (e) {
      console.log(e);
      //throw new Error("Failed to retrieve user");
    }
  }

  static async getUserByName(userName) {
    try {
      const user = await User.findOne({
        where: { UserName: `${userName}` },
      });
      return user;
    } catch (error) {
      console.log(e);
    }
  }
}

export default UserDao;
