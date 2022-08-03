import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  database: AngularFireDatabase;
  title = 'book-share';
  titleChars: string[] = [];
  bookArray = [
    {
      title: '',
      author: '',
      name: '',
      amazonUrl: '',
      like: false,
    },
  ];

  constructor(private db: AngularFireDatabase, private service: HomeService) {
    this.database = db;
  }

  ngOnInit(): void {
    this.database
      .object('/book')
      .valueChanges()
      .subscribe((books) => {
        const anyBook: any = books;
        this.bookArray = Object.values(anyBook);
        this.titleChars = this.service.substringFirstChar(this.bookArray);
        console.log(this.titleChars);
      });
  }

  like(index: number): void {
    this.bookArray[index].like = !this.bookArray[index].like;
    console.log(this.bookArray);
  }
}
