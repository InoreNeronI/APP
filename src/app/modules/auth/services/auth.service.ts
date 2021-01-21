import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    private router: Router
  ) { }

  isLogged(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  isAdmin(): boolean {
    return localStorage.getItem('currentRole') === 'ROLE_ADMIN';
  }

  async logout(): Promise<void> {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentRole');
    await this.router.navigate(['/auth']);
  }
}
