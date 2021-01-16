import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true and allow
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
