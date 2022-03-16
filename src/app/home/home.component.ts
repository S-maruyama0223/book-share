import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  database: AngularFireDatabase;
  title = 'book-share';
  book$ = new Observable<any>();

  constructor(private db: AngularFireDatabase) {
    this.database = db;
  }

  ngOnInit(): void {
    this.book$ = this.database.object('/book').valueChanges();
  }
}
