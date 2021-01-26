import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent implements OnInit {
  error: any;
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required ] ),
    password: new FormControl('', Validators.required)
  });
  loading = true;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.loading = false;
  }

  register(): void {
    this.make(this.form.value);
  }

  make({firstName, lastName, email, password}) {
    return this.http.post(
      environment.api.user, {observe: 'response', firstName, lastName, email, plainPassword: password }
    ).pipe(catchError((err) => {
      this.error = err.error;
      return throwError(err);
    })).subscribe(async response => {
      if (response.hasOwnProperty('email')) {
        this.toastr.info(this.translateService.instant('SIGNED_UP', { email: response['email'] }));
        await this.router.navigate(['/auth']);
      }
    });
  }
}
