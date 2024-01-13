import { Injectable, NgModule } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

// @see https://srinathsree122.medium.com/fixing-cors-issues-in-angular16-application-3d53d46dc845
// @see https://stackoverflow.com/q/49349103

@Injectable()
export class HttpCoreInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'X-Requested-With, X-Auth-Token, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding, X-Login-Origin, responseType',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      },
    });

    return next.handle(request);
  }
}

@NgModule({
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpCoreInterceptor, multi: true }],
})
export class InterceptorModule {}
