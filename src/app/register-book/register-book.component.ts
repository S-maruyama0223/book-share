import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { Constants } from '../models/constants';
import { FireStoreService } from '../fire-store.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.css'],
})
export class RegisterBookComponent implements OnInit {
  private usersCollection: AngularFirestoreCollection<User>;
  title = '';
  author = '';
  amazonUrl = '';

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private firestoreService: FireStoreService
  ) {
    this.usersCollection = afs.collection('books');
  }

  ngOnInit(): void {}

  registerBook(): void {
    const book = {
      title: this.title,
      author: this.author,
      amazonUrl: this.amazonUrl,
    };
    this.callRegisterBook(book);
  }

  private callRegisterBook(book: {}): void {
    this.firestoreService.registerBook(
      book,
      () => console.log('成功しました。'),
      () => this.clearUserForm()
    );
  }

  private clearUserForm(): void {
    this.title = '';
    this.author = '';
    this.amazonUrl = '';
  }
}
