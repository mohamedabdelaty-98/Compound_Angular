import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseURL:string= '/api/User/GetAllUsers';
 constructor(private httpClient: HttpClient) {
 }

 getAllusers(): Observable<any>{
 return this.httpClient.get(`${env.apirooturl}${this.baseURL}`);
 }





}
