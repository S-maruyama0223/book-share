import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constants';
import { BookModel } from '../model/book-model';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public bookCategories: string[] = Constants.BOOK_CATEGORIES;
  public model: BookModel = new BookModel('', '', '', '', '');

}
