const axios = require("axios").default;
const endpoints = require("../../apiConfig");

const getActivities = async () => {
  try {
    const response = await axios.get(urls.activities.getAll);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getActivityById = async (id) => {
  try {
    const response = await axios.get(urls.activities.getById(id));
    return response;
  } catch (error) {
    console.error(error);
  }
};

const createActivity = async (activity) => {
  try {
    const response = await axios.post(
      urls.activities.create,
      activity,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

const updateActivity = async (id, updatedActivity) => {
  try {
    const response = await axios.put(
      urls.activities.update(id),
      updatedActivity,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

const deleteActivity = async (id) => {
  try {
    const response = await axios.delete(urls.activities.delete(id));
    console.log("Content-length:", response.headers["content-length"]);
    return response;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity,
};
