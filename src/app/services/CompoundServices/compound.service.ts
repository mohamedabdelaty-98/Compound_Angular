import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CompoundService {
  private BaseUrlCompounds: string = '/api/Compound/GetAllCompounds';

  constructor(private httpClient: HttpClient) {}

  getallcompounds(): Observable<any> {
    return this.httpClient.get(`${env.apirooturl}${this.BaseUrlCompounds}`);
  }

 


}
