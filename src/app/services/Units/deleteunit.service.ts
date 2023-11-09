import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DeleteunitService {
  BaseUrl: string = '/api/Unit/DeleteUnit/';
  constructor(private http: HttpClient) { }
  Deleteunit(id:number){
    return this.http.delete(`${env.apirooturl}${this.BaseUrl}${id}`);
  }
}