import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compound } from 'src/app/Models/compound';
import { environment as env } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class NewCompoundService {
  private apiURL = '/api/Compound/NewCompound';

  constructor(private httpClient: HttpClient) {}

  createCompound(compoundData: Compound, lang: number | undefined, lat: number | undefined): Observable<any> {
    const headers = new HttpHeaders();
    // Authorization headers or other headers can be set here.

    // Create a new HttpParams object to include lang and lat as query parameters
    const params = new HttpParams()
      .set('lang', lang?.toString() || '')
      .set('lat', lat?.toString() || '');

    // Make an HTTP POST request with compoundData in the request body and the parameters as query parameters
    return this.httpClient.post(
      `${env.apirooturl}${this.apiURL}`,
      compoundData,
      {
        headers,
        params, // Include query parameters
      }
    );
  }
}
