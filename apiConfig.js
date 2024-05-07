const BASE_API_URL = 'https://fakerestapi.azurewebsites.net/api/v1';

const urls = {
    activities : {
        getAll : {
            method : 'GET',
            url : `${BASE_API_URL}/Activities`
        },
        create : {
            method : 'POST',
            url: `${BASE_API_URL}/Activities`,
        },
        getById : {
            method : 'GET',
            url: (id) => `${BASE_API_URL}/Activities/${id}`
        },
        update : {
            method : 'PUT',
            url: (id) => `${BASE_API_URL}/Activities/${id}`
        },
        delete : {
            method : 'DELETE',
            url : (id) => `${BASE_API_URL}/Activities/${id}`
        }
    },
    authors : {
        getAll : {
            method : 'GET',
            url : `${BASE_API_URL}/Authors`
        },
        create : {
            method : 'POST',
            url : `${BASE_API_URL}/Authors`
        },
        getByBookId : {
            method : 'GET',
            url : (idBook) => `${BASE_API_URL}/Authors/authors/books/${idBook}`
        },
        getById : {
            method : 'GET',
            url: (id) => `${BASE_API_URL}/Authors/${id}`
        },
        update : {
            method : 'PUT',
            url: (id) => `${BASE_API_URL}/Authors/${id}`
        },
        delete : {
            method : 'DELETE',
            url : (id) => `${BASE_API_URL}/Authors/${id}`
        }
    },
    books : {
        getAll : {
            method : 'GET',
            url : `${BASE_API_URL}/Books`
        },
        create : {
            method : 'POST',
            url : `${BASE_API_URL}/Books`
        },
        getById : {
            method : 'GET',
            url : (id) => `${BASE_API_URL}/Books/${id}`
        },
        update : {
            method : 'PUT',
            url : (id) => `${BASE_API_URL}/Books/${id}`
        },
        delete : {
            method : 'DELETE',
            url : (id) => `${BASE_API_URL}/Books/${id}`
        }
    },
    coverPhotos : {
        getAll : {
            method : 'GET',
            url : `${BASE_API_URL}/CoverPhotos`,
        },
        create : {
            method : 'POST',
            url : `${BASE_API_URL}/CoverPhotos`
        },
        getByIdBook : {
            method : 'GET',
            url : (idBook) => `${BASE_API_URL}/CoverPhotos/books/covers/${idBook}`
        },
        getById : {
            method : 'GET',
            url: (id) => `${BASE_API_URL}/CoverPhotos/${id}`
        },
        update : {
            method : 'PUT',
            url: (id) => `${BASE_API_URL}/CoverPhotos/${id}`
        },
        delete : {
            method : 'DELETE',
            url : (id) => `${BASE_API_URL}/CoverPhotos/${id}`
        }
    },
    users: {
        getAll : {
            method : 'GET',
            url : `${BASE_API_URL}/Users`
        },
        create : {
            method : 'POST',
            url : `${BASE_API_URL}/Users`
        },
        getById : {
            method : 'GET',
            url: (id) => `${BASE_API_URL}/Users/${id}`
        },
        update : {
            method : 'PUT',
            url: (id) => `${BASE_API_URL}/Users/${id}`
        },
        delete : {
            method : 'DELETE',
            url : (id) => `${BASE_API_URL}/Users/${id}`
        }
    }
}

    
module.exports = urls;