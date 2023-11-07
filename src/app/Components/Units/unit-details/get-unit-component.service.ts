import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetUnitComponentService {
baseUrl:string='';
  constructor(private httpClient: HttpClient) {}

  getUnitComponent(Id :number){
    const headers = new HttpHeaders();
    return this.httpClient.get(`${env.apirooturl}${this.baseUrl}${Id}`, { headers });
  }
}
