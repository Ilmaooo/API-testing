const axios = require('axios');
const urls = require('../../apiConfig');

const createActivity = async (activity) => {
    try{
        const response = await axios.post(urls.activities.create.url, activity);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const createAuthor = async (author) => {
    try{
        const response = await axios.post(urls.authors.create.url, author);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const createBook = async (book) => {
    try {
        const response = await axios.post(urls.books.create.url, book);
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

const createUser = async (user) => {
    try {
        const response = await axios.post(urls.users.create.url, user);
        return response;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    createActivity,
    createAuthor,
    createBook,
    createCoverPhoto,
    createUser,
};