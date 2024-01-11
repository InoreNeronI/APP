import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  error: any;
  form: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', Validators.required),
  });
  loading = true;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    this.loading = false;
  }

  login(): void {
    this.make(this.form.value);
  }

  make({ email, password }) {
    return this.http
      .post(environment.api.login, { observe: 'response', email, password })
      .pipe(
        catchError((err) => {
          this.error = err.error;
          return throwError(err);
        }),
      )
      .subscribe(async (response) => {
        if (response.hasOwnProperty('roles')) {
          localStorage.setItem('currentUser', email);
          localStorage.setItem('currentRole', JSON.parse(response['roles'].content)[0]);
          this.toastr.info(this.translateService.instant('LOGGED_IN'));
          await this.router.navigate(['/']);
        }
      });
  }
}
