import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/interfaces/user-login';
import { UserRegister } from 'src/app/interfaces/user-register';
import { environment as env } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  BaseUrl: string = '/api/Account/Register';
  constructor(private http: HttpClient) { }

  register(user: UserRegister): Observable<any> {
    return this.http.post(`${env.apirooturl}${this.BaseUrl}`, user);
  }
}
