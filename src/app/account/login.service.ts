import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/interfaces/user-login';
import { environment as env } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BaseUrl: string = '/api/Account/Login';
  constructor(private http: HttpClient) { }

  login(user: UserLogin): Observable<any> {
    return this.http.post(`${env.apirooturl}${this.BaseUrl}`, user);
  }
}
