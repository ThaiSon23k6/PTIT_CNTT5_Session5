"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setTitle(title) {
        this.title = title;
    }
    setAuthor(author) {
        this.author = author;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện hiện chưa có sách.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. [#${book.getId()}] ${book.getTitle()} - ${book.getAuthor()}`);
        });
    }
    updateBookById(id, data) {
        const book = this.books.find((b) => b.getId() === id);
        if (!book)
            return false;
        if (typeof data.title === "string")
            book.setTitle(data.title);
        if (typeof data.author === "string")
            book.setAuthor(data.author);
        return true;
    }
}
const book1 = new Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const book2 = new Book(2, "Lão Hạc", "Nam Cao");
const book3 = new Book(3, "Tuổi Thơ Dữ Dội", "Phùng Quán");
const book4 = new Book(4, "Tắt Đèn", "Ngô Tất Tố");
const book5 = new Book(5, "Vợ Nhặt", "Kim Lân");
const library = new Library();
[book1, book2, book3, book4, book5].forEach((b) => library.addBook(b));
const ok = library.updateBookById(3, {
    title: "Tuổi Thơ Dữ Dội (Bản đặc biệt)",
    author: "Phùng Quán",
});
console.log(ok ? "Đã cập nhật sách id=3.\n" : "Không tìm thấy sách để cập nhật.\n");
library.viewBooks();
