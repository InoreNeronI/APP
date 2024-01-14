import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Particles } from '../../../../particles';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent extends Particles implements OnInit {
  error: any;
  form: UntypedFormGroup = new UntypedFormGroup({
    firstName: new UntypedFormControl('', Validators.required),
    lastName: new UntypedFormControl('', Validators.required),
    email: new UntypedFormControl('', [Validators.email, Validators.required]),
    password: new UntypedFormControl('', Validators.required),
  });
  loading = true;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private translateService: TranslateService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.loading = false;
    this.drawParticles();
  }

  register(): void {
    this.make(this.form.value);
  }

  make({ firstName, lastName, email, password }) {
    return this.http
      .post(environment.api.user, {
        observe: 'response',
        firstName,
        lastName,
        email,
        plainPassword: password,
      })
      .pipe(
        catchError((err) => {
          this.error = err.error;
          return throwError(err);
        }),
      )
      .subscribe(async (response) => {
        if (response.hasOwnProperty('email')) {
          this.toastr.info(this.translateService.instant('SIGNED_UP', { email: response['email'] }));
          await this.router.navigate(['/auth']);
        }
      });
  }
}
