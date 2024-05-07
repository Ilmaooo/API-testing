const axios = require("axios").default;
const endpoints = require("../../apiConfig");

const getUsers = async () => {
  try {
    const response = await axios.get(urls.users.getAll);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getUserById = async (id) => {
  try {
    const response = await axios.get(urls.users.getById(id));
    return response;
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (user) => {
  try {
    const response = await axios.post(urls.users.create, user);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(
      urls.users.update(id),
      updatedUser,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (id) => {
  try {
    const response = await axios.delete(urls.users.delete(id));
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
