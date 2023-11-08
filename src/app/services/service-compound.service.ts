import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceCompoundService {
  private BaseUrl: string = 'http://localhost:5117/api/Compound/GetbyCompoundid/';

  constructor(private httpClient: HttpClient) { }

  getServiceByCompoundId(compoundId: number) {
    const url = `${this.BaseUrl}${compoundId}`;
    return this.httpClient.get(url);
  } 
}
