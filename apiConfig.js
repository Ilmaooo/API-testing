const BASE_API_URL = 'https://fakerestapi.azurewebsites.net/api/v1';

const endpoints = {
    activities : {
        getAll : {
            url : `${BASE_API_URL}/Activities`
        },
        create : {
            url: `${BASE_API_URL}/Activities`,
        },
        getById : {
            url: (id) => `${BASE_API_URL}/Activities/${id}`
        },
        update : {
            url: (id) => `${BASE_API_URL}/Activities/${id}`
        },
        delete : {
            url : (id) => `${BASE_API_URL}/Activities/${id}`
        }
    },
    authors : {
        getAll : {
            url : `${BASE_API_URL}/Authors`
        },
        create : {
            url : `${BASE_API_URL}/Authors`
        },
        getByBookId : {
            url : (idBook) => `${BASE_API_URL}/Authors/authors/books/${idBook}`
        },
        getById : {
            url: (id) => `${BASE_API_URL}/Authors/${id}`
        },
        update : {
            url: (id) => `${BASE_API_URL}/Authors/${id}`
        },
        delete : {
            url : (id) => `${BASE_API_URL}/Authors/${id}`
        }
    },
    books : {
        getAll : {
            url : `${BASE_API_URL}/Books`
        },
        create : {
            url : `${BASE_API_URL}/Books`
        },
        getById : {
            url : (id) => `${BASE_API_URL}/Books/${id}`
        },
        update : {
            url : (id) => `${BASE_API_URL}/Books/${id}`
        },
        delete : {
            url : (id) => `${BASE_API_URL}/Books/${id}`
        }
    },
    coverPhotos : {
        getAll : {
            url : `${BASE_API_URL}/CoverPhotos`,
        },
        create : {
            url : `${BASE_API_URL}/CoverPhotos`
        },
        getByIdBook : {
            url : (idBook) => `${BASE_API_URL}/CoverPhotos/books/covers/${idBook}`
        },
        getById : {
            url: (id) => `${BASE_API_URL}/CoverPhotos/${id}`
        },
        update : {
            url: (id) => `${BASE_API_URL}/CoverPhotos/${id}`
        },
        delete : {
            url : (id) => `${BASE_API_URL}/CoverPhotos/${id}`
        }
    },
    users: {
        getAll : {
            url : `${BASE_API_URL}/Users`
        },
        create : {
            url : `${BASE_API_URL}/Users`
        },
        getById : {
            url: (id) => `${BASE_API_URL}/Users/${id}`
        },
        update : {
            url: (id) => `${BASE_API_URL}/Users/${id}`
        },
        delete : {
            url : (id) => `${BASE_API_URL}/Users/${id}`
        }
    }
}

    
module.exports = endpoints;