class Book {
  private id: number;
  private title: string;
  private author: string;
  constructor(id: number, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
  public getId(): number {
    return this.id;
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
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }
  public viewBooks(): void {
    if (this.books.length === 0) {
      console.log("Thư viện hiện chưa có sách.");
      return;
    }
    console.log("Danh sách sách trong thư viện:");
    this.books.forEach((book, index) => {
      console.log(
        `${
          index + 1
        }. [#${book.getId()}] ${book.getTitle()} - ${book.getAuthor()}`
      );
    });
  }
  public updateBookById(
    id: number,
    data: { title?: string; author?: string }
  ): boolean {
    const book = this.books.find((b) => b.getId() === id);
    if (!book) return false;
    if (typeof data.title === "string") book.setTitle(data.title);
    if (typeof data.author === "string") book.setAuthor(data.author);
    return true;
  }

  public searchBook(keyword: string): void {
    const lowerCaseKeyword = keyword.toLowerCase();
    const foundBooks = this.books.filter(
      (book) =>
        book.getTitle().toLowerCase().includes(lowerCaseKeyword)
    );
    if (foundBooks.length === 0) {
      console.log(`Không tìm thấy sách với từ khóa: "${keyword}"`);
      return;
    }
    console.log("Kết quả tìm kiếm:");
    foundBooks.forEach((book, index) => {
      console.log(
        `${
          index + 1
        }. [#${book.getId()}] ${book.getTitle()} - ${book.getAuthor()}`
      );
    });
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
console.log(
  ok ? "Đã cập nhật sách id=3.\n" : "Không tìm thấy sách để cập nhật.\n"
);
library.viewBooks();
