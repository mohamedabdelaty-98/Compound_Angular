import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuildingsCompoundService {
  compoundid: number = 0;
  BaseUrl: string = '/api/Building/BuildingsUnitActive/';
  BaseUrl_floor: string = '/api/Building/BuildingsBasedUnitFloor/';
  BaseUrl_buildings: string = '/api/Building/getBuildingsByBuildingNumber/';
  BaseUrl_buildings_bedroom: string = '/api/Building/BuildingsUnitNumBedRooms/';
  BaseUrl_buildings_Bigarea: string = '/api/Building/getbuildingbyBigarea/';
  BaseUrl_buildings_smalarea: string = '/api/Building/getbuildingbysmallarea/';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  getbuildingsbycompound(compoundId: number): Observable<any> {
    return this.http.get(`${env.apirooturl}${this.BaseUrl}${compoundId}`);
  }
  getbuildingbyfloorunits(floornum: number, compoundid: number) {
    return this.http.get(
      `${env.apirooturl}${this.BaseUrl_floor}${floornum}/${compoundid}`
    );
  }
  getbuildingbybuildingnumber(buildingnum: number, compoundid: number) {
    return this.http.get(
      `${env.apirooturl}${this.BaseUrl_buildings}${buildingnum}/${compoundid}`
    );
  }
  getbuildingbybedroomsinunit(bedroomnumber: number, compoundid: number) {
    return this.http.get(
      `${env.apirooturl}${this.BaseUrl_buildings_bedroom}${bedroomnumber}/${compoundid}`
    );
  }
  getbuildingbigarea(area: number, compoundid: number) {
    return this.http.get(
      `${env.apirooturl}${this.BaseUrl_buildings_Bigarea}${area}/${compoundid}`
    );
  }
  getbuildingbysmallarea(area: number, compoundid: number) {
    return this.http.get(
      `${env.apirooturl}${this.BaseUrl_buildings_smalarea}${area}/${compoundid}`
    );
  }
}
