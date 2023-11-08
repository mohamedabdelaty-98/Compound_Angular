import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class BuildingService {
  BaseUrl: string = '/api/Building/BuildingById/';
  AllBuildingsUrl: string = '/api/Building/GetAllBuilding';

  constructor(private http: HttpClient) {}
  getbuildingbyid(buildingid: number) : Observable<any>{
    return this.http.get(`${env.apirooturl}${this.BaseUrl}${buildingid}`);
  }

  getAllbuildings(): Observable<any>{
    return this.http.get(`${env.apirooturl}${this.AllBuildingsUrl}`);
  }
}
