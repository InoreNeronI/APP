import { Injectable, NgModule } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

// @see https://srinathsree122.medium.com/fixing-cors-issues-in-angular16-application-3d53d46dc845
// @see https://stackoverflow.com/q/49349103

@Injectable()
export class HttpCoreInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': 'api.beltza.eus'
      }
    });

    return next.handle(request);
  }
}

@NgModule({
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpCoreInterceptor, multi: true }]
})
export class InterceptorModule {}
