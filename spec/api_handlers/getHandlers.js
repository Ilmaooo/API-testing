const axios = require('axios');
const urls = require('../../apiConfig');

const getActivities = async () => {
    try{
        const response = await axios.get(urls.activities.getAll.url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getActivityById = async (id) => {
    try{
        const response = await axios.get(urls.activities.getById.url(id));
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getAuthors = async () => {
    try{
        const response = await axios.get(urls.authors.getAll.url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getAuthorsByBookId = async (idBook) => {
    try{
        const response = await axios.get(urls.authors.getByBookId.url(idBook));
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getAuthorById = async (id) => {
    try{
        const response = await axios.get(urls.authors.getById.url(id));
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getBooks = async () => {
    try{
        const response = await axios.get(urls.books.getAll.url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getBookById = async (id) => {
    try {
        const response  = await axios.get(urls.books.getById.url(id));
        return response;
    } catch (error) {
        console.error(error);
    }
}

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

const getUsers = async () => {
    try {
        const response = await axios.get(urls.users.getAll.url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getUserById = async (id) => {
    try {
        const response = await axios.get(urls.users.getById.url(id));
        return response;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getActivities,
    getActivityById,
    getAuthors,
    getAuthorsByBookId,
    getAuthorById,
    getBooks,
    getBookById,
    getCoverPhotos,
    getCoverPhotoByBookId,
    getCoverPhotoById,
    getUsers,
    getUserById
};