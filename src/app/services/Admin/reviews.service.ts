import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private httpClient:HttpClient) { }

  BaseUrl: string = '/api/Review/GetAllReviews';

  getAllReviewes(): Observable<any>{
    return this.httpClient.get(`${env.apirooturl}${this.BaseUrl}`);

  }
}
