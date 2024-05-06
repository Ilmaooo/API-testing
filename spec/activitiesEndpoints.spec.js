const { verifyContentLength, BASE_URL } = require('../config');
const axios = require("axios").default;

describe('Activities endpoints', () => {
    it('should retrieve all activities data', async () => {
        const response = await axios.get(`${BASE_URL}/api/v1/Activities`);
        expect(response.status).toBe(200);
        console.log('Activities: ', response.data);
    })

    it('should create a new activity', async () => {
        const newActivity = {
            "id": 0,
            "title": "nova aktivnost",
            "dueDate": "2024-05-06T09:32:37.985Z",
            "completed": true
        }
        const response = await axios.post(`${BASE_URL}/api/v1/Activities`, newActivity, {
            headers : {
                'Content-Type': 'application/json; v=1.0',
                'accept': 'text/plain; v=1.0'
            }
        })
        expect(response.status).toBe(200);
        console.log('New activity:', response.data);
    })

    it('should retrieve a single activity data', async () => {
        const response = await axios.get(`${BASE_URL}/api/v1/Activities/1`);
        expect(response.status).toBe(200);
        console.log('Activity with id 1:', response.data);
    })

    it('should update an activity', async () => {
        const updatedActivity = {
            "id": 1,
            "title": "updated activity",
            "dueDate": "2024-05-06T09:36:05.644Z",
            "completed": true           
        }
        const response = await axios.put(`${BASE_URL}/api/v1/Activities/1`, updatedActivity, {
            headers : {
                'Content-Type': 'application/json; v=1.0',
                'accept': 'text/plain; v=1.0'
            }
        })
        expect(response.status).toBe(200);
        console.log('Updated activity:', response.data);
    })

    it('should delete an activity', async () => {
        const response = await axios.delete(`${BASE_URL}/api/v1/Activities/2`);
        expect(response.status).toBe(200);
    
        verifyContentLength(response);    
    });
    
});