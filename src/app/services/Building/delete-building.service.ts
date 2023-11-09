import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DeleteBuildingService {
  BaseUrl: string = '/api/Building/DeleteBuilding/';
  constructor(private http: HttpClient) { }
  DeleteBuilding(BuildingId:number){
    return this.http.delete(`${env.apirooturl}${this.BaseUrl}${BuildingId}`);
  }
  }
