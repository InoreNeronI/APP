import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AuthService {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private translateService: TranslateService
  ) { }

  isLogged(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  isAdmin(): boolean {
    return localStorage.getItem('currentRole') === 'ROLE_ADMIN';
  }

  isUser(): boolean {
    return localStorage.getItem('currentRole') === 'ROLE_USER';
  }

  async logout(): Promise<void> {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentRole');
    this.toastr.info(this.translateService.instant('LOGGED_OUT'));
    await this.router.navigate(['/auth']);
  }
}
