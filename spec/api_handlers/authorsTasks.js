const axios = require("axios").default;
const endpoints = require("../../apiConfig");

const getAuthors = async () => {
  try {
    const response = await axios.get(urls.authors.getAll);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getAuthorsByBookId = async (idBook) => {
  try {
    const response = await axios.get(urls.authors.getByBookId(idBook));
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getAuthorById = async (id) => {
  try {
    const response = await axios.get(urls.authors.getById(id));
    return response;
  } catch (error) {
    console.error(error);
  }
};

const createAuthor = async (author) => {
  try {
    const response = await axios.post(urls.authors.create, author);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const updateAuthor = async (id, updatedAuthor) => {
  try {
    const response = await axios.put(
      urls.authors.update(id),
      updatedAuthor,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

const deleteAuthor = async (id) => {
  try {
    const response = await axios.delete(urls.authors.delete(id));
    console.log("Content-length:", response.headers["content-length"]);
    return response;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAuthors,
  getAuthorsByBookId,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
