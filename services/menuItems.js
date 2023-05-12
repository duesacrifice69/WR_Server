import config from "../dbconfig.js";
import sql from "mssql";

export const getMenuItems = async (userRoleId) => {
  try {
    const pool = await sql.connect(config);

    const menuItems = await pool
      .request()
      .input("UserRoleId", sql.Int, userRoleId)
      .query(
        `select mn.* from Menu mn
        inner join UserRolePermission pm on pm.UserPermissionId = mn.PermissionId 
        where pm.UserRoleId = @UserRoleId 
        union 
        select * from Menu
        where PermissionId = 1`
      );

    //    const menuTree = buildMenuTree(menuItems.recordset);
    const menuTree = generateMenuHierarchy(menuItems.recordset);

    return menuTree;
  } catch (error) {
    console.log(error);
  }
};

const buildMenuTree = (menuItems, parentId = null) => {
  const tree = [];
  menuItems
    .filter((item) => item.ParentId === parentId)
    .forEach((item) => {
      tree[item.MenuId] = {
        ...item,
        subMenu: buildMenuTree(menuItems, item.MenuId),
      };
    });
  return tree;
};

const generateMenuHierarchy = (menuItems) => {
  const menuHierarchy = [];

  // Find root menu items (items without a parent)
  const rootMenuItems = menuItems.filter((item) => !item.ParentId);

  // Recursively process each root menu item and its children
  rootMenuItems.forEach((rootMenuItem) => {
    const menuTree = processMenuItem(rootMenuItem, menuItems);
    menuHierarchy.push(menuTree);
  });

  return menuHierarchy;
};

const processMenuItem = (menuItem, allMenuItems) => {
  const subMenu = allMenuItems.filter(
    (item) => item.ParentId === menuItem.MenuId
  );

  if (subMenu.length === 0) {
    return {
      ...menuItem,
    };
  } else {
    return {
      ...menuItem,
      subMenu: subMenu.map((child) => processMenuItem(child, allMenuItems)),
    };
  }
};
