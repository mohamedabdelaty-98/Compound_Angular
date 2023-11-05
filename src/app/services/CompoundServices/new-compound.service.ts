import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewCompoundService {
  private apiURL= 'http://localhost:5117/api/Compound';
  
  
  constructor(private httpClient: HttpClient) { }

  createCompound(compoundData:FormData): Observable <any>{
    const headers = new HttpHeaders();
    //authorization

    return this.httpClient.post(`${this.apiURL}/NewCompound`, compoundData);

  }
}
