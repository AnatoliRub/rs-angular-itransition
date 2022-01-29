import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token = 'AIzaSyDF_5j1eztH8e0f7Bvmnz2YuVKxURGkGTw';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = request.clone({
      params: request.params.append('key', this.token),
    });
    return next.handle(clone);
  }
}
