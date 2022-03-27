export class BookModel{
    constructor(
      public title: string,
      public author: string,
      public contributor: string,
      public bookCategory: string,
      public amazonUrl: string
    ){}
  }