import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class GetBuildingNumberService {
  BaseUrl_BuildingNumber: string = '/api/Building/getBuildingsNumber/';
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  getbuildingsNumberbycompoundid(compoundid: number) {
    return this.http.get(
      `${env.apirooturl}${this.BaseUrl_BuildingNumber}${compoundid}`
    );
  }
}
