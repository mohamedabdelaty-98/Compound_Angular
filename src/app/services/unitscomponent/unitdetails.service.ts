import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class UnitdetailsService {
  BaeUrl: string = '/api/UnitComponent/GetunitComponentByUnitId/';
  constructor(private http: HttpClient) {}
  getunitcompounentbyunit(unitid: number) {
    return this.http.get(`${env.apirooturl}${this.BaeUrl}${unitid}`);
  }
}
