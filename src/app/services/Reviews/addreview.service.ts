import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class AddreviewService {
  BaseUrl: string = '/api/Review/InsertReview';
  constructor(private http: HttpClient) {}
  addreviews(review: FormData) {
    return this.http.post(`${env.apirooturl}${this.BaseUrl}`, review);
  }
}
