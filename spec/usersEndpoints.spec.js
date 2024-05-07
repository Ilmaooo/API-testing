const apiWrapper = require ("../apiWrapper");
const axios = require("axios").default;

describe('Users endpoints', () => {
    it('should retrieve all users data', async () => {
        const response = await apiWrapper.getUsers();
        console.log("Users: ", response.data);
        await expect(response.data.length).toBeGreaterThan(0);
        await expect(response.status).toBe(200);
    })

    it('should create a new user', async () => {
        const newUser = {
            "id": 11,
            "userName": "John Doe",
            "password": "newpass"
        }
        const response = await apiWrapper.createUser(newUser);
        console.log("New user: ", response.data);
        await expect(newUser).toBeDefined();
        await expect(response.status).toBe(200);
    })

    it('should retrieve a single user data', async () => {
        const userId = 10;
        const response = await apiWrapper.getUserById(userId);
        console.log("User: ", response.data);
        await expect(response.data.id).toBe(userId);
        await expect(response.status).toBe(200);
    })

    it('should update a user', async () => {
        const userId = 2;
        const updatedUser = {
            "id": userId,
            "userName": "updated user",
            "password": "updatedpass"            
        }

        const response = await apiWrapper.updateUser(userId, updatedUser);
        console.log("Updated user: ", response.data);
        await expect(updatedUser.id).toBe(userId);
        await expect(response.status).toBe(200);
    })

    it('should delete a user', async () => {
        const deletedUser = await apiWrapper.deleteUser(2);
        await expect(deletedUser.status).toBe(200);
        await expect(deletedUser.headers['content-length']).toBe("0");           
    })
})