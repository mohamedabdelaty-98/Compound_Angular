import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class EditunitService {
  BaseUrl: string = '/api/Unit/EditUnit/';

  constructor(private http:HttpClient) { 
    EditBuilding(building:FormData){
      return this.http.put(`${env.apirooturl}${this.BaseUrl}`,building);
  }
}
}




