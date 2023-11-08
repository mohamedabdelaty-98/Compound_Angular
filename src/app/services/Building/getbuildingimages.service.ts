import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class BuildingimageserviceService {
  BaseUrl: string = '/api/BuildingImage/GetBuildingImages/';
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  getbuildingimages(buildingid: number) {
    return this.http.get(`${env.apirooturl}${this.BaseUrl}${buildingid}`, {
      responseType: 'json',
    });
  }
}
