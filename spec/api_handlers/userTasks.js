const axios = require("axios").default;
const endpoints = require("../../apiConfig");

const getUsers = async () => {
  try {
    const response = await axios.get(endpoints.users.getAll.url);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getUserById = async (id) => {
  try {
    const response = await axios.get(endpoints.users.getById.url(id));
    return response;
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (user) => {
  try {
    const response = await axios.post(endpoints.users.create.url, user);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(
      endpoints.users.update.url(id),
      updatedUser,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (id) => {
  try {
    const response = await axios.delete(endpoints.users.delete.url(id));
    console.log("Content-length:", response.headers["content-length"]);
    return response;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
