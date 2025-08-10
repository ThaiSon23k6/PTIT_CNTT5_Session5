class Book {
  private title: string;
  private author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  public getTitle(): string {
    return this.title;
  }
  public getAuthor(): string {
    return this.author;
  }
  public setTitle(title: string): void {
    this.title = title;
  }
  public setAuthor(author: string): void {
    this.author = author;
  }
}

class Library {
  books: Book[];
  constructor() {
    this.books = [];
  }

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public listBooks(): void {
    this.books.forEach((book) => {
      console.log(`Title: ${book.getTitle()}, Author: ${book.getAuthor()}`);
    });
  }
}

const library = new Library();
library.addBook(new Book("1984", "George Orwell"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
library.addBook(new Book("Moby Dick", "Herman Melville"));
library.addBook(new Book("War and Peace", "Leo Tolstoy"));
library.listBooks();
