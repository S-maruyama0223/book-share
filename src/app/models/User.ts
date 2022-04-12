import { Book } from './Book';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  department: string;
  books: Array<Book>;
}

export class User implements User {
  id = '';
  firstName = '';
  lastName = '';
  division = '';
  department = '';
  books: Array<Book> = [];
}
