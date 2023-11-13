import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { Building } from 'src/app/Models/building';

@Injectable({
  providedIn: 'root',
})
export class AddNewBuildingService {
  BaseUrl: string = '/api/Building/AddBuilding/';
  constructor(private http: HttpClient) {}
  AddNewBuilding(building:FormData) {
    return this.http.post(`${env.apirooturl}${this.BaseUrl}`,building);
  }
}
