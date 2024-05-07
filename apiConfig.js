const BASE_API_URL = "https://fakerestapi.azurewebsites.net/api/v1";

const urls = {
  activities: {
    getAll: `${BASE_API_URL}/Activities`,
    create: `${BASE_API_URL}/Activities`,
    getById: (id) => `${BASE_API_URL}/Activities/${id}`,
    update: (id) => `${BASE_API_URL}/Activities/${id}`,
    delete:  (id) => `${BASE_API_URL}/Activities/${id}`,
  },
  authors: {
    getAll:  `${BASE_API_URL}/Authors`,
    create:  `${BASE_API_URL}/Authors`,
    getByBookId: (idBook) => `${BASE_API_URL}/Authors/authors/books/${idBook}`,
    getById: (id) => `${BASE_API_URL}/Authors/${id}`,
    update:  (id) => `${BASE_API_URL}/Authors/${id}`,
    delete: (id) => `${BASE_API_URL}/Authors/${id}`,
  },
  books: {
    getAll: `${BASE_API_URL}/Books`,
    create: `${BASE_API_URL}/Books`,
    getById: (id) => `${BASE_API_URL}/Books/${id}`,
    update:  (id) => `${BASE_API_URL}/Books/${id}`,
    delete:  (id) => `${BASE_API_URL}/Books/${id}`,
  },
  coverPhotos: {
    getAll: `${BASE_API_URL}/CoverPhotos`,
    create: `${BASE_API_URL}/CoverPhotos`,
    getByIdBook: (idBook) => `${BASE_API_URL}/CoverPhotos/books/covers/${idBook}`,
    getById: (id) => `${BASE_API_URL}/CoverPhotos/${id}`,
    update: (id) => `${BASE_API_URL}/CoverPhotos/${id}`,
    delete: (id) => `${BASE_API_URL}/CoverPhotos/${id}`,
  },
  users: {
    getAll: `${BASE_API_URL}/Users`,
    create: `${BASE_API_URL}/Users`,
    getById: (id) => `${BASE_API_URL}/Users/${id}`,
    update:  (id) => `${BASE_API_URL}/Users/${id}`,
    delete:  (id) => `${BASE_API_URL}/Users/${id}`,
  },
};


module.exports = urls;
