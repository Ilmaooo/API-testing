const axios = require("axios").default;
const urls = require("./apiConfig");
const getHandlers = require("./spec/api_handlers/getHandlers");
const postHandlers = require("./spec/api_handlers/postHandlers");
const putHandlers = require("./spec/api_handlers/putHandlers");
const deleteHandlers = require("./spec/api_handlers/deleteHandlers");

const apiWrapper = {
 //GET requests
    getActivities : getHandlers.getActivities,
    getActivityById : getHandlers.getActivityById,
    getAuthors : getHandlers.getAuthors,
    getAuthorsByBookId : getHandlers.getAuthorsByBookId,
    getAuthorById : getHandlers.getAuthorById,
    getBooks : getHandlers.getBooks,
    getBookById : getHandlers.getBookById,
    getCoverPhotos : getHandlers.getCoverPhotos,
    getCoverPhotoByBookId: getHandlers.getCoverPhotoByBookId,
    getCoverPhotoById: getHandlers.getCoverPhotoById,
    getUsers : getHandlers.getUsers,
    getUserById : getHandlers.getUserById,

//POST requests
    createActivity : postHandlers.createActivity,
    createAuthor : postHandlers.createAuthor,
    createBook : postHandlers.createBook,
    createCoverPhoto : postHandlers.createCoverPhoto,
    createUser : postHandlers.createUser,

//PUT requests
    updateActivity : putHandlers.updateActivity,
    updateAuthor : putHandlers.updateAuthor,
    updateBook: putHandlers.updateBook,
    updateCoverPhoto : putHandlers.updateCoverPhoto,
    updateUser : putHandlers.updateUser,

//DELETE requests
    deleteActivity: deleteHandlers.deleteActivity,
    deleteAuthor :  deleteHandlers.deleteAuthor,
    deleteBook : deleteHandlers.deleteBook,
    deleteCoverPhoto : deleteHandlers.deleteCoverPhoto,
    deleteUser : deleteHandlers.deleteUser,
}

module.exports = apiWrapper;