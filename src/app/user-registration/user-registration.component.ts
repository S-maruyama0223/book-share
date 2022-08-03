import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Book } from '../models/Book';
import { User } from '../models/User';
import { Constants } from '../models/constants';
import { FireStoreService } from '../fire-store.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {
  private usersCollection: AngularFirestoreCollection<User>;
  firstName = '';
  lastName = '';
  department = '';
  selectedDivision = '';
  divisionValues = Constants.DIVISION_VALUES;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private firestoreService: FireStoreService
  ) {
    this.usersCollection = afs.collection('users');
  }

  ngOnInit(): void {}

  registerUser(): void {
    const user = new User();
    user.id = this.generateId();
    user.firstName = this.firstName;
    user.lastName = this.lastName;
    user.department = this.department;
    user.division = this.selectedDivision;
    this.callRegisterUser(user);
  }

  private generateId(): string {
    const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const N = 4;
    return Array.from(Array(N))
      .map(() => S[Math.floor(Math.random() * S.length)])
      .join('');
  }

  private callRegisterUser(user: User): void {
    this.firestoreService.registerUser(
      this.usersCollection,
      user,
      () => console.log('成功しました。'),
      () => this.clearUserForm()
    );
  }

  private clearUserForm(): void {
    this.firstName = '';
    this.lastName = '';
    this.department = '';
    this.selectedDivision = '';
  }
}
