const { verifyContentLength, BASE_URL } = require('../config');
const axios = require("axios").default;

describe('Books endpoints', () => {
    it('should retrieve all books data', async () => {
        const response = await axios.get(`${BASE_URL}api/v1/Books`);
        expect(response.status).toBe(200);
        console.log('Books: ', response.data);
    })

    it('should create a new book', async () => {
        const newBook = {
            "id": 0,
            "title": "nova knjiga",
            "description": "new new new new",
            "pageCount": 35,
            "excerpt": "string",
            "publishDate": "2024-05-06T09:55:15.289Z"            
        }

        const response = await axios.post(`${BASE_URL}api/v1/Books`, newBook, {
            headers: {
                'Content-Type': 'application/json; v=1.0',
                'accept': '*/*'
            }
        })
        expect(response.status).toBe(200);
        console.log('New book:', response.data);
    })

    it('should retrieve a single book data', async () => {
        const response = await axios.get(`${BASE_URL}/api/v1/Books/1`);
        expect(response.status).toBe(200);
        console.log('Book with id 1:', response.data);
    })

    it('should update a book', async () => {
        const updatedBook = {
            "id": 1,
            "title": "updated book",
            "description": "update",
            "pageCount": 100,
            "excerpt": "string",
            "publishDate": "2024-05-06T10:02:02.329Z"            
        }
        const currentData = await axios.get(`${BASE_URL}/api/v1/Books/1`);
        const updatedData = await axios.put(`${BASE_URL}/api/v1/Books/1`, updatedBook, {
            headers: {
                'Content-Type': 'application/json; v=1.0',
                'accept': '*/*'
            }
        })
        expect(updatedData.status).toBe(200);
        console.log('Current book:', currentData.data, '/n', 'Updated book:', updatedData.data);
    })

    it('should delete a book', async () => {
        const response = await axios.delete(`${BASE_URL}/api/v1/Books/1`);
        expect(response.status).toBe(200);
        verifyContentLength(response);    
    })
});