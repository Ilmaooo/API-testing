const coverPhotosTasks = require("./api_handlers/coverPhotosTasks")

describe('Cover photos endpoints', () => {
    it('should retrieve all cover photos data', async () => {
        const response = await coverPhotosTasks.getCoverPhotos();
        console.log("Cover photos: ", response.data);
        await expect(response.data.length).toBeGreaterThan(0);
        await expect(response.status).toBe(200);
    })

    it('should add a new cover photo', async () => {
        const newCover = {
            "id": 0,
            "idBook": 0,
            "url": "newCover.jpg"            
        }
        const response = await coverPhotosTasks.createCoverPhoto(newCover);
        await expect(newCover).toBeDefined();
        await expect(response.status).toBe(200);
    })

    it('should retrieve cover photos for a specific book by id', async () => {
        const response = await coverPhotosTasks.getCoverPhotoByBookId(1);
        console.log(`Cover photos for book with id 1: `, response.data);
        await expect(response.status).toBe(200);
    })

    it('should retrieve a specific cover photo by ID', async () => {
        const coverId = 1;
        const response = await coverPhotosTasks.getCoverPhotoById(coverId);
        console.log("Cover photo with id 1: ", response.data);
        await expect(response.status).toBe(200);
    })

    it('should update a cover photo', async () => {
        const coverId = 1;
        const updatedCover = {
            "id": coverId,
            "idBook": 500,
            "url": "updatedCover.jpg"            
        }
        const response = await coverPhotosTasks.updateCoverPhoto(coverId, updatedCover);
        await expect(updatedCover.id).toBe(coverId);
        await expect(response.status).toBe(200);
    })

    it('should delete a cover photo', async () => {
        const deletedCover = await coverPhotosTasks.deleteCoverPhoto(2);
        await expect(deletedCover.status).toBe(200);
        await expect(deletedCover.headers['content-length']).toBe("0");
    })
})