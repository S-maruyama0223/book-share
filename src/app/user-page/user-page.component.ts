import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Book } from '../models/Book';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  private userDoc: AngularFirestoreDocument<User>;
  private usersCollection: AngularFirestoreCollection<User>;
  private bookDoc: AngularFirestoreDocument<Book>;
  private booksCollection: AngularFirestoreCollection<Book>;
  user: User | undefined;

  constructor(private afs: AngularFirestore) {
    this.userDoc = afs.doc<User>('users/maruyama');
    this.usersCollection = afs.collection<User>('Users');
    this.bookDoc = afs.doc<Book>('users/maruyama/books/readble_code');
    this.booksCollection = afs.collection<Book>('users/maruyama/books');

    this.userDoc.valueChanges().subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
    this.booksCollection.valueChanges().subscribe((books) => {
      if (this.user) {
        this.user.books = books;
      }
    });
  }

  ngOnInit(): void {}
}

interface User {
  name: string;
  department: string;
  books: Array<Book>;
}
