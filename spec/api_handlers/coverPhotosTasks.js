const axios = require("axios").default;
const endpoints = require("../../apiConfig");

const getCoverPhotos = async () => {
    try {
        const response = await axios.get(endpoints.coverPhotos.getAll.url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getCoverPhotoByBookId = async (idBook) => {
    try {
        const response = await axios.get(endpoints.coverPhotos.getByIdBook.url(idBook));
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getCoverPhotoById = async (id) => {
    try {
        const response = await axios.get(endpoints.coverPhotos.getById.url(id));
        return response;
    } catch (error) {
        console.error(error);
    }
}

const createCoverPhoto = async (coverPhoto) => {
    try {
        const response = await axios.post(endpoints.coverPhotos.create.url, coverPhoto);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const updateCoverPhoto = async (id, updatedCoverPhoto) => {
    try {
        const response = await axios.put(endpoints.coverPhotos.update.url(id), updatedCoverPhoto);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const deleteCoverPhoto = async (id) => {
    try {
        const response = await axios.delete(endpoints.coverPhotos.delete.url(id));
        console.log("Content-length:" ,response.headers['content-length'])
        return response;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getCoverPhotos,
    getCoverPhotoByBookId,
    getCoverPhotoById,
    createCoverPhoto,
    updateCoverPhoto,
    deleteCoverPhoto
}