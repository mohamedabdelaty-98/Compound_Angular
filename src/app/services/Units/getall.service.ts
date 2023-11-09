import { Injectable  } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetallService {
  BaseUrl: string = '/api/Unit/GetAllUnit/';

  constructor(private httpClient: HttpClient) {}

  getallunit(): Observable<any> {
    const headers = new HttpHeaders();
    //authorization

    return this.httpClient.get(
      `${env.apirooturl}${this.BaseUrl}`);
  }
}

