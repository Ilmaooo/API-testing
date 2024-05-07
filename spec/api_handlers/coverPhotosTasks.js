const axios = require("axios").default;
const urls = require("../../apiConfig");

const getCoverPhotos = async () => {
    try {
        const response = await axios.get(urls.coverPhotos.getAll.url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getCoverPhotoByBookId = async (idBook) => {
    try {
        const response = await axios.get(urls.coverPhotos.getByIdBook.url(idBook));
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getCoverPhotoById = async (id) => {
    try {
        const response = await axios.get(urls.coverPhotos.getById.url(id));
        return response;
    } catch (error) {
        console.error(error);
    }
}

const createCoverPhoto = async (coverPhoto) => {
    try {
        const response = await axios.post(urls.coverPhotos.create.url, coverPhoto);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const updateCoverPhoto = async (id, updatedCoverPhoto) => {
    try {
        const response = await axios.put(urls.coverPhotos.update.url(id), updatedCoverPhoto);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const deleteCoverPhoto = async (id) => {
    try {
        const response = await axios.delete(urls.coverPhotos.delete.url(id));
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