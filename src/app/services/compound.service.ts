import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompoundService {

  private BaseUrl: string = 'http://localhost:5117/api/Compound/GetAllCompounds';

  constructor(private httpClient: HttpClient) { }

  getAllComponents() {
    return this.httpClient.get(this.BaseUrl);
  }
}
