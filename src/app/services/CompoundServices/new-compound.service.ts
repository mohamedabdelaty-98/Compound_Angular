import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class NewCompoundService {
  private apiURL = '/api/Compound/NewCompound';

  constructor(private httpClient: HttpClient) {}

  createCompound(compoundData: FormData): Observable<any> {
    const headers = new HttpHeaders();
    //authorization

    return this.httpClient.post(
      `${env.apirooturl}${this.apiURL}`,
      compoundData
    );
  }
}
