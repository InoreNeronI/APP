import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  error: any;
  form: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email] ),
    password: new FormControl('', Validators.required)
  });
  loading = true;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = false;
  }

  login(): void {
    this.make(this.form.value);
  }

  make({ email, password }) {
    return this.http.post(
      environment.api.login,
      {observe: 'response', email, password}
    ).pipe(catchError((err) => {
      this.error = err.error;
      return throwError(err);
    })).subscribe(async response => {
      if (response) {
        localStorage.setItem('currentUser', email);
        if (response.hasOwnProperty('roles')) {
          localStorage.setItem('currentRole', JSON.parse(response['roles'].content)[0]);
        }
        await this.router.navigate(['/']);
      }
    });
  }
}
