const authorsTasks = require("./api_handlers/authorsTasks");
const booksTasks = require("./api_handlers/booksTasks");
const coverPhotosTasks = require("./api_handlers/coverPhotosTasks");

describe("Combine authors, books, and cover photos endpoints", () => {
    let author;
    let book;
    let coverPhoto;

    it("should get a single author, check if it has books, and check if books have cover photos", async () => {
        const authorId = 2;
        const authorResponse = await authorsTasks.getAuthorById(authorId);
        author = authorResponse.data;
        console.log("Author: ", author);
        await expect(author.id).toBe(authorId);
        await expect(author.idBook).toBeDefined;
        console.log("Book id: ", author.idBook);

        const bookId = author.idBook;
        const bookResponse = await booksTasks.getBookById(bookId);
        book = bookResponse.data;
        console.log("Book: ", book);
        await expect(book.id).toBe(bookId);

        const coverPhotoByBookId = book.id;
        const coverPhotoResponse = await coverPhotosTasks.getCoverPhotoByBookId(coverPhotoByBookId);
        coverPhoto = coverPhotoResponse.data;
        console.log("Cover photo: ", coverPhoto); 
        await expect(coverPhoto[0].id).toBe(coverPhotoByBookId);
    });

});
