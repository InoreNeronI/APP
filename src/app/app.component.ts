import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './modules/auth/services/auth.service';
import { Particles } from './particles';
import { ParticlesDirective } from './particles.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends Particles implements AfterViewInit {
  // @see https://www.digitalocean.com/community/tutorials/angular-viewchild-access-component-es
  canvasParticlesElement: HTMLElement;
  languages = ['en', 'es', 'eu'];
  title = 'APP';

  @ViewChild(ParticlesDirective)
  set particlesElement(directive: ParticlesDirective) {
    this.canvasParticlesElement = directive.element;
  }

  ngAfterViewInit() {
    this.drawParticles(this.canvasParticlesElement, this.canvasParticlesElement.parentElement);
    // @see https://christiankohler.net/how-to-use-resizeobserver-with-angular
    const observer = new ResizeObserver((entries) => entries.forEach(this.windowResizeHandler.bind(this)));
    observer.observe(this.canvasParticlesElement.parentElement);
  }

  constructor(
    @Inject(DOCUMENT) public override document: Document,
    private title_platform: Title,
    private meta: Meta,
    public authService: AuthService,
    public translate: TranslateService,
  ) {
    super(document);
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
