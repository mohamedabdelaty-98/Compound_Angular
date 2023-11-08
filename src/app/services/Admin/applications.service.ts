import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  BaseUrl: string = '/api/Application/GetAllApplication';

  constructor(private httpClient: HttpClient) { }


getAllApplications(): Observable<any>{
 return this.httpClient.get(`${env.apirooturl}${this.BaseUrl}`);
 }

}

