import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { observable } from 'rxjs';
import { Book } from './models/Book';
import { User } from './models/User';

@Injectable({
  providedIn: 'root',
})
export class FireStoreService {
  constructor(private afs: AngularFirestore, private db: AngularFireDatabase) {}

  registerUser(
    collection: AngularFirestoreCollection,
    user: User,
    success: () => void,
    failure: () => void
  ): void {
    if (user.id === '' || user.id === null || user.id === undefined) {
      this.incrementUserId();
      console.log('IDがないためユーザー登録はしません', user);
      return;
    }
    collection
      .doc(user.id)
      .set(Object.assign({}, user)) // カスタムオブジェクトをそのまま送信出来ないので展開する
      .then(() => {
        success();
      })
      .catch(() => {
        failure();
      });
  }

  registerBook(book: {}, success: () => void, failure: () => void): void {
    const keys = Object.keys(book);
    if (!keys.length) {
      console.log('必須項目がないため書籍登録はしません', book);
      return;
    }
    const books = this.db.list('/book');
    books.push(book);
    this.db.object('/book').set(books);
  }

  getLatestUserId(): void {
    const idsCollection = this.afs.collection('ids');

    idsCollection
      .doc('user_id')
      .valueChanges()
      .subscribe((value) => console.log(value));
  }

  incrementUserId(): void {
    const idsCollection = this.afs.collection('ids');
    idsCollection.doc('user_id').update({ id: '1' });
  }
}
