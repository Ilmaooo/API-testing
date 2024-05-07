const axios = require("axios").default;
const endpoints = require("../../apiConfig");

const getAuthors = async () => {
    try{
        const response = await axios.get(endpoints.authors.getAll.url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getAuthorsByBookId = async (idBook) => {
    try{
        const response = await axios.get(endpoints.authors.getByBookId.url(idBook));
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getAuthorById = async (id) => {
    try{
        const response = await axios.get(endpoints.authors.getById.url(id));
        return response;
    } catch (error) {
        console.error(error);
    }
}

const createAuthor = async (author) => {
    try{
        const response = await axios.post(endpoints.authors.create.url, author);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const updateAuthor = async (id, updatedAuthor) => {
    try{
        const response = await axios.put(endpoints.authors.update.url(id), updatedAuthor);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const deleteAuthor = async (id) => {
    try{
        const response = await axios.delete(endpoints.authors.delete.url(id));
        console.log("Content-length:" ,response.headers['content-length'])
        return response;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getAuthors,
    getAuthorsByBookId,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor,
}