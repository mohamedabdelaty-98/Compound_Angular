import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BuildingService {
  BaseUrl: string = '/api/Building/BuildingById/';
  constructor(private http: HttpClient) {}
  getbuildingbyid(buildingid: number) {
    return this.http.get(`${env.apirooturl}${this.BaseUrl}${buildingid}`);
  }
}
