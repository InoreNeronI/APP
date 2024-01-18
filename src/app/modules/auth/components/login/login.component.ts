import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormControl, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf, RouterLink, TranslateModule],
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
          this.loading = true;
          localStorage.setItem('currentUser', email);
          localStorage.setItem('currentRole', JSON.parse(response['roles'].content)[0]);
          this.toastr.info(this.translateService.instant('LOGGED_IN'));
          await this.router.navigate(['/']);
        }
      });
  }
}
