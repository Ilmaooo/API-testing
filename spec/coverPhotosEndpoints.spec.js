const { verifyContentLength, BASE_URL } = require('../config');
const axios = require("axios").default;

describe('Cover photos endpoints', () => {
    it('should retrieve all cover photos data', async () => {
        const response = await axios.get(`${BASE_URL}api/v1/CoverPhotos`);
        expect(response.status).toBe(200);
        console.log('Cover photos: ', response.data);
    })

    it('should add a new cover photo', async () => {
        const newCover = {
            "id": 0,
            "idBook": 0,
            "url": "newCover.jpg"            
        }

        const response = await axios.post(`${BASE_URL}api/v1/CoverPhotos`, newCover, {
            headers: {
                'Content-Type': 'application/json; v=1.0',
                'accept': '*/*'
            }
        })
        expect(response.status).toBe(200);
        console.log('New cover photo:', response.data);
    })

    it('should retrieve cover photos for a specific book by id', async () => {
        const response = await axios.get(`${BASE_URL}/api/v1/CoverPhotos/books/covers/1`)
        expect(response.status).toBe(200);
        console.log('Cover photos for book with id 1:', response.data);
    })

    it('should retrieve a specific cover photo by ID', async () => {
        const response = await axios.get(`${BASE_URL}/api/v1/CoverPhotos/1`);
        expect(response.status).toBe(200);
        console.log('Cover photo with id 1:', response.data);
    })

    it('should update a cover photo', async () => {
        const updatedCover = {
            "id": 101,
            "idBook": 1,
            "url": "updatedCover.jpg"            
        }
        const currentCover = await axios.get(`${BASE_URL}/api/v1/CoverPhotos/1`);
        const response = await axios.put(`${BASE_URL}/api/v1/CoverPhotos/1`, updatedCover, {
            headers: {
                'Content-Type': 'application/json; v=1.0',
                'accept': '*/*'
            }
        })
        expect(response.status).toBe(200);
        console.log('Current cover photo: ', currentCover.data, 'Updated cover photo:', response.data);
    })

    it('should delete a cover photo', async () => {
        const response = await axios.delete(`${BASE_URL}api/v1/CoverPhotos/1`);
        expect(response.status).toBe(200);
        verifyContentLength(response);         
    })
})