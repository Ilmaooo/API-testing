const axios = require("axios").default;
const urls = require("../../apiConfig");

const updateActivity = async (id, updatedActivity) => {
    try{
        const response = await axios.put(urls.activities.update.url(id), updatedActivity);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const updateAuthor = async (id, updatedAuthor) => {
    try{
        const response = await axios.put(urls.authors.update.url(id), updatedAuthor);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const updateBook = async (id, updatedBook) => {
    try {
        const response = await axios.put(urls.books.update.url(id), updatedBook);
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

const updateUser = async (id, updatedUser) => {
    try {
        const response = await axios.put(urls.users.update.url(id), updatedUser);
        return response;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    updateActivity,
    updateAuthor,
    updateBook,
    updateCoverPhoto,
    updateUser,
};