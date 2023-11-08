import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GetAllBuildingsService {
  BaseUrl: string = '/api/Building/GetAllBuilding/';
  constructor(private http: HttpClient) {}
  GetAllBuildings() {
    return this.http.get(`${env.apirooturl}${this.BaseUrl}`);
  }
}
