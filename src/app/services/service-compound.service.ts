import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceCompoundService {
  private BaseUrl: string = 'http://localhost:5117/api/ServicesCompound/GetServicesCompoundByCompound/';

  constructor(private httpClient: HttpClient) { }

  getServiceByCompoundId(compoundId: number) {
    return this.httpClient.get(this.BaseUrl + compoundId);
  } 
}