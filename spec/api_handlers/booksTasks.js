const axios = require("axios").default;
const endpoints = require("../../apiConfig");

const getBooks = async () => {
    try{
        const response = await axios.get(endpoints.books.getAll.url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const getBookById = async (id) => {
    try {
        const response  = await axios.get(endpoints.books.getById.url(id));
        return response;
    } catch (error) {
        console.error(error);
    }
}

const createBook = async (book) => {
    try {
        const response = await axios.post(endpoints.books.create.url, book);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const updateBook = async (id, updatedBook) => {
    try {
        const response = await axios.put(endpoints.books.update.url(id), updatedBook);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const deleteBook = async (id) => {
    try {
        const response  = await axios.delete(endpoints.books.delete.url(id));
        console.log("Content-length:" ,response.headers['content-length'])
        return response;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}