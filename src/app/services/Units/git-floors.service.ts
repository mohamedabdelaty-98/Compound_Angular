import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GitFloorsService {
  BaseUrl: string = '/api/Unit/getfloors/';
  AllUnitsUrl: string = '/api/Unit/GetAllUnit';
  UnitsTwoBedroomsUrl: string = '/api/Unit/UnitHaveBedRoomsNumber/';


  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  getfloorsbycompoundid(compoundid: number): Observable<any> {
    return this.http.get(`${env.apirooturl}${this.BaseUrl}${compoundid}`);
  }

  getAllUnits() : Observable<any>{
    return this.http.get(`${env.apirooturl}${this.AllUnitsUrl}`);

  }

  getUnitsTwoBedrooms(num:number){
    return this.http.get(`${env.apirooturl}${this.UnitsTwoBedroomsUrl}${num}`);

  }
}
