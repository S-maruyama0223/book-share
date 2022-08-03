export interface Book {
  title: {
    title: string;
    author: string;
    name: string;
    amazonUrl: string;
  };
}

export class Book implements Book {
  title = {
    title: '',
    author: '',
    name: '',
    amazonUrl: '',
  };
}
