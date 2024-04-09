class Book {
    title: string;
    author: string;
    price: number;
  
    constructor(title: string, author: string, price: number) {
      this.title = title;
      this.author = author;
      this.price = price;
    }
  
    printBook(): void {
      console.log(`**Thông tin sách**`);
      console.log(`Tên sách: ${this.title}`);
      console.log(`Tác giả: ${this.author}`);
      console.log(`Giá bán: ${this.price}`);
    }
  
    updateBook(title?: string, author?: string, price?: number): void {
      if (title) {
        this.title = title;
      }
      if (author) {
        this.author = author;
      }
      if (price) {
        this.price = price;
      }
    }
  }

  let book: Book = new Book("Hehehehe", "Tran Quang Linh", 1000001);

  book.printBook();

  book.updateBook("Hehehehehe", "Trần Linh Quang", 1000002);

  book.printBook();
  