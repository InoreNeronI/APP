import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'birt-front';

  constructor(
    public authService: AuthService
  ) {
  }

  logout(): void {
    this.authService.logout();
  }
}
