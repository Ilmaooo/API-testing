const apiWrapper = require ("../apiWrapper");
const axios = require("axios").default;

describe('Books endpoints', () => {
    it('should retrieve all books data', async () => {
        const response = await apiWrapper.getBooks();
        console.log("Books: ", response.data);
        await expect(response.data.length).toBeGreaterThan(0);
        await expect(response.status).toBe(200);
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
        const response = await apiWrapper.createBook(newBook);
        console.log("New book: ", response.data);
        await expect(newBook).toBeDefined();
        await expect(response.status).toBe(200);
    })

    it('should retrieve a single book data', async () => {
        const bookId = 1;
        const response = await apiWrapper.getBookById(bookId);
        console.log("Book: ", response.data);
        await expect(response.data.id).toBe(bookId);
        await expect(response.status).toBe(200);
    })

    it('should update a book', async () => {
        const bookId = 1;
        const updatedBook = {
            "id": bookId,
            "title": "updated book",
            "description": "update",
            "pageCount": 100,
            "excerpt": "string",
            "publishDate": "2024-05-06T10:02:02.329Z"            
        }
        const response = await apiWrapper.updateBook(bookId, updatedBook);
        console.log("Updated book: ", response.data);
        await expect(updatedBook.id).toBe(bookId);  
        await expect(response.status).toBe(200);  
    })

    it('should delete a book', async () => {
        const deletedBook = await apiWrapper.deleteBook(2);
        await expect(deletedBook.status).toBe(200);
        await expect(deletedBook.headers['content-length']).toBe("0");
    })
});