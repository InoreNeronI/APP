import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AuthGuard {
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private translateService: TranslateService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (this.auth.isAdmin()) {
      // logged in as admin so return true and allow navigation
      return true;
    }
    if (this.auth.isUser()) {
      // logged in as plain user so return false and warn
      this.toastr.error(this.translateService.instant('FORBIDDEN'));
      return false;
    }
    // not logged in so redirect to login page
    this.toastr.info(this.translateService.instant('LOGIN_PLEASE'));
    await this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
