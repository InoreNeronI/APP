import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'birt-front';

  constructor(
    public authService: AuthService,
    public translate: TranslateService
  ) {
    translate.setDefaultLang('es');
    translate.use('es');
  }

  changeLang(lang: string):void{
    this.translate.use(lang);
  }

  logout(): void {
    this.authService.logout();
  }
}
