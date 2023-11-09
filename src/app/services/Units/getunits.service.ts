import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class GetunitsService {
  BaseUrl: string = '/api/Unit/GetAllUnit';
  BaseUrl_floor: string = '/api/Unit/UnitsInFloor/';
  constructor(private http: HttpClient) {}
  GetALlUnit() {
    return this.http.get(`${env.apirooturl}${this.BaseUrl}`);
  }
  getunitbyfloorunits(floornum: number, compoundid: number) {
    return this.http.get(
      `${env.apirooturl}${this.BaseUrl_floor}${floornum}/${compoundid}`
    );
  }
}
