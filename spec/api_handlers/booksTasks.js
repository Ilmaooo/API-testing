const axios = require("axios").default;
const urls = require("../../apiConfig");

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

const createBook = async (book) => {
    try {
        const response = await axios.post(urls.books.create.url, book);
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

const deleteBook = async (id) => {
    try {
        const response  = await axios.delete(urls.books.delete.url(id));
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