class Book {
    constructor(
        name,
        author,
        pubYear,
        color,
        pages,
        currentPage,
        isRead
    ) {
        this.name = name;
        this.author = author;
        this.pubYear = pubYear;
        this.color = color;
        this.pages = pages;
        this.currentPage = currentPage;
        this.isRead = isRead;
    }
    bookStatus(finishBook) {
        this.isRead = finishBook;
    }
    changePage(setPage) {
        this.currentPage = setPage;
    }
}
 export default Book;