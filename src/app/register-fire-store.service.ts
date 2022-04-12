import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from './models/User';

@Injectable({
  providedIn: 'root',
})
export class RegisterFireStoreService {
  constructor() {}

  registerUser(
    collection: AngularFirestoreCollection,
    user: User,
    success: () => void,
    failure: () => void
  ): void {
    if (user.id === '' || user.id === null || user.id === undefined) {
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
}
