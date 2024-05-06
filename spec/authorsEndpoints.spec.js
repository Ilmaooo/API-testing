const { verifyContentLength, BASE_URL } = require('../config');
const axios = require("axios").default;

describe('Authors endpoints', () => {
    it('should retrieve all authors data', async () => {
        const response = await axios.get(`${BASE_URL}api/v1/Authors`);
        expect(response.status).toBe(200);
        console.log('Authors: ', response.data);
    })

    it('should create a new author', async () => {
        const newAuthor = {
            "id": 0,
            "idBook": 0,
            "firstName": "new",
            "lastName": "author"          
        }
        const response = await axios.post(`${BASE_URL}api/v1/Authors`, newAuthor, {
                headers: {
                    'Content-Type': 'application/json; v=1.0',
                    'accept': 'text/plain; v=1.0'
                  }
        })
        expect(response.status).toBe(200);
        console.log('New author:', response.data);
    })

    it('should retrieve a single author data', async () => {
        const response = await axios.get(`${BASE_URL}api/v1/Authors/1`);
        expect(response.status).toBe(200);
        console.log('Author with id 1:', response.data);
    })

    it('should return author information for a specific book ids', async () => {
        const response = await axios.get(`${BASE_URL}api/v1/Authors/authors/books/1`);
        expect(response.status).toBe(200);
        console.log('Author for books with id 1:', response.data);
    })

    it('should update an author', async () => {
        const updatedAuthor = {
            "id": 1,
            "idBook": 1,
            "firstName": "updated",
            "lastName": "author"          
        }
        const response = await axios.put(`${BASE_URL}api/v1/Authors/1`, updatedAuthor, {
            headers: {
                headers: {
                    'Content-Type': 'application/json; v=1.0',
                    'accept': 'text/plain; v=1.0'
                  }
            }
        })
        expect(response.status).toBe(200);
        console.log('Updated author:', response.data);
    })

    it('should delete an author', async () => {
        const response = await axios.delete(`${BASE_URL}api/v1/Authors/1`);
        expect(response.status).toBe(200);
        verifyContentLength(response);    
    })
});