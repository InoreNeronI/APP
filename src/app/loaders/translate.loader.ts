import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// @see https://stackoverflow.com/a/76020552
const DEFAULT_LANG = 'en';

export class LazyTranslateLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private locationStrategy: LocationStrategy,
    private readonly prefix: string,
    private suffix: string = '.json',
  ) {
    // @see https://stackoverflow.com/a/69207853/16711967
    this.prefix = `${this.locationStrategy.getBaseHref()}assets/i18n/`;
  }

  /**
   * Gets the translations from the server
   */
  public getTranslation(lang: string): Observable<Object> {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`).pipe(catchError(() => this.http.get(`${this.prefix}${DEFAULT_LANG}${this.suffix}`)));
  }
}
