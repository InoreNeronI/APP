import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';

// @see https://stackoverflow.com/a/76020552
export const DEFAULT_LANG = 'en';
export class LazyTranslateLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    public prefix: string = '/assets/i18n/',
    public suffix: string = '.json',
  ) {}

  /**
   * Gets the translations from the server
   */
  public getTranslation(lang: string): Observable<Object> {
    return this.http
      .get(`/assets/i18n/${lang}.json`)
      .pipe(catchError(() => this.http.get(`/assets/i18n/${DEFAULT_LANG}.json`)));
  }
}
