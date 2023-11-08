import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment.development';
import { Compound } from 'src/app/Models/compound';

@Injectable({
  providedIn: 'root'
})
export class EditcompoundService {
  private BaseUrlCompounds: string = '/api/Compound/EditCompound';

  constructor(private httpClient: HttpClient) {}

  editCompound(compoundData: Compound): Observable<any> {
    const headers = new HttpHeaders();
    //authorization

    return this.httpClient.put(
      `${env.apirooturl}${this.BaseUrlCompounds}`,
      compoundData
    );
  }
}
