const axios = require('axios');
const urls = require('../../apiConfig');

const deleteActivity = async (id) => {
    try{
        const response = await axios.delete(urls.activities.delete.url(id));
        console.log("Content-length:" ,response.headers['content-length'])
        return response;
    } catch (error){
        console.error(error);
    }
}

const deleteAuthor = async (id) => {
    try{
        const response = await axios.delete(urls.authors.delete.url(id));
        console.log("Content-length:" ,response.headers['content-length'])
        return response;
    } catch (error) {
        console.error(error);
    }
}

const deleteBook = async (id) => {
    try {
        const response  = await axios.delete(urls.books.delete.url(id));
        console.log("Content-length:" ,response.headers['content-length'])
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

const deleteUser = async (id) => {
    try {
        const response = await axios.delete(urls.users.delete.url(id));
        console.log("Content-length:" ,response.headers['content-length'])
        return response;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    deleteActivity,
    deleteAuthor,
    deleteBook,
    deleteCoverPhoto,
    deleteUser,
}