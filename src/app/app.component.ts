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
    const lang = this.getLang();
    translate.setDefaultLang(lang);
    translate.use(lang);
  }

  changeLang(lang: string):void{
    this.translate.use(lang);
  }

  getLang():string{
    const lang = navigator.language.slice(0, 2);
    if (['en', 'es', 'eu'].indexOf(lang) != -1) {
      return lang;
    }
    return 'en';
  }

  logout(): void {
    this.authService.logout();
  }
}
