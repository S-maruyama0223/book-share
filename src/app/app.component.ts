import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'book-share';
  book$ = new Observable<any>();

  constructor(private db: AngularFireDatabase) {
    // firebaseに定義されているbookという名前のテーブルの値を参照します。
    this.book$ = db.object('/book').valueChanges();
  }
}
