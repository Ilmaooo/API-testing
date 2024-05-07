const authorsTasks = require("./api_handlers/authorsTasks");

describe('Authors endpoints', () => {
    it('should retrieve all authors data', async () => {
        const response = await authorsTasks.getAuthors();
        console.log("Authors: ", response.data);
        await expect(response.data.length).toBeGreaterThan(0);
        await expect(response.status).toBe(200);
    })

    it('should create a new author', async () => {
        const newAuthor = {
            "idBook": 1,
            "firstName": "John",
            "lastName": "Doe"
        }
        const response = await authorsTasks.createAuthor(newAuthor);
        console.log("New author: ", response.data);
        await expect(newAuthor).toBeDefined();
        await expect(response.status).toBe(200);
    })

    it('should retrieve a single author data', async () => {
        const response = await authorsTasks.getAuthorById(1);
        console.log("Author: ", response.data);
        await expect(response.data.id).toBeDefined();
        await expect(response.status).toBe(200);    
    })

    it('should return author information for a specific book ids', async () => {
        const response = await authorsTasks.getAuthorsByBookId(1);
        console.log("Authors: ", response.data);
        await expect(response.status).toBe(200);
    })

    it('should update an author', async () => {
        const updatedAuthor = {
            "idBook": 2,
            "firstName": "updated",
            "lastName": "author"
        }
        const authorId = 1;
        const response = await authorsTasks.updateAuthor(authorId, updatedAuthor);
        console.log("Updated author: ", response.data);
        await expect(updatedAuthor).toBeDefined();
        await expect(response.status).toBe(200);
    })
    

    it('should delete an author', async () => {
        const deletedAuthor = await authorsTasks.deleteAuthor(2);
        await expect(deletedAuthor.status).toBe(200);
        await expect(deletedAuthor.headers['content-length']).toBe("0");
    })
})