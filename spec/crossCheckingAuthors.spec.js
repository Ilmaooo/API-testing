const authorsTasks = require("./api_handlers/authorsTasks");

describe("Cross-checking authors associated with a book", () => {
    let authorsOfTheBook;
    let allAuthors;

    beforeAll(async () => {
        // Get all authors
        const authors = await authorsTasks.getAuthors();
        allAuthors = authors.data;

        // Get authors associated with the specific book
        const bookId = 1; 
        const response = await authorsTasks.getAuthorsByBookId(bookId);
        authorsOfTheBook = response.data;
        console.log("Authors of the Book:", authorsOfTheBook);

    });

    it("should ensure all authors associated with the book exist in the overall authors list", async () => {
        // Perform cross-checking
        await authorsOfTheBook.forEach(authorOfTheBook => {
            const foundAuthor = allAuthors.find(author => author.id === authorOfTheBook.id);
            expect(foundAuthor).toBeDefined();
            expect(foundAuthor.firstName).toBe(authorOfTheBook.firstName);
            console.log("Author found: ", foundAuthor);
            expect(foundAuthor.lastName).toBe(authorOfTheBook.lastName);
        });
    });
});
