import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class EditBuildingService {
  BaseUrl: string = '/api/Building/EditBuilding/';
  constructor(private http:HttpClient) { }
  EditBuilding(building:FormData){
    return this.http.put(`${env.apirooturl}${this.BaseUrl}`,building);
  }
}
