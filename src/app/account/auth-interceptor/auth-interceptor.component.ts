import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-interceptor',
  templateUrl: './auth-interceptor.component.html',
  styleUrls: ['./auth-interceptor.component.scss']
})
export class AuthInterceptorComponent implements HttpInterceptor  {

  constructor(private cookieService: CookieService) {}
  
  intercept(req: HttpRequest<any>,
     next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.cookieService.get('token');

      if (token) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
  
      return next.handle(req);

  }

}
