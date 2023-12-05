import { TreeFunction } from "./types";

export const addUser: TreeFunction = (values) => {
  console.log("Adding a user!  Got values", values);

  return {};
};

export const updateUser: TreeFunction = (values) => {
  console.log("Updating a user!  Got values", values);

  return {};
};

export const addOrUpdateUserInfo: TreeFunction = (values) => {
  console.log("Add or update a users info!  Got values", values);

  return {};
};

export const createComment: TreeFunction = (values) => {
  console.log("Creating a comment!  Got values", values);

  return {};
};
