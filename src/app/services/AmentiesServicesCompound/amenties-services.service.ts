import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AmentiesServicesService {
  BaseUrl: string = '/api/ServicesCompound/GetServicesCompoundByCompound/';
  constructor(private http: HttpClient) {}
  getallservicescompound(compoundid: number): Observable<any> {
    return this.http.get(`${env.apirooturl}${this.BaseUrl}${compoundid}`);
  }
}
