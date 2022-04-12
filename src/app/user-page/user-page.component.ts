import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Book } from '../models/Book';
import { UserPageService } from '../user-page.service';
import { User } from '../models/User';

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
  logoName = '';
  user: User | undefined;

  constructor(private afs: AngularFirestore, private service: UserPageService) {
    // TODO: URLのIDから取得
    this.userDoc = afs.doc<User>('users/maruyama');
    this.usersCollection = afs.collection<User>('Users');
    this.bookDoc = afs.doc<Book>('users/maruyama/books/readble_code');
    this.booksCollection = afs.collection<Book>('users/maruyama/books');

    this.userDoc.valueChanges().subscribe((user) => {
      if (user) {
        this.user = user;
        this.logoName = service.createUserLogoName(
          this.user.firstName,
          this.user.lastName
        );
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
