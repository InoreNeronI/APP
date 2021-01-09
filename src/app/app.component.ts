import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AuthService } from './auth/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  languages = ['en', 'es', 'eu'];
  title = 'birt-front';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private title_platform: Title,
    private meta: Meta,
    public authService: AuthService,
    public translate: TranslateService
  ) {
    this.setLang();
    title_platform.setTitle(this.title);
    this.setMeta();
  }

  changeLang(lang: string): void {
    this.document.documentElement.lang = lang;
    this.translate.use(lang);
    this.setMeta();
  }

  getLang(): string {
    const lang = navigator.language.slice(0, 2);
    if (this.languages.indexOf(lang) != -1) {
      return lang;
    }
    return this.languages[0];
  }

  isLang(lang: string): boolean {
    return this.translate.currentLang === lang;
  }

  logout(): void {
    this.authService.logout();
  }

  setLang(): void {
    const lang = this.getLang();
    this.document.documentElement.lang = lang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  setMeta(): void {
    this.translate.get('DESCRIPTION').subscribe((text: string) => {
      this.meta.updateTag({ name: 'description', content: text });
    });
  }
}
