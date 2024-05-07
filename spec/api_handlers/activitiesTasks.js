const axios = require("axios").default;
const endpoints = require("../../apiConfig");

const getActivities = async () => {
    try{
        const response = await axios.get(endpoints.activities.getAll.url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getActivityById = async (id) => {
    try{
        const response = await axios.get(endpoints.activities.getById.url(id));
        return response;
    } catch (error) {
        console.error(error);
    }
}

const createActivity = async (activity) => {
    try{
        const response = await axios.post(endpoints.activities.create.url, activity);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const updateActivity = async (id, updatedActivity) => {
    try{
        const response = await axios.put(endpoints.activities.update.url(id), updatedActivity);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const deleteActivity = async (id) => {
    try{
        const response = await axios.delete(endpoints.activities.delete.url(id));
        console.log("Content-length:" ,response.headers['content-length'])
        return response;
    } catch (error){
        console.error(error);
    }
}

module.exports = {
    getActivities,
    getActivityById,
    createActivity,
    updateActivity,
    deleteActivity
}