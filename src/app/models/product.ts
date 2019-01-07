import {Book} from "app/models/book";

export class Product {
  isbn:string;
  quantity:number;

  constructor(isbn: string, quantity: number) {
    this.isbn = isbn;
    this.quantity = quantity;
  }
}
