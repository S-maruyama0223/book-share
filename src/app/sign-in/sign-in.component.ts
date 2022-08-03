import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  userName = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  askVerifyResult(): Observable<VerifyResult> {
    return this.http.get<VerifyResult>('../assets/verify.json');
  }

  verify(): void {
    if (!this.userName || !this.password) {
      return;
    }
    const user = new VerifyResult();
    this.askVerifyResult().subscribe((res) => {
      if (res.result) {
        this.router.navigate(['/home']);
      }
    });
  }
}

interface VerifyResult {
  result: boolean;
}

class VerifyResult implements VerifyResult {
  result = false;
}
