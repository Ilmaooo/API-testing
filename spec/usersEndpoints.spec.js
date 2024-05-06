const { verifyContentLength, BASE_URL } = require('../config');
const axios = require("axios").default;

describe('Users endpoints', () => {
    it('should retrieve all users data', async () => {
        const response = await axios.get(`${BASE_URL}api/v1/Users`);
        expect(response.status).toBe(200);
        console.log('Users: ', response.data);
    })

    it('should create a new user', async () => {
        const newUser = {
            "id": 11,
            "userName": "John Doe",
            "password": "newpass"
        }

        const response = await axios.post(`${BASE_URL}api/v1/Users`, newUser, {
            headers: {
                'Content-Type': 'application/json; v=1.0',
                'accept': '*/*'
            }
        })
        expect(response.status).toBe(200);
        console.log('New user: ', response.data);
    })

    it('should retrieve a single user data', async () => {
        const response = await axios.get(`${BASE_URL}api/v1/Users/10`);
        expect(response.status).toBe(200);
        console.log('User with id 10:', response.data);
    })

    it('should update a user', async () => {
        const updatedUser = {
            "id": 10,
            "userName": "updated user",
            "password": "updatedpass"            
        }

        const currentUser = await axios.get(`${BASE_URL}api/v1/Users/10`);

        const response = await axios.put(`${BASE_URL}api/v1/Users/10`, updatedUser, {
            headers: {
                'Content-Type': 'application/json; v=1.0',
                'accept': '*/*'
            }
        })
        expect(response.status).toBe(200);
        console.log('Current user:', currentUser.data, '/n', 'Updated user:', response.data);
    })

    it('should delete a user', async () => {
        const response = await axios.delete(`${BASE_URL}api/v1/Users/10`);
        expect(response.status).toBe(200);
        verifyContentLength(response);              
    })
})