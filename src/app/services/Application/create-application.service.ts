import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateApplicationService {
  private apiURL = '/api/Application/AddApplication';

  constructor(private httpClient:HttpClient) { }


  submitApplication(ApplicationData: FormData){


    return this.httpClient.post(
      `${env.apirooturl}${this.apiURL}`,
      ApplicationData
    );
  }
}


