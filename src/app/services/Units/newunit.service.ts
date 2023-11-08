import { Injectable  } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewunitService {
  BaseUrl: string = '/api/Unit/InsertUnit/';

  constructor(private httpClient: HttpClient) {}

  createunit(UnitData: FormData): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   

    return this.httpClient.post(
      `${env.apirooturl}${this.BaseUrl}`,
      UnitData,httpOptions 
    );
  }
}



