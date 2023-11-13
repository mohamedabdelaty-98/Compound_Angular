import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceProjectBuildingService {
  BaseUrl: string = '/api/ServicesBuilding/GetServicesBuildingByBuilding/';
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  getservceBuilding(Buildingid: number): Observable<any> {
    return this.http.get(`${env.apirooturl}${this.BaseUrl}${Buildingid}`);
  }
}
