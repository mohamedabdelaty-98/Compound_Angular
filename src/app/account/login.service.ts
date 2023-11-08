import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/interfaces/user-login';
import { environment as env } from 'src/environments/environment.development';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BaseUrl: string = '/api/Account/Login';
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(user: UserLogin): Observable<any> {
    return this.http.post(`${env.apirooturl}${this.BaseUrl}`, user).pipe(
      map((response: any) => {
        const token = response.token;
        this.cookieService.set('token', token);
        return response;})
    );
  }
}
